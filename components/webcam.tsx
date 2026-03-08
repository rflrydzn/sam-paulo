"use client";
import { useAppContext } from "@/lib/context";
import { useRef, useCallback } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = () => {
  const { setImage } = useAppContext();
  const webcamRef = useRef<Webcam | null>(null);
  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) return;
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const file = new File([blob], "webcam-photo.jpg", { type: "image/jpeg" });
    setImage(file);
  }, [webcamRef]);

  return (
    <>
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </>
  );
};

export default WebcamCapture;
