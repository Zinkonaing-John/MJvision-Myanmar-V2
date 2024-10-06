import { Typography } from '@mui/material'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-20 py-2 px-10 w-full sticky top-0 left-0">
      <Link href={'/'}>
        <Typography variant={'h4'}>
          VISI<b className="text-[#f8532e]">ON</b>
        </Typography>
      </Link>
      <div className="flex  gap-10 text-[#fff]">
        <Link href={'/'}>အိမ်</Link>
        <Link href={''}>အကြောင်း</Link>
        <Link href={'/departments'}>ဌာနများ</Link>
        <Link href={'/club'}>ကလပ်/လှုပ်ရှားမှုများ</Link>
        <Link href={''}>မေး/ဖြေ</Link>
        <Link href={''}>သတင်းအချက်အလက်</Link>
      </div>
    </div>
  )
}
