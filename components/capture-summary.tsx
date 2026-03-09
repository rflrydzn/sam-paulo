"use client";

import { blankPortrait } from "@/lib/constants";
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
          <div key={p.label} className="relative group">
            <div className="aspect-3/4 rounded-2xl overflow-hidden border border-secondary/10 bg-slate-100 shadow-xl">
              <img
                alt={p.label}
                className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
                src={URL.createObjectURL(file!) ?? blankPortrait}
              />
              <h3 className="absolute bottom-4 left-4 font-bold text-white capitalize">
                {p.label} Profile
              </h3>
            </div>
            <button
              onClick={() => handleRetake(p.label)}
              className="absolute -top-2 -right-2 z-30 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition border border-slate-200"
            >
              <RotateCcw className="w-4 h-4 text-primary" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
