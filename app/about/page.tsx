import GradientDiv from "@/src/components/Ads";
import MediaCard from "@/src/components/Mediacard";
import { NavBar } from "@/src/components/NavBar";
import CardSlider from "@/src/components/SliderCard";
import Testimonicard from "@/src/components/Testimonicard";

export default function About() {
  return (
    <div>
      <NavBar />
      <div className="w-full px-4 md:px-16 py-16 space-y-24">
        {/* Principal's Welcome */}
        <section className="flex flex-col md:flex-row items-center gap-16 bg-white rounded-2xl shadow p-10 mb-16">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-relaxed">
                ကျောင်းအုပ်ကြီး၏ နှုတ်ခွန်းဆက်စကား
              </h1>
            </div>
            <h2 className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">
              ကောလိပ်သည် တီထွင်ကြံဆပြီး သစ္စာရှိသော ကျောင်းသားများကို
              ပရော်ဖက်ရှင်နယ် ကျွမ်းကျင်သူများ ဖြစ်လာစေရန် နိုင်ငံတော်နှင့်
              လူ့အဖွဲ့အစည်း ဖွံ့ဖြိုးတိုးတက်ရေးကို ဦးဆောင်လျက်ရှိသည်။
            </h2>
            <p className="text-gray-700 leading-loose">
              ဤကောလိပ်၏မျှော်မှန်းချက်မှာကမ္ဘာလုံးဆိုင်ရာ
              သက်မွေးဝမ်းကျောင်းပညာအခြေခံကောလိပ်ဖြစ်လာရန်၊ တီထွင်ဖန်တီးမှုနှင့်
              ဆန်းသစ်တီထွင်မှုဆိုင်ရာ ပညာရေးကို ဦးဆောင်နေသည့် ကောလိပ်၊
              စီးပွားရေးနှင့် ပညာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုအတွက် နယ်ပယ်ကို
              ဦးတည်သည့် ကောလိပ်၊ ကျောင်းသား ဦးစားပေးကောလိပ်နှင့်
              အသက်မွေးဝမ်းကြောင်းဆိုင်ရာ စွမ်းရည်များကို ဆက်လက်ရှာဖွေနေသည့်
              ကောလိပ်ဖြစ်သည်။
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/1.jpg"
              alt="Principal"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
            />
          </div>
        </section>

        <div className="border-t border-gray-200 my-12" />

        {/* Executive Director's Welcome */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-16 bg-white rounded-2xl shadow p-10 mb-16">
          <div className="flex-1 flex justify-center">
            <img
              src="/images/2.jpg"
              alt="Director"
              className="rounded-xl shadow-lg w-full max-w-xs object-cover"
            />
          </div>
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              {/* User Group Icon */}

              <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-relaxed">
                အမှုဆောင်ဒါရိုက်တာမှ ကြိုဆို စကား
              </h1>
            </div>
            <p className="text-gray-700 leading-loose">
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
        </section>

        <div className="border-t border-gray-200 my-12" />

        {/* Vision & Mission */}
        <section className="bg-white rounded-2xl shadow p-10">
          <div className="flex items-center gap-3 mb-6">
            {/* Light Bulb Icon */}

            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-relaxed">
              ပညာရေးဆိုင်ရာ အတွေးအခေါ်နှင့် ပန်းတိုင်များ
            </h1>
          </div>
          <p className="text-gray-700 leading-loose">
            Vision University of Jeonju တွင် အရည်အချင်းရှိသော လူတစ်ဦးချင်းစီကို
            တီထွင်ကြံဆပြီး လုံ့လဝီရိယရှိစေရန်နှင့် ခရစ်ယာန်လူနေမှုပုံစံကို
            အခြေခံ၍ နိုင်ငံတော်နှင့် လူ့အဖွဲ့အစည်း ဖွံ့ဖြိုးတိုးတက်ရေးတွင်
            ပါဝင်ကူညီရန် ကျောင်းဆောင်ပုဒ်တစ်ခုရှိသည်။
          </p>
        </section>
      </div>
    </div>
  );
}
