"use client";

import { useAppContext } from "@/lib/context";

export default function StyleStep() {
  const { image } = useAppContext();
  return (
    <main className="max-w-7xl mx-auto px-6 py-8 pb-32">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/3 space-y-6">
          <div className="sticky top-24">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">
                account_circle
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Reference Photo
              </h3>
            </div>
            <div className="relative group">
              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <img
                  alt="User uploaded reference portrait photo"
                  className="w-full h-full object-cover"
                  data-alt="User uploaded reference portrait photo"
                  src={URL.createObjectURL(image.front!)}
                />
              </div>
              <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-sm font-semibold text-slate-900">
                  Profile Scan Complete
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Uploaded 2 mins ago • Frontal View
                </p>
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-primary/40 text-primary font-bold hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined text-sm">
                  upload_file
                </span>
                Change Photo
              </button>
            </div>
          </div>
        </aside>
        <section className="lg:w-2/3">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Choose Your Style
            </h2>
            <p className="text-slate-600">
              Select a premium hairstyle to apply to your 3D portrait
            </p>
          </div>
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-6 font-bold text-sm">
              All Styles
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 px-6 font-medium text-sm hover:bg-slate-200">
              Clean Fade
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 px-6 font-medium text-sm hover:bg-slate-200">
              Side Part
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 px-6 font-medium text-sm hover:bg-slate-200">
              Modern Quiff
            </button>
            <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 px-6 font-medium text-sm hover:bg-slate-200">
              Buzz Cut
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  alt="Clean skin fade haircut preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Clean skin fade haircut preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIbXrhaRE7GQvN5NKoASOspQFFbLw_zllgEidavtpW4hIfnZFsEIgtgvVjwtheYhcMUG0oXVRM3Msq_2WyTJ8Z8dDmo3LF0ijb6OizqYdQuhagTm2_hkkIJnZ8VYx0prkfewuXz7G7KpXEPLymOEzDJbHxbn-M5wc-qFu4UVAonDmBFF7vwpOcfMcHtNjhlnNaMkkW_Pen2YdY-CIQCDkKhSC0xr_RKIkovJiM96ELJ0UO0tWLr6P_JUxPp53Tc8Cj4GnNPU6jZ1-b"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Classic Skin Fade
                  </h4>
                  <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Popular
                  </span>
                </div>
                <p className="text-slate-600">
                  A sharp, gradient blend that tapers to the skin at the
                  neckline. Perfect for a sharp professional look.
                </p>
                <button className="mt-auto w-full bg-primary/10 border border-primary text-primary py-2.5 rounded-lg font-bold text-sm group-hover:bg-primary group-hover:text-background-dark transition-all">
                  Select Style
                </button>
              </div>
            </div>
            <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  alt="Modern textured quiff hairstyle preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Modern textured quiff hairstyle preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZUE_sy9yNqVuArLs45CHBBwHZgtfaj6vISEgVEmo-9vNCtMEdLdawbipyfvieG4vxrWqsSsPCQuyFrw8z9lPHZeTVTiWI-CFeTx5oxF4gCx0F_D7d4sJIZTnYX7y3mhMm7d6bIVCiShKFzZmvzmTYAqSsXOUZiP8axQLWD9VfjL_4hdQrSOVamdG-I3aMc4XgRYIkLm-RX1PjcINiNVdAZNH6AoS-p8cDWsAN3bRGecy7EZWQgBp5Sd7fZJ36NgxH8XqRgUEM-FQH"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Modern Quiff
                  </h4>
                  <span className="bg-secondary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                    Trendy
                  </span>
                </div>
                <p className="text-slate-600">
                  Volume and texture combined for a bold statement. Ideal for
                  those with thick hair looking for height.
                </p>
                <button className="mt-auto w-full bg-primary/10 border border-primary text-primary py-2.5 rounded-lg font-bold text-sm group-hover:bg-primary group-hover:text-background-dark transition-all">
                  Select Style
                </button>
              </div>
            </div>
            <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  alt="Polished side part with pomade preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Polished side part with pomade preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq2Pa01n6GztCzUaLjYPcihxQI3M0qO3a7CeKK1AyK2ofkVPVpWUNnwFi5Z7pbhD4UJSQpgRZmcpVOWGZtmudisdoTG9wpDd7DEsEomszUEQ-d4UEsVkID6u2cgvNV05BIPt8POLYROel8HB7ybOMDEdTihLZK5Acan-zH2a3RvB5Du1eekvUto4sgGSRr9RIRTPn7xlzzbbRLjmTgN_kTlnCpX775MAs2U3AseNDi_Zfxeo-TYvszVs_Rc0qNfVK7l7dB4p7SWYA3"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Executive Side Part
                  </h4>
                </div>
                <p className="text-slate-600">
                  A timeless classic featuring a defined part and slick finish.
                  The ultimate choice for formal events.
                </p>
                <button className="mt-auto w-full bg-primary/10 border border-primary text-primary py-2.5 rounded-lg font-bold text-sm group-hover:bg-primary group-hover:text-background-dark transition-all">
                  Select Style
                </button>
              </div>
            </div>
            <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary transition-all shadow-sm hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  alt="Uniform buzz cut haircut preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-alt="Uniform buzz cut haircut preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7YjieV3kPkUgJNGso3UdRAhQwHMvGo6nVWB1v4pX9IP1Ct5EW46uTcBKw3ijOES_LUBh5xBt0_GNlCT5WdeHTgcMYu9AyNrV5B71NT8J-dm_v0_A14PWN3zYntwghQuQRXG_0usIDVNclCpTPEzvRLViA5Gjwj1fpAkHqFB5wJj_g8TnBFyMgT-UTGKK8bj2d4mx0RZp5CJgdctO_BzqbQsSiRmFtmUVjfX-ps_FdUPVSdoxCvnMVMCAV5HPnGuPKljWik6bZqDa"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900">
                    Precision Buzz Cut
                  </h4>
                </div>
                <p className="text-slate-600">
                  Minimalist and low-maintenance. This style emphasizes facial
                  structure and provides a clean look.
                </p>
                <button className="mt-auto w-full bg-primary/10 border border-primary text-primary py-2.5 rounded-lg font-bold text-sm group-hover:bg-primary group-hover:text-background-dark transition-all">
                  Select Style
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
