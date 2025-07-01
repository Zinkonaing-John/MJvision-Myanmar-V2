"use client";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between h-20 py-2 px-4 md:px-10 w-full sticky top-0 left-0 bg-slate-800 z-50">
      <Link href={"/"}>
        <Typography variant={"h4"} className="text-[#fff]">
          VISI<b className="text-[#f8532e]">ON</b>
        </Typography>
      </Link>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 text-[#fff] items-center">
        <Link className="py-4" href={"/"}>
          အိမ်
        </Link>
        <Link className="py-4" href={"/about"}>
          အကြောင်း
        </Link>
        <Link className="py-4" href={"/departments"}>
          ဌာနများ
        </Link>
        <Link className="py-4" href={"/club"}>
          ကလပ်/လှုပ်ရှားမှုများ
        </Link>
        <Link className="py-4" href={"/Q&A"}>
          မေး/ဖြေ
        </Link>
      </div>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 text-white focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-7 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white mb-1.5 transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-slate-800 flex flex-col text-white items-center gap-4 py-6 shadow-lg md:hidden animate-fade-in z-50">
          <Link
            className="py-2 w-full text-center"
            href={"/"}
            onClick={() => setOpen(false)}
          >
            အိမ်
          </Link>
          <Link
            className="py-2 w-full text-center"
            href={"/about"}
            onClick={() => setOpen(false)}
          >
            အကြောင်း
          </Link>
          <Link
            className="py-2 w-full text-center"
            href={"/departments"}
            onClick={() => setOpen(false)}
          >
            ဌာနများ
          </Link>
          <Link
            className="py-2 w-full text-center"
            href={"/club"}
            onClick={() => setOpen(false)}
          >
            ကလပ်/လှုပ်ရှားမှုများ
          </Link>
          <Link
            className="py-2 w-full text-center"
            href={"/Q&A"}
            onClick={() => setOpen(false)}
          >
            မေး/ဖြေ
          </Link>
        </div>
      )}
    </nav>
  );
};
