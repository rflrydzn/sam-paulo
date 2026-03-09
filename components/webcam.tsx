"use client";
import { useAppContext } from "@/lib/context";
import { useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import Webcam from "react-webcam";

type Props = {
  profile: "front" | "side" | "back";
};

export type WebcamCaptureRef = {
  capture: () => void;
};

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = forwardRef<WebcamCaptureRef, Props>(
  ({ profile }, ref) => {
    const { setImage } = useAppContext();
    const webcamRef = useRef<Webcam | null>(null);

    const capture = useCallback(async () => {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (!imageSrc) return;

      const blob = await fetch(imageSrc).then((res) => res.blob());
      const file = new File([blob], "webcam-photo.jpg", { type: "image/jpeg" });

      setImage((prev) => ({ ...prev, [profile]: file }));
    }, [profile, setImage]);

    useImperativeHandle(ref, () => ({
      capture,
    }));

    return (
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
    );
  },
);

export default WebcamCapture;
