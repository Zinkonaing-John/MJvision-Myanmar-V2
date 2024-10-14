import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function Electricity() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/ep2.jpg" alt="taekwondo" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>လျှပ်စစ်ဌာန</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of Electricity</b>
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
              <li>လျှပ်စစ်ဌာန</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">Dept. of Electricity(လျှပ်စစ်ဌာန)</h1>
            <br />
            <p>
              လျှပ်စစ်ဌာနသည် ၂၁ ရာစုတွင် ဒစ်ဂျစ်တယ်လျှပ်စစ်နှင့်
              သတင်းအချက်အလတ်ခေတ်တွင် အဓိကအခန်းကဏ္ဍမှပါဝင်သည့်
              လျှပ်စစ်ထိန်းချုပ်မှုနည်းပညာရေးဆိုင်ရာ ပညာရေးကို သင်ကြားပေးသည်။
              ဌာနသည် ဒစ်ဂျစ်တယ်လျှပ်စစ်ထိန်းချုပ်အင်ဂျင်နီယာ၊
              မိုက်ခရိုပရိုဆက်ဆာ၊ အခြေခံအာရုံခံနည်းပညာများ၊
              မော်တာထိန်းချုပ်အင်ဂျင်နီယာနှင့်
              ပါဝါသွယ်တန်းခြင်းအင်ဂျင်နီယာနယ်ပယ်တို့တွင် အခြေခံသင်တန်းများကို
              သင်ကြားပေးသည်။ ထို့အပြင် လက်တွေ့အသုံးချသင်တန်းများကို PLC
              အသုံးချထိန်းချုပ်မှုစနစ်၊ လျှပ်စစ်ကားစနစ်၊
              ဒစ်ဂျစ်တယ်လုပ်ငန်းစဉ်ထိန်းချုပ်စနစ်၊ စက်ရုံအလိုအလျောက်စနစ်၊
              လျှပ်စစ်ပါဝါထိန်းချုပ်မှုစနစ်နှင့် လျှပ်စစ်ဓာတ်အား CAD ကဲ့သို့သော
              ခေတ်မီစမ်းသပ်မှုအခြေခံအဆောက်အအုံနှင့်
              ခေတ်မှီကိရိယာအမျိုးမျိုးဖြင့် တိုးမြှင့်သင်ကြားပေးပါသည်။ -
              ဒစ်ဂျစ်တယ်လျှပ်စစ်အချက်အလက်စနစ်များကို ဒီဇိုင်းရေးဆွဲခြင်း၊
              ဖန်တီးခြင်း၊ လည်ပတ်ခြင်းနှင့် ထိန်းသိမ်းခြင်းဆိုင်ရာ ကျွမ်းကျင်သော
              အင်ဂျင်နီယာပညာရှင်များ မွေးထုတ်ပေးလျက်ရှိပါသည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              နည်းပညာဆိုင်ရာ အစိုးရဝန်ထမ်းများ၊ Korea Electric Power
              Corporation၊ Korea Electric Safety Corporation၊ Korea Telecom၊
              အခြားသော စက်မှုလုပ်ငန်းများ၊ ကာကွယ်ရေး ကန်ထရိုက်တာများ (စစ်မှုထမ်း
              အစားထိုး အကျိုးခံစားခွင့်)၊ စစ်သင်တန်းကျောင်း စသည်ဖြင့်
            </p>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p>
              နည်းပညာဆိုင်ရာ အစိုးရဝန်ထမ်းများ၊ Korea Electric Power
              Corporation၊ Korea Electric Safety Corporation၊ Korea Telecom၊
              အခြားသော စက်မှုလုပ်ငန်းများ၊ ကာကွယ်ရေး ကန်ထရိုက်တာများ
            </p>
            <br />
            <div className="flex gap-6">
              <img
                src="images/ep1.jpg"
                alt="beauty5"
                width={350}
                height={200}
              />
              <img
                src="images/ep4.jpg"
                alt="beauty3"
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
          img={"images/beauty.jpg"}
          title={"ကျန်းမာရေး အလှအပ ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/electronics2.jpg"}
          title={"အီလက်ထရွန်နစ်ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/ECE3.jpg"}
          title={"ရှေးဦးကလေးဘဝပညာရေးဌာ"}
          paragraph={"Rearcher: Htoi Bu"}
        />
      </div>
      <br />
    </div>
  );
}
