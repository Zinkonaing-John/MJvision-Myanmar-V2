import React from "react";

const AboutSection = () => (
  <section className="py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20">
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4 text-blue-900">
        About Our University
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        ဗစ်ရှင်တက္ကသိုလ်မှ ကြိုဆိုပါတယ်။ ကျွန်ုပ်တို့တက္ကသိုလ်သည်
        ပညာရေးထူးချွန်မှုနှင့် တက်ကြွသောကျောင်းသားဘဝတို့ ပေါင်းစပ်ရာနေရာတစ်ခု
        ဖြစ်ပါသည်။ ကျွန်ုပ်တို့၏ ရည်မှန်းချက်မှာ ကျောင်းသား၊ ကျောင်းသူများကို
        ၎င်းတို့၏ နယ်ပယ်များတွင် ဦးဆောင်သူများ ဖြစ်လာစေရန်နှင့် တာဝန်ယူမှုရှိသော
        ကမ္ဘာလုံးဆိုင်ရာ နိုင်ငံသားများ ဖြစ်လာစေရန်အတွက် အသိပညာ၊
        ကျွမ်းကျင်မှုနှင့် တန်ဖိုးများဖြင့် မြှင့်တင်ပေးရန် ဖြစ်ပါသည်။
      </p>
      <p className="text-md text-gray-600">
        ကျွန်ုပ်တို့သည် ဘွဲ့ကြိုနှင့် ဘွဲ့လွန်ပရိုဂရမ်မျိုးစုံ၊ ကမ္ဘာ့အဆင့်မီ
        ပါမောက္ခများ နှင့် အထောက်အပံ့ပေးသော ကျောင်းဝင်းပတ်ဝန်းကျင်တို့ကို
        ပေးအပ်ထားပါသည်။
      </p>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src="/images/Home9.jpg"
        alt="University Campus"
        className="rounded-xl shadow-lg w-full max-w-md"
      />
    </div>
  </section>
);

export default AboutSection;
