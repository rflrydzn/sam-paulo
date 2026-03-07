"use client";
import UploadStep from "@/components/step1";
import StyleStep from "@/components/step2";
import { useAppContext } from "@/lib/context";

export default function Home() {
  const { step } = useAppContext();
  return (
    <div className="bg-white  text-slate-900 min-h-screen">
      {step === 1 && <UploadStep />}
      {step === 2 && <StyleStep />}
    </div>
  );
}
