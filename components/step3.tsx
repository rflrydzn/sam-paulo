export default function GenerateStep() {
  return (
    <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-[0.2em] uppercase">
            <span className="w-[85%] h-full bg-secondary"></span>
            Render Complete
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Classic Taper <span className="text-primary">&amp;</span> Textured
            Top
          </h1>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl">
            AI-optimized for your face shape:{" "}
            <span className="text-slate-900 dark:text-white font-semibold">
              Oval
            </span>
            . High-fidelity 3D grooming simulation.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-white font-bold hover:brightness-110 transition-all shadow-lg shadow-secondary/20">
            <span className="material-symbols-outlined text-[20px]">
              refresh
            </span>
            Try Another Style
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <div className="group relative aspect-3/4 rounded-2xl overflow-hidden border border-secondary/10 bg-slate-100 shadow-xl">
          <img
            alt="Front View"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
            data-alt="Portrait of man with sharp fade haircut front view"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz16Az3w3iQ5REcYOTjMEpJtkwjFNQjq5aLc4UoakEb92rbtNvamiDrberc_VbtoedAbEdr7kRBzuBPN7pbJ43IYSlLc7HfGhzgRO69_1y-47aFvSfXE2tgEOWU3KO456vyBf6cClMr_0tHpJg0HFJoyXZtcyJjRG3GnuJrI6IwFoJgJQI8R03qL4v4Y1njfMPcEyNoE9k5gHoxNp_A5eg4HyeE-GNA2oyN6I4av8qfc4fhfNoHcGXGrKu0R3Svr8wWk2tYqSAOItH"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>
          <div className="absolute bottom-6 left-6 flex flex-col">
            <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
              Perspective 01
            </span>
            <h3 className="text-2xl font-bold text-white">Frontal Profile</h3>
          </div>
          <div className="absolute top-6 right-6 p-2 rounded-lg glass-panel text-white/80 text-xs font-mono">
            HD_RENDER_v4.2
          </div>
        </div>
        <div className="group relative aspect-3/4 rounded-2xl overflow-hidden border border-secondary/10 bg-slate-100 shadow-xl">
          <img
            alt="Side View"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
            data-alt="Side profile showing textured hair and sharp fade"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs5yBWusBBCPzxdLrEthSufaU_WtSx8TY_lXsZNhlFkVbUAwOuRsBvpBWH35uC0GitZcbrn6HyhKE_2GVGkvBouzAdUTFhh3BIlTGHZb9623sxrxjmf9hpP-CyJex1JGp0BjmlYjok76Wv2wZyII7V1nHxJpjj25IHCW__jhBbSg-WKg-KVUc8z3O56Vz3Wk3pksIiedz7ovI7ssKP8Z7bYMMpKDRpM4fU_gmAAKLwICra6Khyvtyk1VHFWZMICRS_yaSqPxQJcDPA"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>
          <div className="absolute bottom-6 left-6 flex flex-col">
            <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
              Perspective 02
            </span>
            <h3 className="text-2xl font-bold text-white">Side Texture</h3>
          </div>
          <div className="absolute top-6 right-6 p-2 rounded-lg glass-panel text-white/80 text-xs font-mono">
            FADE_GEOMETRY_OK
          </div>
        </div>
        <div className="group relative aspect-3/4 rounded-2xl overflow-hidden border border-secondary/10 bg-slate-100 shadow-xl">
          <img
            alt="Back View"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
            data-alt="Rear view of professional hairstyle with tapered neckline"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ayGt3HIrgNtE1g9zzVkSG8muRyscnwEBDejzbNgBSwByVIQ8rXx4quax07gCROLPctFTWD0-v43bplCnJhRVGhix4C0QGhUNKKskGdP-op3ClaDKSaMHvffiQCUOT7_hORwgA5oiwMPnQvaGQFlztkIpC1WI3t1s6X0427oVWmoy2cMLG8P0nEVXAcgVi-pRuxOB6vUI3ONv96PW9t0IsiHbC57tgXewqipBBpBlhTZmg4CVbbYDuNZ42PKeBOT27llEqk0cdsaY"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-transparent opacity-80"></div>
          <div className="absolute inset-0 scanline pointer-events-none opacity-20"></div>
          <div className="absolute bottom-6 left-6 flex flex-col">
            <span className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mb-1">
              Perspective 03
            </span>
            <h3 className="text-2xl font-bold text-white">Neckline Finish</h3>
          </div>
          <div className="absolute top-6 right-6 p-2 rounded-lg glass-panel text-white/80 text-xs font-mono">
            SIMULATION_COMPLETE
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-panel border border-slate-200 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold mb-2">Export Styles</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Save your high-res renders or share the transformation link with
              others.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 hover:bg-secondary/10 hover:text-secondary transition-all font-semibold text-sm text-slate-700">
              <span className="material-symbols-outlined text-[18px]">
                bookmark
              </span>
              Save
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 hover:bg-secondary/10 hover:text-secondary transition-all font-semibold text-sm text-slate-700">
              <span className="material-symbols-outlined text-[18px]">
                share
              </span>
              Share
            </button>
          </div>
        </div>
        <div className="p-6 rounded-2xl glass-panel border border-slate-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-bold">Barber Sync</h4>
              <span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary text-[10px] font-bold">
                NEW
              </span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
              Send these 3D specs directly to your barber for a perfect match.
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 py-3 rounded-lg bg-slate-100 hover:bg-secondary/10 hover:text-secondary transition-all font-semibold text-sm text-slate-700">
            <span className="material-symbols-outlined text-[18px]">
              content_paste_go
            </span>
            Share with Barber
          </button>
        </div>
        <div className="p-6 rounded-2xl bg-secondary flex flex-col justify-between shadow-xl shadow-secondary/10">
          <div className="text-white">
            <h4 className="text-lg font-black mb-2 uppercase italic">
              Ready for reality?
            </h4>
            <p className="text-sm text-white/80 font-medium mb-6">
              Book an appointment with a top-rated AI-supported barber near you.
            </p>
          </div>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-background-dark text-white font-bold text-sm hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-[18px]">
              calendar_month
            </span>
            Book Appointment
          </button>
        </div>
      </div>
      <div className="mt-12 p-8 rounded-2xl border border-secondary/10 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg
            className="h-full w-full"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="url(#grid-pattern)"
            ></path>
            <defs>
              <pattern
                height="10"
                id="grid-pattern"
                patternUnits="userSpaceOnUse"
                width="10"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="0.5"
                ></path>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-1">
            <p className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Style Complexity
            </p>
            <p className="text-2xl font-bold">Advanced</p>
            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-secondary"></div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Maintenance
            </p>
            <p className="text-2xl font-bold">Moderate</p>
            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-[85%] h-full bg-secondary"></div>
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Hair Product
            </p>
            <p className="text-2xl font-bold">Matte Clay</p>
            <p className="text-xs text-slate-400">Firm hold recommended</p>
          </div>
          <div className="space-y-1">
            <p className="text-secondary text-[10px] font-bold tracking-widest uppercase">
              Barber Skill
            </p>
            <p className="text-2xl font-bold">Master</p>
            <p className="text-xs text-slate-400">Precision fade required</p>
          </div>
        </div>
      </div>
    </main>
  );
}
