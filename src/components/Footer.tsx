'use client'
import TextField from '@mui/material/TextField'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'
import { Typography } from '@mui/material'
export const Footer = () => {
  return (
    <div className="bg-[#efeef4] text-[#031142] px-8 py-10 w-full">
      <div className="grid grid-cols-12 ">
        <div className="col-span-4  flex flex-col gap-4">
          <span>အပ်ဒိတ်များကိုလက်ခံရရှိရန်</span>
          <div
            className="border-[1px] border-[#031142] rounded-md
           p-2 w-[280px] flex justify-between items-center"
          >
            <TextField
              id="standard-basic"
              label="သင့်အီးမေးလ်လိပ်စာကို ထည့်ပါ။"
              variant="standard"
              className="w-[220px]"
              //   onChange={(e) => {
              //     setMsg(e.target.value)
              //     console.log(e.target.value)
              //   }}
            />
            <Link href={''}>
              <ArrowForwardIcon />
            </Link>
          </div>
        </div>
        <div className="col-span-2">
          <span className="text-lg">အကြောင်းအရာများ</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={''}>အိမ်</Link>
            <Link href={''}>အကြောင်း</Link>
            <Link href={''}>ဌာနများ</Link>
            <Link href={''}>ကလပ်/လှုပ်ရှားမှုများ</Link>
            <Link href={''}>မေး/ဖြေ</Link>
            <Link href={''}>သတင်းအချက်အလက်</Link>
          </div>
        </div>
        <div className="col-span-3">
          <span className="text-lg">ဆက်သွယ်ရန်</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={''}>ph no: 010-5926-5992</Link>
            <Link href={''}>မေးလ်:mjvision5@gmial.com</Link>
            <Link href={''}>ကိုယ်ရေးအချက်အလက်မူဝါဒ</Link>
            <Link href={''}>T&C</Link>
          </div>
        </div>
        <div className="col-span-3">
          <span className="text-lg">Social</span>
          <div className="flex flex-col mt-8 gap-2">
            <Link href={''}>Facebook</Link>
            <Link href={''}>Youtube</Link>
            <Link href={''}>Twitter</Link>
            <Link href={''}>Telegram</Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Link href={'/'}>
          <Typography variant={'h4'} className="border-b-2">
            VISI<b className="text-[#f8532e]">ON</b>
          </Typography>
        </Link>
        <div className="flex justify-between items-center mt-1 w-[250px]">
          <Typography className="text-sm">College of Jeonju</Typography>
          <div
            className={'h-4 bg-[#1d21a6] w-[2px]'}
            role="separator"
            aria-orientation="vertical"
          />
          <Typography className="text-sm">전주비전대학교</Typography>
        </div>
      </div>
    </div>
  )
}
