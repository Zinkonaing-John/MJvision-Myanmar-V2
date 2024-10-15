import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function Architecture() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/architecture1.jpg" alt="architecture1" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>Architecture</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of Architecture</b>
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
              <li>Architecture</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">Dept. of Architecture</h1>
            <br />
            <p>
              ဗိသုကာဌာနသည် လက်တွေ့ကျသော သင်ရိုးညွှန်းတမ်းဖြင့် ဖန်တီးမှုရှိသော
              ဗိသုကာယဉ်ကျေးမှုကို ဦးဆောင်နေသည့် ဗိသုကာပညာရှင်များနှင့်
              ကျွမ်းကျင်အင်ဂျင်နီယာများ ထုတ်လုပ်မှုအဖြစ် ၎င်း၏အမြင်ကို
              အဓိပ္ပာယ်ဖွင့်ဆိုပါသည်။ -ဌာနသည် ပရော်ဖက်ရှင်နယ်ကျင့်ဝတ်၊
              အများသူငှာ ဗိသုကာအင်ဂျင်နီယာ၏ သဘောသဘာဝ၊ ခေါင်းဆောင်မှု၊
              လူမှုရေးတာဝန်ခံမှုနှင့် ဗိသုကာလုပ်ငန်းကဏ္ဍအားလုံးတွင်
              ပရော်ဖက်ရှင်နယ်နှင့် ပြည့်စုံသော လုပ်ငန်းဆောင်တာများကို
              ဖြည့်ဆည်းပေးရန်၊ အနာဂတ်ကို ဦးတည်ပြီး နိုင်ငံတကာ အလေ့အကျင့်များကို
              တန်ဖိုးထားနားလည်သည့် အရည်အချင်းရှိသူများကို ပညာပေးနိုင်ရန်
              ရည်ရွယ်ပါသည်။ ကျင့်ဝတ်များနှင့် အထူးပြု ကျွမ်းကျင်သော
              ကမ္ဘာ့ပညာရေးဖြင့် လျင်မြန်စွာ ပြောင်းလဲနေသော ကမ္ဘာကြီးနှင့်
              လူ့အဖွဲ့အစည်း၏ လိုအပ်ချက်များကို ဖြည့်ဆည်းပေးသည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              အဆောက်အဦတည်ဆောက်မှု၊ အဆောက်အဦဒီဇိုင်း၊
              အဆောက်အဦပြန်လည်မွမ်းမံခြင်း၊ အတွင်းပိုင်းဆောက်လုပ်ရေး၊
              ဆောက်လုပ်ရေးအန္တရာယ်ကင်းရှင်းရေး၊ အဆောက်အဦဆိုင်ရာ၊
              အထူးဆောက်လုပ်ရေး
            </p>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p>
              ဗိသုကာ (အင်ဂျင်နီယာ) အင်ဂျင်နီယာ၊ ဆောက်လုပ်ရေးဘေးကင်းရေး
              (အင်ဂျင်နီယာ) အင်ဂျင်နီယာ၊ အိမ်တွင်းဆောက်လုပ်ရေး (အင်ဂျင်နီယာ)
              အင်ဂျင်နီယာ၊ အဆောက်အဦအုတ်ကျင်း (အင်ဂျင်နီယာ) အင်ဂျင်နီယာ၊
              အဆောက်အဦဆောက်လုပ်ရေးအင်ဂျင်နီယာ၊ ဆောက်လုပ်ရေးပစ္စည်းစမ်းသပ်မှု
              (အင်ဂျင်နီယာ) အင်ဂျင်နီယာစသည်တို့။
            </p>
            <br />
            <div className="flex gap-6">
              <img
                src="images/architecture2.jpg"
                alt="architecture2"
                width={350}
                height={200}
              />
              <img
                src="images/architecture4.jpg"
                alt="architecture4"
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
          img={"images/ICT4.jpg"}
          title={"International Cooperation and Technology"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/electronics2.jpg"}
          title={"အီလက်ထရွန်နစ်ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/renewable3.jpg"}
          title={"အသစ်နှင့် ပြန်လည်အသုံးချနိုင်သော စွမ်းအင်ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
      </div>
      <br />
    </div>
  );
}
