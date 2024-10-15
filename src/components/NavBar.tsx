import { Typography } from "@mui/material";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-20 py-2 px-10 w-full sticky top-0 left-0 bg-slate-800">
      <Link href={"/"}>
        <Typography variant={"h4"} className="text-[#fff]">
          VISI<b className="text-[#f8532e]">ON</b>
        </Typography>
      </Link>
      <div className="flex  gap-10 text-[#fff]">
        <Link className="py-4" href={"/"}>အိမ်</Link>
        <Link className="py-4" href={"/about"}>အကြောင်း</Link>
        <Link className="py-4" href={"/departments"}>ဌာနများ</Link>
        <Link className="py-4" href={"/club"}>ကလပ်/လှုပ်ရှားမှုများ</Link>
        <Link className="py-4" href={""}>မေး/ဖြေ</Link>
        <Link className="py-4" href={""}>သတင်းအချက်အလက်</Link>
      </div>
    </div>
  );
};
