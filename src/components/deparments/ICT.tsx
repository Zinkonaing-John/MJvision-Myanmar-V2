import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function ICT() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/ICT1.jpg" alt="ICT" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>International Cooperation and Technology</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of International Cooperation and Technology</b>
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
              <li> International Cooperation and Technology</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">
              Dept. of International Cooperation and Technology
            </h1>
            <br />
            <p>
              ဤဌာနသည် ကျောင်းသားများအား
              ပရော်ဖက်ရှင်နယ်ကမ္ဘာ့ခေါင်းဆောင်ဖြစ်လာစေရန် ပြုစုပျိုးထောင်ပေးရန်
              ပညာရေးရည်မှန်းချက်ရှိပြီး ဒေသတွင်းအသိုက်အဝန်း၊ နိုင်ငံနှင့်ကမ္ဘာ၏
              အပြောင်းအလဲများနှင့် စိန်ခေါ်မှုများကို အပြုသဘောဆောင်သော
              အပြောင်းအလဲများနှင့် စိန်ခေါ်မှုများကို
              ကိုင်တွယ်ဖြေရှင်းခြင်းဖြင့် ပရော်ဖက်ရှင်နယ်ကျွမ်းကျင်မှု၊
              နိုင်ငံတကာဖွံ့ဖြိုးတိုးတက်မှုနှင့် ပူးပေါင်းဆောင်ရွက်မှုနှင့်
              ပြည်တွင်းနှင့်သက်ဆိုင်သည့် သင်တန်းများကို သင်ကြားပေးခြင်းဖြင့်၊
              ရပ်ရွာဖွံ့ဖြိုးတိုးတက်ရေး။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              ဤဌာနမှ ဘွဲ့ရပြီးသော ကျောင်းသားများသည် လက်တွေ့ကျသော အသိပညာနှင့်
              ဒေသန္တရ ရပ်ရွာဖွံ့ဖြိုးရေး၊ နိုင်ငံတကာ ဖွံ့ဖြိုးတိုးတက်ရေး
              ပူးပေါင်းဆောင်ရွက်မှုနှင့် ODA တို့တွင် အထူးပြုထားသော
              ကျွမ်းကျင်ပညာရှင်များအဖြစ် နယ်ပယ်အသီးသီးတွင် ၎င်းတို့၏
              အသက်မွေးဝမ်းကြောင်း လုပ်ငန်းများကို တည်ဆောက်နိုင်မည်ဖြစ်ပါသည်။
            </p>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p>
              ကျောင်းသားများအတွက် ၎င်းတို့၏မေဂျာပေါ်မူတည်၍
              ရရှိနိုင်သောလိုင်စင်များ (ဥပမာ၊ ကားပြုပြင်ထိန်းသိမ်းရေးလိုင်စင်၊
              အလှကုန်လိုင်စင်၊ တိုက်ကွမ်ဒိုနှင့်သက်ဆိုင်သည့်လိုင်စင်၊
              လူမှုဖူလုံရေးဝန်ဆောင်မှုလိုင်စင်) နှင့် နိုင်ငံခြားဘာသာစကားလက်မှတ်
              (TOEIC၊ HSK၊ TOPIK)
            </p>
            <br />
            <div className="flex gap-6">
              <img
                src="images/ICT2.jpg"
                alt="beauty5"
                width={350}
                height={200}
              />
              <img
                src="images/ICT3.jpg"
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
          img={"images/taekwondo2.jpg"}
          title={"တိုက်ကွမ်ဒိုနှင့် ကာယပညာဦးစီးဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/mechanic1.jpg"}
          title={"စက်မှုအင်ဂျင်နီယာဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/beauty.jpg"}
          title={"ကျန်းမာရေး အလှအပ ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
      </div>
      <br />
    </div>
  );
}
