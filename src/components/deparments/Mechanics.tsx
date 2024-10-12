import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function Mechanics() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/mechanic1.jpg" alt="taekwondo" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>စက်မှုအင်ဂျင်နီယာဌာန</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept.of Mechanics(စက်မှုအင်ဂျင်နီယာဌာန)</b>
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
              <li>စက်မှုအင်ဂျင်နီယာဌာန</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2">
            <h1 className="text-[30px]">
              Dept.of Mechanics(စက်မှုအင်ဂျင်နီယာဌာန)
            </h1>
            <br />
            <p>
              အော်တိုမိတ်စက်မှုအင်ဂျင်နီယာဌာနသည် ၁၉၇၆ ခုနှစ်တွင်
              ဂျွန်းဂျူးဝီဇန်တက္ကသိုလ်ကို စက်မှုအင်ဂျင်နီယာဌာနအဖြစ်
              စတင်ဖြန့်ဖြူးခဲ့သည်။ ဌာနသည် အလုပ်လုပ်ထိန်းသိမ်းမှုအဆင့်မြင့်ရှိသော
              ယှဉ်ပြိုင်မှုများရှိသော ဌာနဖြစ်သည်။ IT နှင့် စက်မှုနည်းပညာများကို
              ပေါင်းစပ်၍ CAD, CAM, CAE သင်တန်းများကို ပေးပြီး
              ရိုဘိုက်အင်ဂျင်နီယာ၊ PLC အစီအစဉ်ရေးဆွဲခြင်း၊
              ဟိုက်ဒရောလစ်/ပနေရမိတ်စက်ကိရိယာနှင့်
              အော်တိုမိုဘိုင်းအကြောင်းအရာများကို သင်ကြားပေးသည်။
              ထုတ်လွှင့်မှု/ထုတ်လုပ်မှုအော်တိုမိတ်စက်မှုပညာရှင်များကို ရရှိရန်
              ရည်ရွယ်ထားသည်။ ကျောင်းသားများသည် ဂျွန်းဘုတ်ပြည်နယ်ရှိ
              ဒေသခံလုပ်ငန်းများတွင်သာမက ပြည်သူ့အဖွဲ့အစည်းများတွင်လည်း
              ထူးချွန်မှုရှိပြီး၊ ဌာနသည် လက်ရှိနည်းပညာနှင့် အဆင့်မြင့်
              အင်ဖရားစခရပ်ရှင်များဖြင့် အထူးအရည်အသွေးပညာရေးကို ပံ့ပိုးပေးသည်။
              ၎င်းသည် Doosan Infracore သင်တန်းကို ဖွင့်လှစ်ကာ ကျောင်းသားများသည်
              ကြီးမားသောလုပ်ငန်းများတွင် အလုပ်လုပ်နိုင်ရန် အကူအညီပေးပြီး
              ကလပ်လှုပ်ရှားမှုများကို လှုံ့ဆော်သည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <ul>
              <li>ပုံမှန်စက်မှုအင်ဂျင်နီယာ</li>
              <li>ထုတ်လုပ်မှုလုပ်ငန်းနေရာ</li>
              <li>စက်ရုံအော်တိုမိတ်စက်မှုအဆင့်ဆင်</li>
              <li>
                သေသေချာချာလုပ်ဆောင်မှုနှင့်
                အထူးသေသေချာချာလုပ်ဆောင်မှုနည်းပညာအပိုင်း
              </li>
              <li>ရိုဘိုက်အင်ဂျင်နီယာနည်းပညာ</li>
              <li>အော်တိုမိုဘိုင်းနည်းပညာ</li>
              <li>ဆောက်လုပ်ရေးစက်မှု</li>
              <li>เกษตรစက်မှုအပိုင်း</li>
            </ul>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <ul>
              <li>ထုတ်လုပ်မှုအော်တိုမိတ်စက်အင်ဂျင်နီယာ</li>
              <li>မက္ကထရောနစ်အင်ဂျင်နီယာ</li>
              <li>IT လျှောက်လွှာအင်ဂျင်နီယာ</li>
              <li>အော်တိုမိုဘိုင်းစစ်ဆေးမှုအင်ဂျင်နီယာ</li>
              <li>ထုတ်လုပ်မှုစက်ရုံအင်ဂျင်နီယာ</li>
              <li>ဆောက်လုပ်ရေးစက်မှုအင်ဂျင်နီယာ</li>
              <li>ပုံမှန်စက်မှုအင်ဂျင်နီယာ</li>
            </ul>
            <br />
            <div className="flex gap-4">
              <img
                src="images/mechanic1.jpg"
                alt="beauty5"
                width={400}
                height={200}
              />
              <img
                src="images/mechanic4.jpg"
                alt="beauty3"
                width={400}
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
          img={"images/ECE1.jpg"}
          title={"ရှေးဦးကလေးဘဝပညာရေးဌာ"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/renewable1.jpg"}
          title={"အသစ်နှင့် ပြန်လည်အသုံးချနိုင်သော စွမ်းအင်ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
      </div>
    </div>
  );
}
