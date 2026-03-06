"use client";
import UploadStep from "@/components/step1";
import StyleStep from "@/components/step2";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(2);

  return (
    <div className="bg-white  text-slate-900 min-h-screen">
      {currentStep === 1 && <UploadStep />}
      {currentStep === 2 && <StyleStep />}
    </div>
  );
}
