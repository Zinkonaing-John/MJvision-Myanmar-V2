import CustomizedBreadcrumbs from "../Breadcrumps";

export default function ComputerEngineering() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <CustomizedBreadcrumbs />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <nav className="md:col-span-1 bg-gray-50 rounded-xl shadow p-6 h-fit mb-6 md:mb-0">
          <ul className="space-y-4">
            <li>
              <a
                href="#about"
                className="text-blue-700 hover:underline font-medium"
              >
                Computer Engineering
              </a>
            </li>
            <li>
              <a
                href="#departments"
                className="text-blue-700 hover:underline font-medium"
              >
                အသက်မွေးဝမ်းလမ်းကြောင်း
              </a>
            </li>
            <li>
              <a
                href="#certificates"
                className="text-blue-700 hover:underline font-medium"
              >
                ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ
              </a>
            </li>
          </ul>
        </nav>
        {/* Main Content */}
        <main className="md:col-span-3 bg-white rounded-xl shadow p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <img
              src="/images/code1.jpg"
              alt="Computer Engineering"
              className="rounded-lg w-full md:w-2/3 object-cover"
            />
            <div className="flex-1">
              <p className="text-sm text-gray-500 mb-2">July 28, 2024</p>
              <h1 className="text-3xl font-bold text-blue-900 mb-2">
                Computer Engineering
              </h1>
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Dept. of Computer Engineering
              </h2>
            </div>
          </div>
          <section id="about" className="mb-10">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              Dept. of Computer Engineering
            </h3>
            <p className="text-gray-700 leading-relaxed">
              ကွန်ပျူတာအင်ဂျင်နီယာဌာနသည် သတင်းအချက်အလက်လူ့အဖွဲ့အစည်းလိုအပ်ချက်အရ
              ကွန်ပျူတာနှင့် IT အတွက် လက်တွေ့ကျသော ကျွမ်းကျင်ပညာရှင်များကို
              မွေးထုတ်ပေးရန် ရည်ရွယ်ပါသည်။ ထင်ရှားသည်မှာ၊
              အလုပ်ခွင်လေ့ကျင့်ရေးပရိုဂရမ်ကို အာရုံစိုက်ထားသော
              အဓိကသင်တန်းစနစ်သည် ကျောင်းသားများအား မကြာသေးမီက
              နည်းပညာခေတ်ရေစီးကြောင်းနှင့် ကျောင်းသားတစ်ဦးချင်းစီ၏
              စိတ်ဝင်စားမှုနှင့်အတူ တစ်ဆင့်ပြီးတစ်ဆင့် အကြီးစားခွဲများကို
              ပြင်းပြင်းထန်ထန် လေ့လာနိုင်စေပါသည်။ ၎င်းသည်
              ကွန်ပြူတာဟက်ကာ/လုံခြုံရေးနှင့် ဝဘ်မာစတာ/အကြောင်းအရာများ
              အဓိကပံ့ပိုးပေးသည်။
            </p>
          </section>
          <section id="career" className="mb-10">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              အသက်မွေးဝမ်းလမ်းကြောင်း
            </h3>
            <p className="text-gray-700 leading-relaxed">
              ဆော့ဖ်ဝဲလ် (DB၊ ဝဘ်၊ ဂိမ်း၊ အင်ထရာနက်၊ C/S၊ ကွန်ရက်၊
              မြှုပ်နှံထားသည့် စနစ်၊ မာလ်တီမီဒီယာ) ဆော့ဖ်ဝဲပြုစုသူ၊ အိုင်တီရုံး
              (လုပ်ငန်းကြီးများ၊ ဘဏ္ဍာရေးအဖွဲ့အစည်း၊ တက္ကသိုလ်၊
              အစိုးရအဖွဲ့အစည်း၊ သုတေသနဌာန)၊ SI contactor၊ ကွန်ရက်ဒီဇိုင်းနှင့်
              စီမံခန့်ခွဲရေး ကန်ထရိုက်တာ၊ အိုင်တီလုံခြုံရေးဝန်ဆောင်မှုပေးသူ၊
              ငွေကြေးအဖွဲ့အစည်း၊ အိုင်တီဝန်ဆောင်မှုပေးသူ၊
              မိုဘိုင်းဝန်ဆောင်မှုပေးသူ၊ ဝဘ်အကြောင်းအရာများ တီထွင်သူ၊
              ကာတွန်းအကြောင်းအရာများ ဖန်တီးသူ၊ အင်တာနက် စျေးဝယ်စင်တာနှင့်
              ပေါ်တယ်ဆိုက်၊ မိုဘိုင်းဖလက်ရ်ှကာတွန်းထုတ်ဝေသူ၊ ကွန်ပျူတာ
              ပြုပြင်ထိန်းသိမ်းရေး ကန်ထရိုက်တာ၊ အင်တာနက် ဝန်ဆောင်မှုပေးသူ၊
              ရုံးအိုင်တီ စီမံခန့်ခွဲရေး၊ နည်းပညာဆိုင်ရာ အစိုးရ ဝန်ထမ်း၊
              လုပ်ငန်းစတင်ခြင်း၊ အခြားတက္ကသိုလ်ရှိ ကွန်ပျူတာဌာနသို့ ဝင်ခွင့်
            </p>
          </section>
          <section id="certificates">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">
              ရရှိနိုင်သော ကျွမ်းကျင်လိုင်စင်များ
            </h3>
            <p className="text-gray-700 leading-relaxed">
              1.international professional certification Microsoft
              MCP/MCSE/MCDBA/MCSD/MCSA, Oracle OCP-DBA, HP-UX, SCJP,CCNA, CCNP,
              CCIE, SCNA 2.national professional certification
              နိုင်ငံလုံးဆိုင်ရာ ပရော်ဖက်ရှင်နယ် အသိအမှတ်ပြုလက်မှတ်
              သတင်းအချက်အလက် စီမံဆောင်ရွက်ရေး အင်ဂျင်နီယာ၊ သတင်းအချက်အလက်
              လုံခြုံရေး ကျွမ်းကျင်သူ၊ ကွန်ရက် စီမံခန့်ခွဲသူ၊ OA အင်ဂျင်နီယာ၊
              အင်တာနက် ရှာဖွေသူ၊ အင်တာနက် အချက်အလက် ဒီဇိုင်နာ၊ e-Commerce
              စီမံခန့်ခွဲသူ၊ အင်တာနက် စနစ် စီမံခန့်ခွဲသူ၊ ကွန်ပျူတာ အင်ဂျင်နီယာ၊
              ကွန်ပျူတာ အဖွဲ့အစည်း လျှောက်လွှာ အင်ဂျင်နီယာ၊ ကွန်ပျူတာ ကျွမ်းကျင်
              နည်းပြဆရာ၊
            </p>
            <div className="flex flex-col md:flex-row gap-6 mt-6">
              <img
                src="/images/code2.jpg"
                alt="Coder"
                className="rounded-lg w-full md:w-1/2 object-cover"
              />
              <img
                src="/images/code3.jpg"
                alt="Networking"
                className="rounded-lg w-full md:w-1/2 object-cover"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
