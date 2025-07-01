import { NextResponse } from "next/server";

const departments = [
  {
    id: 1,
    name: "Computer Engineering",
    category: "Engineering",
    description: "Study of computers, hardware, and software systems.",
    career_path: "Software Developer, Systems Engineer, IT Consultant",
    license: "None",
    img: "/images/code1.jpg",
    title: "Computer Engineering",
    paragraph: "Study of computers, hardware, and software systems.",
  },
  {
    id: 2,
    name: "Civil Engineering",
    category: "Engineering",
    description: "Design and construction of infrastructure projects.",
    career_path: "Civil Engineer, Project Manager",
    license: "PE License",
    img: "/images/cilvilengineering1.jpg",
    title: "Civil Engineering",
    paragraph: "Design and construction of infrastructure projects.",
  },
  // Add more departments as needed...
];

export async function GET() {
  return NextResponse.json(departments, { status: 200 });
}
