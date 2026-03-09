"use client";

import { useAppContext } from "@/lib/context";
import { useRef, useState } from "react";
import WebcamCapture from "./webcam";
import { Button } from "./ui/button";
import LiveCapture from "./live-capture";
import CaptureSummary from "./capture-summary";

export default function UploadStep() {
  const { image, setStep, setImage } = useAppContext();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const tips = [
    {
      title: "Natural Lighting",
      description:
        "Face a window or a well-lit area. Avoid harsh shadows or backlighting.",
      icon: "light_mode",
    },
    {
      title: "Front-Facing Only",
      description:
        "Look directly at the camera. Keep your head level and centered in the frame.",
      icon: "face",
    },
    {
      title: "Remove Accessories",
      description:
        "Take off glasses, caps, or masks so the AI can map your face shape accurately.",
      icon: "eyeglasses",
    },
    {
      title: "Clear Background",
      description:
        "Stand against a plain wall if possible. No other faces in the background.",
      icon: "background_replace",
    },
  ];

  const handleClick = () => {
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const allCaptured = image.front && image.side && image.back;

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">
          Upload &amp; Capture
        </h2>
        <p className="text-slate-600">
          Achieve your{" "}
          <span className="text-primary font-semibold">Modern Pinoy Style</span>{" "}
          with precision AI.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div
            onClick={() => inputRef.current?.click()}
            className="group relative flex flex-col items-center justify-center border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 hover:border-primary transition-all rounded-xl p-12 text-center cursor-pointer min-h-80"
          >
            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
              <span className="material-symbols-outlined text-primary text-5xl">
                cloud_upload
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">
              Drag &amp; Drop your photo
            </h3>
            <p className="text-slate-600">
              Supports JPG, PNG (Max 10MB). Best for professional-grade AI
              analysis.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined">upload_file</span>
              Browse Files
            </button>
          </div>
          <input
            className="hidden "
            type="file"
            ref={inputRef}
            // onChange={handleUpload}
          />
          <div className="relative flex items-center py-4">
            <div className="grow border-t border-slate-700"></div>
            <span className="shrink mx-4 text-slate-500 font-bold uppercase text-xs tracking-widest">
              or use webcam
            </span>
            <div className="grow border-t border-slate-700"></div>
          </div>
          <LiveCapture />
        </div>
        <div className="space-y-8">
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">
                verified_user
              </span>
              For Best Results
            </h3>
            <ul className="space-y-6">
              {tips.map((tip) => (
                <li key={tip.icon} className="flex gap-4">
                  <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl">
                    <span className="material-symbols-outlined">
                      {tip.icon}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold">{tip.title}</p>
                    <p className="text-slate-600">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 p-6 rounded-xl flex items-center gap-6 bg-slate-50">
            <div className="w-24 h-24 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center overflow-hidden">
              <div
                className="bg-cover bg-center w-full h-full grayscale hover:grayscale-0 transition-all cursor-help"
                data-alt="clasic clean cut barber shop finish"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrRxjygcHj4H4aVX0jNr4BN-G48OFu-cEDrIr6-RqE-4zy01fwH-k8-_T7VBpGDdvSMTjQHyMY2hYC6C_n2kd3qFYxKMBGAbk3FSVa_fv_bJnFQeBlM9i2k9K1IeQvih8a-ooTcmpPYnrvMvfn5d-69AIzL1n5orVNxh9or-es6uCilJWrCZHk8zLEbx1egDKn-QSH45lN3HAF19d8SdTngjdXDIszRK_r0uPrYPdzRgJabskxQVoPqHBQQdFgKcnPZG9_4HBIx1x5")',
                }}
              ></div>
            </div>
            <div>
              <h4 className="font-bold text-secondary">
                Premium Manila Standard
              </h4>
              <p className="text-slate-600">
                "Gwapong Pinoy, Gawang AI." Our algorithms are trained on
                Filipino facial structures to give you the perfect fade or
                pompadour.
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-4 pt-4">
            <button className="px-8 py-3 rounded-lg border border-slate-700 font-bold hover:bg-slate-800 transition-all">
              Cancel
            </button>
            <Button
              disabled={!allCaptured}
              onClick={() => handleClick()}
              className="bg-primary text-white px-8 py-7 rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md"
            >
              Next: Choose Style
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
