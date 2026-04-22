"use client";

import React, { useEffect, useRef, useState } from "react";
import { Camera, X, RefreshCcw, ArrowRight, ImageIcon } from "lucide-react";
import Image from "next/image";

export default function SnapCreateBar() {
  const [preview, setPreview] = useState<boolean>(false);
  const [fileImage, setFileImage] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [videoReady, setVideoReady] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    document.body.style.overflow = cameraOpen ? "hidden" : "";
    // If the camera is open and the video element and stream are available, set the video source to the stream
    if (cameraOpen && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cameraOpen]);

  const startCamera = async (facing: "user" | "environment" = facingMode) => {
    // Stop any existing stream before starting a new one
    streamRef.current?.getTracks().forEach((t) => t.stop());
    setVideoReady(false);
    try {
      // It request the user to grant access to the camera and returns a stream if permission is granted
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: facing },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraOpen(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const closeCamera = () => {
    // Stop all tracks of the stream to turn off the camera
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setCameraOpen(false);
  };

  const takePhoto = () => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d")!;
    if (facingMode === "user") {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0);
    setPhoto(canvas.toDataURL("image/jpeg"));
    setPreview(true);
    closeCamera();
  };

  const sendSnap = async () => {
    const formData = new FormData();

    if (photo) {
      // Convert base64 data URL from camera to a Blob
      const [header, data] = photo.split(",");
      const mime = header.match(/:(.*?);/)?.[1] ?? "image/jpeg";
      const bytes = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));
      formData.append("image", new Blob([bytes], { type: mime }), "photo.jpg");
    } else if (fileObject) {
      formData.append("image", fileObject);
    }

    formData.append("title", caption);
    await fetch(`${process.env.API_URL}/api/snaps/create`, {
      method: "POST",
      body: formData,
      credentials: "include", // Include cookies for authentication if needed
    }).then((response) => {
      if (response.ok) {
        // Handle successful response
        console.log("Snap sent successfully");
        handleCancel(); // Reset the preview and states after sending
      } else {
        // Handle error response
        console.error("Error sending snap:", response.statusText);
      }
    });
  };
  const flipCamera = () => {
    // Enironment -> back camera, user -> front camera
    const next = facingMode === "user" ? "environment" : "user";
    setFacingMode(next);
    startCamera(next);
  };

  // Cancel the preview and reset all related states to allow the user to retake or choose another photo
  function handleCancel() {
    setPreview(false);
    setFileImage(null);
    setFileObject(null);
    setPhoto(null);
    setCaption("");
    setCameraOpen(true);
    startCamera();
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      {/* ── Camera overlay ── */}
      {cameraOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black animate-in fade-in duration-200">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <button
              onClick={closeCamera}
              aria-label="Close camera"
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-colors duration-150"
            >
              <X className="size-5" />
            </button>

            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
              Camera
            </span>

            <button
              onClick={flipCamera}
              aria-label="Flip camera"
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-colors duration-150"
            >
              <RefreshCcw className="size-5" />
            </button>
          </div>

          {/* Video feed */}
          <div className="flex flex-1 items-center justify-center px-4 py-2 min-h-0">
            <canvas ref={canvasRef} style={{ display: "none" }} />
            <div className="relative w-full max-w-sm sm:max-w-md h-full max-h-full">
              {/* Skeleton shown while camera is initialising */}
              {!videoReady && (
                <div className="absolute inset-0 rounded-[2rem] bg-white/10 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-linear-to-r from-transparent via-white/15 to-transparent" />
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                onCanPlay={() => setVideoReady(true)}
                className="w-full h-full object-cover rounded-[2rem] shadow-2xl transition-opacity duration-300"
                style={{
                  transform: facingMode === "user" ? "scaleX(-1)" : "none",
                  opacity: videoReady ? 1 : 0,
                }}
              />
            </div>
          </div>

          {/* Bottom controls */}
          <div className="flex items-center justify-center py-10 px-10">
            {/* File picker */}
            <label
              aria-label="Choose file"
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-sm transition-colors duration-150 cursor-pointer mr-auto"
            >
              <ImageIcon className="size-5" />
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setFileObject(file);
                  setFileImage(URL.createObjectURL(file));
                  closeCamera();
                  setPreview(true);
                }}
              />
            </label>

            {/* Shutter button */}
            <button
              aria-label="Take photo"
              onClick={takePhoto}
              className="relative flex size-[76px] items-center justify-center rounded-full border-[4px] border-white/80 hover:border-white hover:scale-105 active:scale-95 transition-all duration-150 group"
            >
              <span className="size-[54px] rounded-full bg-white group-active:bg-white/80 transition-colors duration-100" />
            </button>

            {/* Spacer to balance layout */}
            <div className="size-11 ml-auto" />
          </div>
        </div>
      )}

      {/* ── FAB trigger ── */}
      {!preview && !cameraOpen && (
        <button
          onClick={() => startCamera()}
          aria-label="Create snap"
          className="fixed bottom-4 right-4 z-40 group flex size-15 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 ring-4 ring-primary/20 hover:ring-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Camera className="size-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}

      {/* ── Preview screen ── */}
      {preview && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black animate-in fade-in duration-250">
          <div className="relative flex justify-center w-full h-full mt-2">
            {photo && (
              <Image
                src={photo}
                alt="captured"
                className="w-full max-w-sm sm:max-w-md h-full max-h-full object-cover rounded-[2rem] shadow-2xl"
                width={600}
                height={600}
              />
            )}
            {fileImage && (
              <Image
                src={fileImage}
                alt="preview"
                className="w-full max-w-sm sm:max-w-md h-full max-h-full object-cover rounded-[2rem] shadow-2xl"
                width={600}
                height={600}
              />
            )}
            {caption.trim() && (
              <div className="absolute bottom-20 w-full max-w-sm sm:max-w-md px-4 py-2.5 bg-black/40 backdrop-blur-md ">
                <p className="text-sm text-white/90 leading-snug text-center break-words">
                  {caption}
                </p>
              </div>
            )}
          </div>

          <div className="relative z-10 flex flex-col bg-black/45 backdrop-blur-md">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <input
                type="text"
                placeholder="Add a caption…"
                name="caption"
                onChange={(e) => setCaption(e.target.value)}
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 outline-none"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={handleCancel}
                aria-label="Cancel"
                className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                aria-label="Send snap"
                onClick={() => sendSnap()}
                className="flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-transform duration-150"
              >
                Send
                <span className="flex size-5 items-center justify-center rounded-full bg-primary-foreground/20">
                  <ArrowRight className="size-3" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
