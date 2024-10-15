import ChildWelfare from "@/src/components/deparments/ ChildWelfare";
import SocialWelfare from "@/src/components/deparments/ SocialWelfare";
import Architecture from "@/src/components/deparments/Architecture";
import AutoMobile from "@/src/components/deparments/AutoMobile";
import beauty from "@/src/components/deparments/beauty";
import Beauty from "@/src/components/deparments/beauty";
import Broadcasting from "@/src/components/deparments/Broadcasting";
import CilvilEngineering from "@/src/components/deparments/CivilEngineering";
import ComputerEngineering from "@/src/components/deparments/ComputerEngineering";
import Electricity from "@/src/components/deparments/Electricity";
import Electronics from "@/src/components/deparments/Electronics";
import ICT from "@/src/components/deparments/ICT";
import ITCovergence from "@/src/components/deparments/ITconvergence";
import Mechanics from "@/src/components/deparments/Mechanics";
import RenewableEnergy from "@/src/components/deparments/RenewableEnergy";
import Social from "@/src/components/deparments/Electricity";
import Taekwondo from "@/src/components/deparments/Taekwondo";
import FAQs from "@/src/components/FAQs";
import MediaCard from "@/src/components/Mediacard";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  const id = 5;

  return (
    <div className="px-20">
      <br />
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Image
            src="/images/departments4.jpg"
            alt=""
            width={700}
            height={500}
            className="h-200"
          />
        </div>
        <div className="text-[40px] ml-10">
          <h1>
            <b>Departments in Jeonju Vision College</b>
          </h1>
        </div>
      </div>
      <br />
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="grid grid-cols-3 gap-4">
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/code2.jpg"}
            title={"Computer Engineering"}
            paragraph={"Dept. of Computer Engineering"}
          />
        </Link>

        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/childwelfare4.jpg"}
            title={"ကလေးသူငယ်ဆိုင်ရာ လူမှုဖူလုံရေးဌာ"}
            paragraph={"Dept. of Child Welfare"}
          />
        </Link>

        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/socialwelfare1.jpg"}
            title={"လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဌာန"}
            paragraph={" Dept. of Social Welfare Management"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/architecture3.jpg"}
            title={"Architecture"}
            paragraph={"Dept. of Architecture"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/automobile2.jpg"}
            title={"အော်တိုမိုဘိုင်းအင်ဂျင်နီယာဌာန"}
            paragraph={"Dept.of Automobile Enginneering"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/beauty2.jpg"}
            title={"ကျန်းမာရေး အလှအပ ဌာန"}
            paragraph={"Dept. of Beauty Health "}
          />
        </Link>

        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/media3.jpg"}
            title={"အသံလွှင့်ခြင်းနှင့် ဗျူဟာဒီဇိုင်းဌာန"}
            paragraph={"Dept.of Broadcasting & Visual Design"}
          />
        </Link>

        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/cilvilengineering1.jpg"}
            title={"Cadastre & Civil Engineering"}
            paragraph={"Dept. of Cadastre & Civil Engineering"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/ep2.jpg"}
            title={"လျှပ်စစ်ဌာန"}
            paragraph={"Dept. of Electricity(လျှပ်စစ်ဌာန)"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/electronics1.jpg"}
            title={"အီလက်ထရွန်နစ်ဌာန"}
            paragraph={"Dept. of Electronics "}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/ICT1.jpg"}
            title={"International Cooperation and Technology"}
            paragraph={"Dept. of ICT"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/ITconvergence1.jpg"}
            title={"IT convergence system"}
            paragraph={"Dept. of IT convergence system"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/mechanic4.jpg"}
            title={"စက်မှုအင်ဂျင်နီယာဌာန"}
            paragraph={"Dept.of Mechanics(စက်မှုအင်ဂျင်နီယာဌာန)"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/renewable2.jpg"}
            title={"အသစ်နှင့် ပြန်လည်အသုံးချနိုင်သော စွမ်းအင်ဌာန"}
            paragraph={"Dept.of New & Renewable Energy"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/ECE2.jpg"}
            title={"ရှေးဦးကလေးဘဝပညာရေးဌာ"}
            paragraph={"Dept. of Early Childhood Education"}
          />
        </Link>
        <Link href={`/departments/${id}`}>
          <MediaCard
            img={"images/taekwondo1.jpg"}
            title={"တိုက်ကွမ်ဒိုနှင့် ကာယပညာဦးစီးဌာန"}
            paragraph={"Dept. of Taekwondo and Physical Education"}
          />
        </Link>
      </div>
      <br />
    </div>
  );
}
