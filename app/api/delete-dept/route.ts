import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function DELETE(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Missing department ID" },
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
      "DELETE FROM departments WHERE id = ?",
      [id]
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
