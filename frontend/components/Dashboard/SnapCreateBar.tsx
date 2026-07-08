"use client";

import React, { useEffect, useRef, useState } from "react";
import { Camera, X, RefreshCcw, ImageIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { sendSnap } from "@/app/(action)/serveraction";

type Props = {
  user?: {
    name: string;
    image?: string | null;
  };
};

export default function SnapCreateBar({ user }: Props) {
  const [preview, setPreview] = useState<boolean>(false);
  const [fileImage, setFileImage] = useState<string | null>(null);
  const [fileObject, setFileObject] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [cameraOpen, setCameraOpen] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");
  const [videoReady, setVideoReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    document.body.style.overflow = cameraOpen || preview ? "hidden" : "";
    // If the camera is open and the video element and stream are available, set the video source to the stream
    if (cameraOpen && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [cameraOpen, preview]);

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

  const handleSendSnap = async () => {
    setError(null);
    setSending(true);
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


    await sendSnap(formData).then((res) => {
      if (res.success) {
        setPreview(false);
        setFileImage(null);
        setFileObject(null);
        setPhoto(null);
        setCaption("");
      } else {
        setError(res.error ?? "Failed to send snap. Please try again.");
      }
    }).catch((err) => {
      console.error("Error sending snap:", err);
      setError("Something went wrong. Please try again.");
    }).finally(() => {
      setSending(false);
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
    setError(null);
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
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white shadow-sm ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-150"
            >
              <X className="size-5" />
            </button>

            <span className="text-xs font-semibold tracking-widest uppercase text-white/75">
              Camera
            </span>

            <button
              onClick={flipCamera}
              aria-label="Flip camera"
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white shadow-sm ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-150"
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
                <div className="absolute inset-0 rounded-4xl bg-white/10 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-linear-to-r from-transparent via-white/15 to-transparent" />
                </div>
              )}
              <video
                ref={videoRef}
                autoPlay
                playsInline
                onCanPlay={() => setVideoReady(true)}
                className="w-full h-full object-cover rounded-4xl shadow-2xl transition-opacity duration-300"
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
              className="flex size-11 items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white shadow-sm ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-150 cursor-pointer mr-auto"
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
          className="fixed bottom-4 right-4 z-40 group flex size-15 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 ring-4 ring-primary/20 hover:ring-primary/40 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Camera className="size-6 group-hover:scale-110 transition-transform duration-200" />
        </button>
      )}

      {/* ── Preview screen — mirrors the CardBox framed-card layout ── */}
      {preview && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background animate-in fade-in duration-250">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <button
              onClick={handleCancel}
              aria-label="Cancel"
              className="text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              Cancel
            </button>
            <span className="text-sm font-semibold text-foreground">New Snap</span>
            <button
              aria-label="Send snap"
              onClick={handleSendSnap}
              disabled={sending}
              className="text-sm font-semibold text-primary transition-colors duration-150 hover:text-primary/80 disabled:opacity-50"
            >
              {sending ? "Sending…" : "Send"}
            </button>
          </div>

          {/* Scrollable card preview */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="mx-auto w-full max-w-md sm:max-w-lg overflow-hidden rounded-3xl bg-card ring-1 ring-border shadow-sm">
              {/* Header — mirrors CardBox's avatar/name row */}
              <div className="flex items-center gap-3 px-4 py-3">
                <Avatar className="size-10 ring-2 ring-background shadow-sm">
                  <AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "You"} />
                  <AvatarFallback className="bg-muted text-muted-foreground">
                    {(user?.name ?? "You").charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {user?.name ?? "You"}
                  </p>
                  <p className="text-xs text-muted-foreground">Just now</p>
                </div>
              </div>

              {/* Photo — contained within the card, same as CardBox */}
              <div className="relative aspect-4/5 bg-muted">
                {photo && (
                  <Image
                    src={photo}
                    alt="captured"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                )}
                {fileImage && (
                  <Image
                    src={fileImage}
                    alt="preview"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                )}
              </div>

              {/* Caption input — inline, below the photo like CardBox's caption text */}
              <div className="px-4 py-3">
                <label htmlFor="snap-caption" className="sr-only">Caption</label>
                <input
                  type="text"
                  id="snap-caption"
                  placeholder="Add a caption…"
                  name="caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="mt-3 text-center text-sm text-destructive">
                {error}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
