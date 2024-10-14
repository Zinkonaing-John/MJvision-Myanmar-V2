import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function CilvilEngineering() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/cilvilengineering2.jpg" alt="taekwondo" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>Cadastre & Civil Engineering</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of Cadastre & Civil Engineering</b>
            </h2>
          </div>
          {/* <div>
            <p className="text-[15px] text-gray">Written by:</p>
            <p>
              <b>Joshua La Seng</b>
            </p>
          </div> */}
        </div>
      </div>
      <br />

      <div>
        <div className="grid grid-cols-3 justify-center">
          <div>
            <ul>
              <li>Cadastre & Civil Engineering</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">
              Dept. of Cadastre & Civil Engineering
            </h1>
            <br />
            <p>
              ဤဌာနသည် 21C ဒစ်ဂျစ်တယ် cadastre သတင်းအချက်အလက်နှင့် ခေတ်မီသော
              မြေယာဖွံ့ဖြိုးတိုးတက်မှုတို့ကို ပေါင်းစပ်ထားသည့်
              ပညာရပ်ဆိုင်ရာနယ်ပယ်အဖြစ် ကျောင်းသားများအား မေဂျာများကို cadastre
              နှင့် မြို့ပြအင်ဂျင်နီယာဘာသာရပ်နှစ်ခုအဖြစ် ပိုင်းခြားပြီး
              သင်ကြားပေးသည်။ -Jeonbuk တွင်တစ်ခုတည်းသော Cadastre major
              သည်နောက်ဆုံးပေါ်မော်ဒယ် cadastral စစ်တမ်း
              (အုပ်ချုပ်ရေးဝန်ဆောင်မှုအပါအဝင်) နှင့် GIS (spatial data system)
              ကိုအသုံးပြုခြင်းဖြင့်လက်တွေ့ပညာရေးကိုပေးသည်။ ဤဘာသာရပ်ကို
              အဓိကသင်ကြားနေသော ကျောင်းသားများအား Korea Cadastral Survey Corp.
              နှင့် အခြားသောပုဂ္ဂလိကကုမ္ပဏီများ အပါအဝင် အစိုးရအေဂျင်စီများမှ
              အလုပ်ခန့်ရန် အကြံပြုထားပါသည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              ထို့အပြင် မြို့ပြအင်ဂျင်နီယာဘာသာရပ်ဖြင့် သင်ကြားနေသည့် ကျောင်းသား၊
              ကျောင်းသူများအား သဘာဝဘေးဒဏ်မှ ကာကွယ်ရန် လိုအပ်သော
              လူမှုအခြေခံအဆောက်အအုံများ လုံခြုံစေရန်နှင့် သက်တောင့်သက်သာရှိသော
              ဘဝပတ်ဝန်းကျင်နှင့် နိုင်ငံတော်ဖွံ့ဖြိုးတိုးတက်ရေးတို့ကို
              ဖန်တီးပေးပြီး အစိုးရနှင့် ဆက်စပ်ကုမ္ပဏီများမှ အလုပ်ခန့်ထားသည့်
              ကျောင်းသားဦးရေ၊ "Saemangeum Comprehensive Development" နှင့်
              "Innovation City Construction Program" မှစ၍
              ဆောက်လုပ်ရေး/ဆောက်လုပ်ရေး ဒီဇိုင်းများတွင် လျင်မြန်စွာ
              တိုးတက်လာခဲ့ပါသည်။
            </p>
            <br />
            <div className="flex gap-6">
              <img
                src="images/cilvilengineering1.jpg"
                alt="beauty5"
                width={350}
                height={200}
              />
              <img
                src="images/cilvilengineering3.jpg"
                alt="beauty3"
                width={350}
                height={200}
              />
            </div>
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p></p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <hr style={{ border: "1px solid black", margin: "20px 0" }} />
      <div className="grid grid-cols-3">
        <MediaCard
          img={"images/childwelfare1.jpg"}
          title={"ကလေးသူငယ်ဆိုင်ရာ လူမှုဖူလုံရေးဌာ"}
          paragraph={"Rearch date: 2024.10.12"}
        />
        <MediaCard
          img={"images/automobile2.jpg"}
          title={"အော်တိုမိုဘိုင်းအင်ဂျင်နီယာဌာန"}
          paragraph={"Rearch date: 2024.10.12"}
        />
        <MediaCard
          img={"images/media3.jpg"}
          title={"အသံလွှင့်ခြင်းနှင့် ဗျူဟာဒီဇိုင်းဌာန"}
          paragraph={"Rearch date: 2024.10.12"}
        />
      </div>
      <br />
    </div>
  );
}
