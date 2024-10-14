import CustomizedBreadcrumbs from "../Breadcrumps";
import CollapsedBreadcrumbs from "../Breadcrumps";
import MediaCard from "../Mediacard";

export default function Social() {
  return (
    <div>
      <CustomizedBreadcrumbs />
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <img src="images/ECE4.jpg" alt="taekwondo" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="ml-10">
            <p className="text-[15px]">July 28, 2024 </p>
            <h1 className="text-[30px]">
              <b>ရှေးဦးကလေးဘဝပညာရေးဌာ</b>
            </h1>
            <h2 className="text-[20px]">
              <b>Dept. of Early Childhood Education</b>
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
              <li>ရှေးဦးကလေးဘဝပညာရေးဌာ</li>
              <br />
              <li>အသက်မွေးဝမ်းလမ်းကြောင်း</li>
              <br />
              <li>ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</li>
              <br />
            </ul>
          </div>

          <div className="col-span-2 text-justify">
            <h1 className="text-[30px]">
              Dept. of Early Childhood Education (ရှေးဦးကလေးဘဝပညာရေးဌာ)
            </h1>
            <br />
            <p>
              ရှေးဦးကလေးဘဝပညာရေးဌာနသည် မွေးကင်းစကလေးငယ်များနှင့်
              လမ်းလျှောက်စကလေးများအတွက် အစောပိုင်းကလေးဆရာများ မွေးထုတ်ပေးရန်
              ရည်ရွယ်ပါသည်။ ငယ်စဉ်ကလေးဘဝသည် လူ့ဘဝကြီးထွားမှုတွင်
              အလွန်အရေးကြီးသောအဆင့်ကို ကိုယ်စားပြုသည်။ ထို့ကြောင့်
              ကျောင်းသားများသည် ဖွံ့ဖြိုးတိုးတက်မှုသီအိုရီများ၊ ထိရောက်သော
              သင်ကြားရေးကိရိယာနှင့် ပစ္စည်းဖွံ့ဖြိုးရေးနှင့်
              သင်ကြားရေးနည်းလမ်းများအပြင် အစောပိုင်းကလေးဘဝပညာရေးနေရာများတွင်
              အသုံးပြုသည့် ကွန်ပျူတာအထောက်အကူပြု ကိရိယာများကို လေ့လာသင်ယူကြသည်။
              ဌာနမှဘွဲ့ရပြီး ကျောင်းသားများသည် တွဲဖက်/ပုဂ္ဂလိက
              သူငယ်တန်းကျောင်းများနှင့်
              အမျိုးသား/အများပြည်သူ/ပေါင်းစပ်ဖွဲ့စည်းထားသော/ပုဂ္ဂလိကနေ့
              ကလေးထိန်းကျောင်းများတွင် အလုပ်အကိုင်များ ရရှိနိုင်ပါသည်။
            </p>
            <br />
            <h1 className="text-[30px]">အသက်မွေးဝမ်းလမ်းကြောင်း</h1>
            <br />
            <p>
              တွဲဖက်/ပုဂ္ဂလိက မူလတန်းဆရာ၊
              အမျိုးသား/အများပြည်သူ/အဖွဲ့အစည်း/ပုဂ္ဂလိက နေ့မူလတန်းကြိုဆရာ၊
              အခြားတက္ကသိုလ်ဝင်ခွင့်၊ အစောပိုင်းကလေးပညာရေး-အထူးပြု သာသနာပြု၊
              အထူးကျွမ်းကျင်မှုနှင့် တတ်မြောက်မှုဆရာ၊ သူငယ်တန်းကျောင်းအုပ်၊
              နေ့ကလေးထိန်းကျောင်းနှင့် ပုဂ္ဂလိက သင်ကြားရေးဌာန၊ အစောပိုင်း
              ကလေးပညာရေး- ဆက်စပ်အဖွဲ့အစည်းများ (သတင်းစာ၊ ရုပ်သံလွှင့်ဌာန၊
              ထုတ်ဝေသူ၊ ကာတွန်း၊ PR သို့မဟုတ် ပုဂ္ဂလိက အဖွဲ့အစည်း စသည်ဖြင့်)
            </p>
            <br />
            <h1 className="text-[30px]">ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ</h1>
            <br />
            <p>
              class 2 သူငယ်တန်းဆရာ (ပညာရေးဝန်ကြီးဌာန၊
              သိပ္ပံနှင့်နည်းပညာဝန်ကြီးဌာန၊ စာမေးပွဲမရှိဘဲ
              လိုင်စင်ဝင်ရောက်ခွင့်) ၊ class 2 ကလေးထိန်းဆရာ (Ministry of Health၊
              Welfare & Family၊ လိုင်စင်ဝင်ရောက်ဖြေဆိုခြင်းမရှိဘဲ)၊ Children
              Recreation Instructor၊ Children Camp Instructor၊
              ကလေးဆိုင်ရာအားကစားခေါင်းဆောင်၊ ကလေးကျန်းမာရေးနှင့်
              ဘေးကင်းရေးမန်နေဂျာ၊ ကလေးအင်္ဂလိပ်စာဆရာ၊
              ကလေးကွန်ပြူတာပညာရေးနည်းပြဆရာ၊ ကလေးများနှင့်ပတ်သက်သည့် လိုင်စင်များ
              (Balloon Art၊ ပန်းချီ၊ POP၊ ပုံစံပန်းချီ၊ Ukulele
              ။ပန်းခင်းကျင်းခြင်း စသည်ဖြင့်)
            </p>
            <br />

            <div className="flex gap-6">
              <img
                src="images/ECE3.jpg"
                alt="beauty5"
                width={350}
                height={200}
              />
              <img
                src="images/ECE1.jpg"
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
          img={"images/renewable2.jpg"}
          title={"အသစ်နှင့် ပြန်လည်အသုံးချနိုင်သော စွမ်းအင်ဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/mechanic1.jpg"}
          title={"စက်မှုအင်ဂျင်နီယာဌာန"}
          paragraph={"Rearcher: Htoi Bu"}
        />
        <MediaCard
          img={"images/ITconvergence2.jpg"}
          title={"IT convergence system"}
          paragraph={"Rearcher: Htoi Bu"}
        />
      </div>
      <br />
    </div>
  );
}
