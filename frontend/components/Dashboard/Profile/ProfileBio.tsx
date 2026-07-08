"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

function FieldError({ message }: { message: string }) {
  return (
    <p className="text-xs text-destructive flex items-center gap-1">
      <span aria-hidden>⚠</span> {message}
    </p>
  );
}

type Props = {
  bio: string;
  onBioChange: (v: string) => void;
};

export default function ProfileBio({ bio, onBioChange }: Props) {
  const [bioOpen, setBioOpen] = useState(false);
  const [draftBio, setDraftBio] = useState("");
  const [bioError, setBioError] = useState("");

  const handleBioSave = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"}/api/user/profile/bio/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ bio: draftBio.trim() }),
    });

    if (!res.ok) {
      setBioError("Failed to save bio. Please try again.");
      return;
    }

    onBioChange(draftBio.trim());
    setBioOpen(false);
  };

  return (
    <div className="group flex items-start justify-between gap-3 rounded-2xl border border-dashed border-border px-4 py-3.5">
      <p
        className={
          bio
            ? "text-sm text-foreground leading-relaxed"
            : "text-sm italic text-muted-foreground leading-relaxed"
        }
      >
        {bio || "No bio yet. Tell people about yourself!"}
      </p>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => {
          setDraftBio(bio);
          setBioError("");
          setBioOpen(true);
        }}
        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
      >
        <Pencil className="size-3.5" />
        <span className="sr-only">Edit bio</span>
      </Button>

      <Dialog
        open={bioOpen}
        onOpenChange={(open) => {
          setBioOpen(open);
          if (!open) setBioError("");
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Bio</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="bio-input">Bio</Label>
            <Textarea
              id="bio-input"
              value={draftBio}
              onChange={(e) => setDraftBio(e.target.value)}
              placeholder="Tell people a bit about yourself..."
              maxLength={300}
              className="min-h-24 resize-none"
            />
            <p className="text-xs text-muted-foreground text-right">
              {draftBio.length}/300
            </p>
            {bioError && <FieldError message={bioError} />}
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button onClick={handleBioSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
