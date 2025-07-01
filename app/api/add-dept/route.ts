import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

// Define the structure of the incoming form data
interface FormData {
  name: string;
  category: string;
  description: string;
  career_path?: string;
  license?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse the incoming JSON data
    const { name, category, description, career_path, license } =
      (await request.json()) as FormData;

    // Basic validation
    if (!name || !description || !category) {
      return NextResponse.json(
        { error: "name, category and Description are required." },
        { status: 400 }
      );
    }

    // Connect to MySQL (Aiven)
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      ssl: {
        ca: process.env.MYSQL_CA,
        rejectUnauthorized: true,
      },
    });

    // Insert data into the 'departments' table
    const [result] = await connection.execute(
      "INSERT INTO departments (name, category, description, career_path, license) VALUES (?, ?, ?, ?, ?)",
      [name, category, description, career_path || null, license || null]
    );
    await connection.end();

    return NextResponse.json(
      { message: "Form submitted successfully", result },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Aiven MySQL Insert Error:", error);
    return NextResponse.json(
      { error: "Failed to submit the form.", details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const column = searchParams.get("column");
    const value = searchParams.get("value");

    if (!column || !value) {
      return NextResponse.json(
        { error: "Missing column or value" },
        { status: 400 }
      );
    }

    // Connect to MySQL (Aiven)
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      ssl: {
        ca: process.env.MYSQL_CA,
        rejectUnauthorized: true,
      },
    });

    // Delete from the 'departments' table
    const [result] = await connection.execute(
      `DELETE FROM departments WHERE \`${column}\` = ?`,
      [value]
    );
    await connection.end();

    return NextResponse.json(
      { message: "Department deleted successfully", result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Aiven MySQL Delete Error:", error);
    return NextResponse.json(
      { error: "Failed to delete the department.", details: error.message },
      { status: 500 }
    );
  }
}
