"use client";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { Typography } from "@mui/material";
export const Footer = () => {
  return (
    <div className="bg-slate-800 text-[#fff] px-4 md:px-8 py-10 w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
        <div className="md:col-span-4 flex flex-col gap-4 max-w-xs w-full mx-auto md:mx-0">
          <span>အပ်ဒိတ်များကိုလက်ခံရရှိရန်</span>
          <div className="border-[1px] border-[#fff] rounded-md p-2 w-full flex justify-between items-center">
            <TextField
              id="standard-basic"
              label="သင့်အီးမေးလ်လိပ်စာကို ထည့်ပါ။"
              variant={"standard"}
              className="w-full max-w-[180px]"
              color={"success"}
            />
            <Link href={"#"}>
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
        <div className="md:col-span-2 flex flex-col items-start max-w-xs w-full mx-auto md:mx-0">
          <span className="text-lg">အကြောင်းအရာများ</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={"/"}>အိမ်</Link>
            <Link href={"/about"}>အကြောင်း</Link>
            <Link href={"/departments"}>ဌာနများ</Link>
            <Link href={"/club"}>ကလပ်/လှုပ်ရှားမှုများ</Link>
            <Link href={""}>မေး/ဖြေ</Link>
            <Link href={""}>သတင်းအချက်အလက်</Link>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-start max-w-xs w-full mx-auto md:mx-0">
          <span className="text-lg">ဆက်သွယ်ရန်</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={""}>ph no: 010-5926-5992</Link>
            <Link href={""}>မေးလ်:mjvision5@gmial.com</Link>
            <Link href={""}>ကိုယ်ရေးအချက်အလက်မူဝါဒ</Link>
            <Link href={""}>T&C</Link>
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col items-start max-w-xs w-full mx-auto md:mx-0">
          <span className="text-lg">Social</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={""}>Facebook</Link>
            <Link href={""}>Youtube</Link>
            <Link href={""}>Twitter</Link>
            <Link href={""}>Telegram</Link>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center md:text-left">
        <Link href={"/"}>
          <Typography variant={"h4"} className="border-b-2">
            VISI<b className="text-[#f8532e]">ON</b>
          </Typography>
        </Link>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-1 w-full max-w-xs md:max-w-[250px] mx-auto md:mx-0">
          <Typography className="text-sm">College of Jeonju</Typography>
          <div
            className={"h-4 bg-[#fff] w-[2px] my-2 md:my-0 md:mx-2"}
            role="separator"
            aria-orientation="vertical"
          />
          <Typography className="text-sm">전주비전대학교</Typography>
        </div>
      </div>
    </div>
  );
};
