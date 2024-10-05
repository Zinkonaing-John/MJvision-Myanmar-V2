import GradientDiv from '@/src/components/Ads'
import MediaCard from '@/src/components/Mediacard'
import Testimonicard from '@/src/components/Testimonicard'
import YouTubePlayer from '@/src/components/Video'

export default function about() {
  return (
    <div className="px-[100px]">
      <div className="grid grid-cols-3 justify-center">
        <div className="col-span-2">
          <h1 className="text-[30px]">ကျောင်းအုပ်ကြီး၏ နှုတ်ခွန်းဆက်စကား</h1>
          <br />
          <h2 className="text-[15px]">
            <b>
              ကောလိပ်သည် တီထွင်ကြံဆပြီး သစ္စာရှိသော ကျောင်းသားများကို
              ပရော်ဖက်ရှင်နယ် ကျွမ်းကျင်သူများ ဖြစ်လာစေရန် နိုင်ငံတော်နှင့်
              လူ့အဖွဲ့အစည်း ဖွံ့ဖြိုးတိုးတက်ရေးကို ဦးဆောင်လျက်ရှိသည်။
            </b>
          </h2>
          <br />
          <p>
            ဤကောလိပ်၏မျှော်မှန်းချက်မှာကမ္ဘာလုံးဆိုင်ရာ
            သက်မွေးဝမ်းကျောင်းပညာအခြေခံကောလိပ်ဖြစ်လာရန်၊ တီထွင်ဖန်တီးမှုနှင့်
            ဆန်းသစ်တီထွင်မှုဆိုင်ရာ ပညာရေးကို ဦးဆောင်နေသည့် ကောလိပ်၊
            စီးပွားရေးနှင့် ပညာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုအတွက် နယ်ပယ်ကို
            ဦးတည်သည့် ကောလိပ်၊ ကျောင်းသား ဦးစားပေးကောလိပ်နှင့်
            အသက်မွေးဝမ်းကြောင်းဆိုင်ရာ စွမ်းရည်များကို ဆက်လက်ရှာဖွေနေသည့်
            ကောလိပ်ဖြစ်သည်။
          </p>
        </div>

        <div className="flex justify-end">
          <img src="images/1.jpg" alt="" />
        </div>
      </div>
      <br />
      <div className="grid grid-cols-3 justify-center">
        <div>
          <img src="images/2.jpg" alt="" />
        </div>

        <div className="col-span-2">
          <h1 className="text-[30px]">အမှုဆောင်ဒါရိုက်တာမှ ကြိုဆို စကား </h1>
          <br />
          <p>
            Jeonju Vision College သည် ကမ္ဘာကို ပြောင်းလဲရန် ရိုးသားပြီး
            အသင့်အတင့် အရည်အချင်းရှိတဲ့ လူ talents များကို ဖွံ့ဖြိုးစေသော
            ကျောင်းတစ်ခု ဖြစ်သည်။ အသိပညာမျှဝေခြင်းမှ အပြင်, တကယ့်ပညာရေးဆိုရင်
            သားသမီးများကို လှပသော နိယာမများနှင့် လူသားအရည်အချင်းသဘာဝကို
            အထောက်အကူဖြစ်စေမည့် talents များကို ဖွံ့ဖြိုးခြင်းဖြစ်သည်။
            ကျောင်းသည် တောင်တက်သော လူ talents များကို ဖန်တီးနိုင်စွမ်းရှိပြီး
            လူမှုအတွက် ကိုယ်တိုင်စွမ်းဆောင်မှုအတွက် အဓိပ္ပာယ်ရှိစွာ
            ကာယကံရှင်အဖြစ် ဖွံ့ဖြိုးလာစေသည်။ အကောင်းဆုံးကျောင်းများ၏
            တစ်ခုအနေဖြင့် ကျောင်းသည် ကျောင်းသားများကို ကြီးမားသော
            ချစ်ခြင်းမေတ္တာ, စိတ်အားထက်သန်မှုနှင့် အမြင်များဖြင့်
            ဖွံ့ဖြိုးစေဖို့ အကောင်းဆုံး ကြိုးစားမည်ဖြစ်သည်။
          </p>
        </div>
      </div>
      <br />
      <div>
        <h1 className="text-[30px]">
          ပညာရေးဆိုင်ရာ အတွေးအခေါ်နှင့် ပန်းတိုင်များ
        </h1>
        <br />
        <p>
          Vision University of Jeonju တွင် အရည်အချင်းရှိသော လူတစ်ဦးချင်းစီကို
          တီထွင်ကြံဆပြီး လုံ့လဝီရိယရှိစေရန်နှင့် ခရစ်ယာန်လူနေမှုပုံစံကို အခြေခံ၍
          နိုင်ငံတော်နှင့် လူ့အဖွဲ့အစည်း ဖွံ့ဖြိုးတိုးတက်ရေးတွင် ပါဝင်ကူညီရန်
          ကျောင်းဆောင်ပုဒ်တစ်ခုရှိသည်။
        </p>
      </div>
      <br />
      <div className="flex gap-4 px-4 mt-3">
        <MediaCard
          img="images/learn-together.jpeg"
          title="အတူလေ့လာပါ။"
          paragraph="အတူတကွ သင်ယူသော အသိုင်းအဝိုင်းသည် အတူတကွ ထူးချွန်ကြသည်။ အတူတကွ သင်ယူနိုင်တဲ့ အသိုက်အဝန်းတစ်ခု ဖွဲ့ဖို့ လိုပါတယ်။"
        />
        <MediaCard
          img="images/hard.jpeg"
          title="ကြိုးစားလေ့လာ"
          paragraph="သင့်အနာဂတ်ကို ကြိုတင်ခန့်မှန်းရန် အကောင်းဆုံးနည်းလမ်းမှာ ၎င်းကို ကိုယ်တိုင်ဖန်တီးရန်ဖြစ်သည်။"
        />
        <MediaCard
          img="images/thinking.jpg"
          title="တွေးခေါ်"
          paragraph="အကောင်းမြင်စိတ်က သင့်ကို အဆိုးမြင်စိတ်ထက် အရာရာကို ပိုကောင်းအောင်လုပ်နိုင်စေတယ်။"
        />
        <MediaCard
          img="images/progress.jpeg"
          title="တိုးတက်မှု"
          paragraph="အချိန်ကြာလာသည်နှင့်အမျှ နေ့စဉ်တိုးတက်မှုအနည်းငယ်သည် အံ့မခန်းရလဒ်များကို ဖြစ်ပေါ်စေသည်။"
        />
      </div>
      <br />
      <div className="px-4">
        <GradientDiv />
      </div>
      <br />
      <div className="grid grid-cols-1">
        <div>
          <Testimonicard />
          <Testimonicard />
        </div>
      </div>
      <br />
      <div className="px-4">
        <GradientDiv />
      </div>
      <div className="grid grid-cols-2 gap-3 mt-8 px-4">
        <YouTubePlayer videoId={'4nI0J5PGtvk'} />
        <YouTubePlayer videoId={'AmwX2-BIpRU'} />
      </div>
    </div>
  )
}
