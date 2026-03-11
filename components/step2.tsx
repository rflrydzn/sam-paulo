"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { hairstyles } from "@/lib/constants";
import { useAppContext } from "@/lib/context";
import { useState } from "react";

export default function StyleStep() {
  const { image } = useAppContext();
  const [activeTab, setActiveTab] = useState(hairstyles.categories[0].category);

  const currentStyle = hairstyles.categories.find(
    (cat) => cat.category === activeTab,
  )?.styles;
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
                  src={image.front ? URL.createObjectURL(image.front) : ""}
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
          <Tabs
            defaultValue={activeTab}
            onValueChange={(val) => setActiveTab(val)}
          >
            <TabsList className="bg-white my-4">
              <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {hairstyles.categories.map((cat) => (
                  <TabsTrigger
                    key={cat.category}
                    value={cat.category}
                    className="bg-slate-100 border border-slate-200 text-slate-700 flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 font-bold text-sm"
                  >
                    {cat.category}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>
            {hairstyles.categories.map((cat) => (
              <TabsContent key={cat.category} value={cat.category}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentStyle?.map((s) => (
                    <div className="group relative flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-primary transition-all shadow-sm hover:shadow-md">
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          alt="Clean skin fade haircut preview"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          data-alt="Clean skin fade haircut preview"
                          src={s.image}
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-bold text-slate-900">
                            {s.name}
                          </h4>
                          {s.banner && (
                            <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                              {s.banner}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600">{s.description}</p>
                        <button className="mt-auto w-full bg-primary/10 border border-primary text-primary py-2.5 rounded-lg font-bold text-sm group-hover:bg-primary group-hover:text-white transition-all">
                          Select Style
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </main>
  );
}
