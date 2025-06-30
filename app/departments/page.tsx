import MediaCard from "@/src/components/Mediacard";
import { NavBar } from "@/src/components/NavBar";
import Image from "next/image";
import Link from "next/link";

async function getDepartments() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/departments`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch departments");
  return res.json();
}

export default async function Page() {
  const departments = await getDepartments();
  return (
    <div>
      <NavBar />
      <div className="px-4 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <div className="flex-1">
            <Image
              src="/images/departments4.jpg"
              alt="Departments Banner"
              width={700}
              height={400}
              className="rounded-xl shadow-lg w-full object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
              Departments in Jeonju Vision College
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Explore our diverse academic departments, each dedicated to
              excellence in education and student success.
            </p>
          </div>
        </div>
        <hr className="border-gray-200 my-8" />
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center md:text-left">
            All Departments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept: any) => (
              <Link key={dept.id} href={`/departments/${dept.id}`}>
                <MediaCard
                  img={dept.img}
                  title={dept.title}
                  paragraph={dept.paragraph}
                />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
