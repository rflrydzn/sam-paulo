"use client";
import { useAppContext } from "@/lib/context";
import { useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import Webcam from "react-webcam";
import { cropCenter } from "@/lib/cropImage";

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
      const croppedFile = await cropCenter(blob);
      setImage((prev) => ({ ...prev, [profile]: croppedFile }));
    }, [profile, setImage]);

    useImperativeHandle(ref, () => ({ capture }));

    return (
      <div style={{ position: "relative", width: 1280, height: 720 }}>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
          style={{ display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 700,
            height: 700,
            transform: "translate(-50%, -50%)",
            border: "2px solid rgba(255, 255, 255, 0.85)",
            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.45)",
            pointerEvents: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
    );
  },
);

export default WebcamCapture;
