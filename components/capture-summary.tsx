"use client";

import { useAppContext } from "@/lib/context";
import { RotateCcw } from "lucide-react";

export default function CaptureSummary({
  onRetake,
}: {
  onRetake: (profile: "front" | "side" | "back") => void;
}) {
  const { image, setImage } = useAppContext();
  const profiles = [
    { label: "front", icon: "face" },
    { label: "side", icon: "side_navigation" },
    { label: "back", icon: "person_pin" },
  ] as const;

  const handleRetake = (profile: "front" | "side" | "back") => {
    setImage((prev) => ({ ...prev, [profile]: null }));
    onRetake(profile);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {profiles.map((p) => {
        const file = image[p.label];
        return (
          <div
            key={p.label}
            className="group relative flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-white hover:bg-slate-50 hover:border-primary transition-all rounded-xl p-6 text-center cursor-pointer"
          >
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg mb-4">
              {file ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Front profile"
                  className="w-24 h-24 object-cover rounded-lg"
                />
              ) : (
                <span className="material-symbols-outlined text-primary text-3xl">
                  {p.icon}
                </span>
              )}
            </div>
            <h3 className="text-sm font-bold mb-1 capitalize">
              {p.label} Profile
            </h3>
            <button
              onClick={() => handleRetake(p.label)}
              className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-1 shadow-sm mx-auto"
            >
              <span className="material-symbols-outlined text-sm">
                <RotateCcw />
              </span>
              Retake
            </button>
          </div>
        );
      })}
    </div>
  );
}
