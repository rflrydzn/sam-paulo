"use client";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { AppContext, useAppContext } from "@/lib/context";
import { useContext } from "react";

export default function Header() {
  const { step } = useAppContext();

  const steps = [
    {
      step: 1,
      title: "Step One",
      description: "Desc for step one",
    },
    {
      step: 2,
      title: "Step Two",
      description: "Desc for step two",
    },
    {
      step: 3,
      title: "Step Three",
      description: "Desc for step three",
    },
  ];

  return (
    <header className="border-b border-slate-100 bg-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <img src="/logo.png" className="bg-white h-12" />
        <div className="space-y-8 text-center ">
          <Stepper defaultValue={step} value={step}>
            {steps.map(({ step, title, description }) => (
              <StepperItem
                key={step}
                step={step}
                className="max-md:items-start [&:not(:last-child)]:flex-1"
              >
                <StepperTrigger className="gap-4 max-md:flex-col">
                  <StepperIndicator />
                  <div className="text-center md:-order-1 md:text-left">
                    <StepperTitle>{title}</StepperTitle>
                    <StepperDescription className="max-sm:hidden">
                      {description}
                    </StepperDescription>
                  </div>
                </StepperTrigger>
                {step < steps.length && (
                  <StepperSeparator className="max-md:mt-3.5 md:mx-4" />
                )}
              </StepperItem>
            ))}
          </Stepper>
          {/* <p
                className="mt-2 text-xs text-muted-foreground"
                role="region"
                aria-live="polite"
              >
                Stepper with inline titles and descriptions
              </p> */}
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
