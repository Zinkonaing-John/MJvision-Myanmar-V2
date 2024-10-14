import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function SocialWelfare() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/socialwelfare3.jpg" alt="socialwelfare3" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဌာ</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of Social Welfare Management(</b>
            </h2>
          </div>
          {/* <div>
            <p className="text-[15px] text-gray">Written by:</p>
            <p>
              <b>Nu Nu Seng Mai</b>
            </p>
          </div> */}
        </div>
      </div>
      <br />

      <div>
        <div className="grid grid-cols-3 justify-center">
          <div>
            <ul>
              <li>လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဌာန</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">
              Dept. of Social Welfare Management(လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဌာန)
            </h1>
            <br />
            <p>
              လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဦးစီးဌာနသည် လူမှုဖူလုံရေးနှင့်
              ကလေးထိန်းဆိုင်ရာ အသိပညာ၊လူမှုဝန်ထမ်းစီမံခန့်ခွဲမှုဌာနမှ
              ဘွဲ့ရများသည် အတန်း 2 လူမှုဝန်ထမ်းနှင့် ကလေးထိန်းဆရာမများကို
              စာမေးပွဲမဖြေဆိုဘဲ ဝင်ခွင့်ရှိသည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              လူမှုဖူလုံရေးအဖွဲ့အစည်း သို့မဟုတ် လုပ်ငန်းစတင်ခြင်းမှ အလုပ်အကိုင်၊
              သက်ကြီးရွယ်အိုများ၊ ကလေးများ၊ ရုပ်ပိုင်းဆိုင်ရာ မသန်မစွမ်းသူများ၊
              ဆယ်ကျော်သက်များနှင့် အမျိုးသမီးများနှင့် အခြား
              အိမ်စောင့်ရှောက်မှု၊ အစိုးရ၊
              အများပြည်သူ/ပေါင်းစပ်ဖွဲ့စည်းထားသော/ပုဂ္ဂလိက ကလေးထိန်းဌာန
              (နေ့ကြိုကျောင်း) သို့မဟုတ် လုပ်ငန်းစတင်ခြင်း၊ လူမှုဖူလုံရေး
              အစိုးရဝန်ထမ်းများ၊ ရုံးခန်းအုပ်ချုပ်ရေးမှူး၊ အပန်းဖြေနည်းပြဆရာ၊
            </p>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p>
              Class 2 လူမှုဝန်ထမ်း (စာမေးပွဲဖြေရန်မလို)၊ class 2 ကလေးထိန်းဆရာမ
              (စာမေးပွဲဖြေရန်မလို)၊ အပန်းဖြေနည်းပြ class 1 နှင့် 2၊
              အကြံဉာဏ်လိုင်စင်၊ ကွန်ပျူတာ ကျွမ်းကျင်မှု class 2 နှင့် 3၊
              ကွန်ပျူတာ စာရင်းကိုင် class 2၊ အစားထိုး ကုသမှုclass 2၊ အနုပညာ
              စောင့်ရှောက်မှု class 2
            </p>
            <br />
            <div className="flex gap-6">
              <img
                src="images/socialwelfare1.jpg"
                alt="socialwelfare1"
                width={350}
                height={200}
              />
              <img
                src="images/socialwelfare2.jpg"
                alt="socialwelfare2"
                width={350}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="grid grid-cols-3">
        <MediaCard
          img={"images/taekwondo2.jpg"}
          title={"တိုက်ကွမ်ဒိုနှင့် ကာယပညာဦးစီးဌာန"}
          paragraph={"Research date : 2024.10.12"}
        />
        <MediaCard
          img={"images/mechanic1.jpg"}
          title={"စက်မှုအင်ဂျင်နီယာဌာန"}
          paragraph={"Research date : 2024.10.12"}
        />
        <MediaCard
          img={"images/beauty.jpg"}
          title={"ကျန်းမာရေး အလှအပ ဌာန"}
          paragraph={"Research date : 2024.10.12"}
        />
      </div>
      <br />
    </div>
  );
}
