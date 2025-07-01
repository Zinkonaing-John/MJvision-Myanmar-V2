import MediaCard from "@/src/components/Mediacard";
import { NavBar } from "@/src/components/NavBar";
import Image from "next/image";
import Link from "next/link";

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
  {
    id: 3,
    name: "Electrical Engineering",
    category: "Engineering",
    description: "Study of electricity, electronics, and electromagnetism.",
    career_path: "Electrical Engineer, Power Systems Engineer",
    license: "PE License",
    img: "/images/electronics1.jpg",
    title: "Electrical Engineering",
    paragraph: "Study of electricity, electronics, and electromagnetism.",
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    category: "Engineering",
    description: "Design and manufacturing of mechanical systems.",
    career_path: "Mechanical Engineer, Automotive Engineer",
    license: "PE License",
    img: "/images/mechanic1.jpg",
    title: "Mechanical Engineering",
    paragraph: "Design and manufacturing of mechanical systems.",
  },
  {
    id: 5,
    name: "Automobile Engineering",
    category: "Engineering",
    description: "Focus on vehicle design, manufacturing, and maintenance.",
    career_path: "Automotive Engineer, Service Manager",
    license: "None",
    img: "/images/automobile1.jpg",
    title: "Automobile Engineering",
    paragraph: "Focus on vehicle design, manufacturing, and maintenance.",
  },
  {
    id: 6,
    name: "Electronics Engineering",
    category: "Engineering",
    description: "Design and development of electronic devices.",
    career_path: "Electronics Engineer, Embedded Systems Engineer",
    license: "None",
    img: "/images/electronics2.jpg",
    title: "Electronics Engineering",
    paragraph: "Design and development of electronic devices.",
  },
  {
    id: 7,
    name: "Information & Communication Technology",
    category: "IT",
    description: "Study of information technology and communication systems.",
    career_path: "Network Engineer, IT Specialist",
    license: "None",
    img: "/images/ICT1.jpg",
    title: "Information & Communication Technology",
    paragraph: "Study of information technology and communication systems.",
  },
  {
    id: 8,
    name: "IT Convergence",
    category: "IT",
    description:
      "Integration of IT with other fields for innovative solutions.",
    career_path: "IT Consultant, Solutions Architect",
    license: "None",
    img: "/images/ITconvergence1.jpg",
    title: "IT Convergence",
    paragraph: "Integration of IT with other fields for innovative solutions.",
  },
  {
    id: 9,
    name: "Broadcasting & Media",
    category: "Media",
    description: "Study of broadcasting, journalism, and media production.",
    career_path: "Journalist, Media Producer",
    license: "None",
    img: "/images/media1.jpg",
    title: "Broadcasting & Media",
    paragraph: "Study of broadcasting, journalism, and media production.",
  },
  {
    id: 10,
    name: "Child Welfare",
    category: "Social Welfare",
    description: "Focus on the well-being and development of children.",
    career_path: "Child Welfare Officer, Social Worker",
    license: "None",
    img: "/images/childwelfare1.jpg",
    title: "Child Welfare",
    paragraph: "Focus on the well-being and development of children.",
  },
  {
    id: 11,
    name: "Social Welfare",
    category: "Social Welfare",
    description:
      "Support and improve the well-being of individuals and communities.",
    career_path: "Social Worker, Community Service Manager",
    license: "None",
    img: "/images/socialwelfare1.jpg",
    title: "Social Welfare",
    paragraph:
      "Support and improve the well-being of individuals and communities.",
  },
  {
    id: 12,
    name: "Beauty & Cosmetology",
    category: "Health & Beauty",
    description: "Study of beauty treatments and cosmetology.",
    career_path: "Cosmetologist, Beauty Consultant",
    license: "License Required",
    img: "/images/beauty.jpg",
    title: "Beauty & Cosmetology",
    paragraph: "Study of beauty treatments and cosmetology.",
  },
  {
    id: 13,
    name: "Renewable Energy",
    category: "Engineering",
    description: "Study of sustainable and renewable energy sources.",
    career_path: "Renewable Energy Engineer, Sustainability Consultant",
    license: "None",
    img: "/images/renewable1.jpg",
    title: "Renewable Energy",
    paragraph: "Study of sustainable and renewable energy sources.",
  },
  {
    id: 14,
    name: "Architecture",
    category: "Engineering",
    description: "Design and planning of buildings and structures.",
    career_path: "Architect, Urban Planner",
    license: "Architect License",
    img: "/images/architecture1.jpg",
    title: "Architecture",
    paragraph: "Design and planning of buildings and structures.",
  },
  {
    id: 15,
    name: "Taekwondo",
    category: "Sports",
    description: "Martial arts training and education.",
    career_path: "Taekwondo Instructor, Coach",
    license: "Instructor Certification",
    img: "/images/taekwondo.jpg",
    title: "Taekwondo",
    paragraph: "Martial arts training and education.",
  },
];

export default async function Page() {
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
          <div className="flex gap-8">
            {/* Left-side nav bar */}
            <nav className="hidden md:block w-64 min-w-[180px] max-w-xs sticky top-24 self-start">
              <ul className="space-y-2">
                {departments.map((dept) => (
                  <li key={dept.id}>
                    <a
                      href={`#dept-${dept.id}`}
                      className="block px-4 py-2 rounded hover:bg-blue-100 text-blue-800 font-medium transition-colors duration-150"
                    >
                      {dept.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            {/* Cards grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-[5px] mx-auto justify-items-center">
                {departments.map((dept) => (
                  <div
                    key={dept.id}
                    id={`dept-${dept.id}`}
                    className="p-2 max-w-[160px] w-full mx-auto justify-items-center"
                  >
                    <Link href={`/departments/${dept.id}`}>
                      <MediaCard
                        img={dept.img}
                        title={dept.title}
                        paragraph={dept.paragraph}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
