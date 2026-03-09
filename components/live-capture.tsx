import { useEffect, useRef, useState } from "react";
import WebcamCapture, { WebcamCaptureRef } from "./webcam";
import { useAppContext } from "@/lib/context";
import CaptureSummary from "./capture-summary";

export default function LiveCapture() {
  const { image } = useAppContext();
  const [enabled, setEnabled] = useState(false);
  const [time, setTime] = useState(10);
  const [selectedProfile, setSelectedProfile] = useState<
    "front" | "side" | "back"
  >("front");
  const webcamRef = useRef<WebcamCaptureRef>(null);

  const selectedClass = "bg-white/20 border-white/40 text-white";

  const profiles = [
    { label: "front", icon: "face" },
    { label: "side", icon: "side_navigation" },
    { label: "back", icon: "person_pin" },
  ];

  const profileOrder: ("front" | "side" | "back")[] = ["front", "side", "back"];
  const allCaptured = image.front && image.side && image.back;
  useEffect(() => {
    if (!enabled) return;

    if (time === 0) {
      webcamRef.current?.capture();
      setEnabled(false);
      setTime(10);

      const currentIndex = profileOrder.indexOf(selectedProfile);
      const nextProfile = profileOrder[currentIndex + 1];

      if (nextProfile) setSelectedProfile(nextProfile);
    }

    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time, enabled]);

  if (allCaptured)
    return (
      <CaptureSummary onRetake={(profile) => setSelectedProfile(profile)} />
    );

  return (
    <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
      {enabled ? (
        <WebcamCapture profile={selectedProfile} ref={webcamRef} />
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full p-4 flex justify-center gap-3 z-30">
            {profiles.map((p) => {
              const file = image[p.label as "front" | "side" | "back"];
              return (
                <div
                  key={p.label}
                  className={`${p.label === selectedProfile ? selectedClass : "bg-black/40 border-white/20 text-white/60 "} w-16 h-16  backdrop-blur-md border rounded-lg flex flex-col items-center justify-center text-[8px] font-bold uppercase`}
                >
                  {file ? (
                    <img src={URL.createObjectURL(file)} className="w-8 h-8" />
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm">
                        {p.icon}
                      </span>
                      {p.label}
                    </>
                  )}
                </div>
              );
            })}
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10 transition-colors group-hover:bg-black/30">
            <div className="text-center text-white">
              <div className="mb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                  Instruction
                </p>
                <h4 className="text-xl font-black">
                  Align your {selectedProfile} profile
                </h4>
              </div>
              <button
                onClick={() => setEnabled(true)}
                className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg flex items-center gap-2 mx-auto"
              >
                <span className="material-symbols-outlined">videocam</span>
                Start Capture
              </button>
            </div>
          </div>
        </>
      )}
      <div className="w-full h-full bg-linear-to-br from-slate-900 to-black flex items-center justify-center opacity-80">
        <div className="w-64 h-64 border-2 border-dashed border-white/20 rounded-full flex items-center justify-center">
          <div className="w-48 h-48 border border-primary/30 rounded-full animate-pulse"></div>
        </div>
      </div>
      {enabled && (
        <div className="absolute bottom-4 left-0 w-full px-6 flex justify-between items-center z-20">
          <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] text-white flex items-center gap-2 border border-white/10 font-bold uppercase tracking-tighter">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            Capturing in {time}
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg text-white">
            <span className="material-symbols-outlined text-sm">settings</span>
          </div>
        </div>
      )}
    </div>
  );
}
