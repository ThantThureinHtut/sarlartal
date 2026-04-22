"use client";

import z from "zod";
import { useState } from "react";
import { FileText, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import InfoRow from "./InfoRow";

type Props = {
  name: string;
  bio: string;
  email: string;
  onNameChange: (v: string) => void;
  onBioChange: (v: string) => void;
  onEmailChange: (v: string) => void;
};

const nameSchema = z.string().min(5, "Name must be at least 5 characters");
const emailSchema = z.string().email("Enter a valid email address");
const pwSchema = z.object({
  oldPw: z.string().min(1, "Current password is required"),
  newPw: z.string().min(1, "New password is required"),
});

function FieldError({ message }: { message: string }) {
  return (
    <p className="text-xs text-destructive flex items-center gap-1">
      <span aria-hidden>⚠</span> {message}
    </p>
  );
}

export default function AccountSection({
  name,
  bio,
  email,
  onNameChange,
  onBioChange,
  onEmailChange,
}: Props) {
  const [bioOpen, setBioOpen] = useState(false);
  const [nameOpen, setNameOpen] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [pwOpen, setPwOpen] = useState(false);

  const [draftBio, setDraftBio] = useState("");
  const [draftName, setDraftName] = useState("");
  const [draftEmail, setDraftEmail] = useState("");
  const [oldPw, setOldPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const [nameAndEmailError, setNameAndEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pwFieldErrors, setPwFieldErrors] = useState<{
    oldPw?: string;
    newPw?: string;
  }>({});

  const [showOldPw, setShowOldPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);


  const handleBioSave = async() => {
    onBioChange(draftBio.trim());
    await fetch(`${process.env.API_URL}/api/user/profile/bio/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ bio: draftBio.trim() }),
    });
    setBioOpen(false);
  };
const  handleNameSave = async () =>  {
    const result = nameSchema.safeParse(draftName);
    if (!result.success) {
      setNameAndEmailError(result.error.issues[0].message);
      return;
    }
    onNameChange(draftName.trim());
    await fetch(`${process.env.API_URL}/api/user/profile/name/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name: draftName.trim() }),
    });
    setNameOpen(false);
  }

  const handleEmailSave =  () => {
    const result = emailSchema.safeParse(draftEmail);
    if (!result.success) {
      setNameAndEmailError(result.error.issues[0].message);
      return;
    }
    onEmailChange(draftEmail.trim());
    setEmailOpen(false);
  }

  const handlePasswordSave = async () => {
    const result = pwSchema.safeParse({ oldPw, newPw });
    if (!result.success) {
      const errs = result.error.flatten().fieldErrors;
      setPwFieldErrors({ oldPw: errs.oldPw?.[0], newPw: errs.newPw?.[0] });
      return;
    }
    setPwFieldErrors({});
    if (newPw !== confirmPw) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPwOpen(false);
  }

  const rows = [
    {
      icon: <FileText className="size-3.75" />,
      label: "Bio",
      value: bio || "No bio yet. Tell people about yourself!",
      muted: !bio,
      onEdit: () => {
        setDraftBio(bio);
        setBioOpen(true);
      },
    },
    {
      icon: <User className="size-3.75" />,
      label: "Display Name",
      value: name,
      onEdit: () => {
        setDraftName(name);
        setNameAndEmailError("");
        setNameOpen(true);
      },
    },
    {
      icon: <Mail className="size-3.75" />,
      label: "Email",
      value: email,
      onEdit: () => {
        setDraftEmail(email);
        setNameAndEmailError("");
        setEmailOpen(true);
      },
    },
    {
      icon: <Lock className="size-3.75" />,
      label: "Password",
      value: "••••••••",
      onEdit: () => {
        setOldPw("");
        setNewPw("");
        setConfirmPw("");
        setPasswordError("");
        setPwFieldErrors({});
        setPwOpen(true);
      },
    },
  ];

  return (
    <>
      {rows.map((row) => (
        <InfoRow key={row.label} {...row} />
      ))}

      {/* Bio */}
      <Dialog open={bioOpen} onOpenChange={setBioOpen}>
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
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button
              onClick={handleBioSave}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Name */}
      <Dialog
        open={nameOpen}
        onOpenChange={(open) => {
          setNameOpen(open);
          if (!open) setNameAndEmailError("");
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Display Name</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="name-input">Name</Label>
            <Input
              id="name-input"
              value={draftName}
              onChange={(e) => {
                setDraftName(e.target.value);
                setNameAndEmailError("");
              }}
              placeholder="Your display name"
              maxLength={50}
              aria-invalid={!!nameAndEmailError}
            />
            {nameAndEmailError && <FieldError message={nameAndEmailError} />}
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button onClick={handleNameSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Email */}
      <Dialog
        open={emailOpen}
        onOpenChange={(open) => {
          setEmailOpen(open);
          if (!open) setNameAndEmailError("");
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Email</DialogTitle>
          </DialogHeader>
          <div className="grid gap-2">
            <Label htmlFor="email-input">Email address</Label>
            <Input
              id="email-input"
              type="email"
              value={draftEmail}
              onChange={(e) => {
                setDraftEmail(e.target.value);
                setNameAndEmailError("");
              }}
              placeholder="your@email.com"
              aria-invalid={!!nameAndEmailError}
            />
            {nameAndEmailError && <FieldError message={nameAndEmailError} />}
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button onClick={handleEmailSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Password */}
      <Dialog
        open={pwOpen}
        onOpenChange={(open) => {
          setPwOpen(open);
          if (!open) {
            setShowOldPw(false);
            setShowNewPw(false);
            setShowConfirmPw(false);
            setPasswordError("");
            setPwFieldErrors({});
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            {/* Current password */}
            <div className="grid gap-1.5">
              <Label htmlFor="old-pw">Current Password</Label>
              <div className="relative">
                <Input
                  id="old-pw"
                  type={showOldPw ? "text" : "password"}
                  value={oldPw}
                  onChange={(e) => {
                    setOldPw(e.target.value);
                    setPwFieldErrors((p) => ({ ...p, oldPw: undefined }));
                  }}
                  placeholder="••••••••"
                  className="pr-9"
                  aria-invalid={!!pwFieldErrors.oldPw}
                />
                <button
                  type="button"
                  onClick={() => setShowOldPw(!showOldPw)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showOldPw ? "Hide password" : "Show password"}
                >
                  {showOldPw ? (
                    <EyeOff className="size-3.5" />
                  ) : (
                    <Eye className="size-3.5" />
                  )}
                </button>
              </div>
              {pwFieldErrors.oldPw && (
                <FieldError message={pwFieldErrors.oldPw} />
              )}
            </div>

            {/* New password */}
            <div className="grid gap-1.5">
              <Label htmlFor="new-pw">New Password</Label>
              <div className="relative">
                <Input
                  id="new-pw"
                  type={showNewPw ? "text" : "password"}
                  value={newPw}
                  onChange={(e) => {
                    setNewPw(e.target.value);
                    setPwFieldErrors((p) => ({ ...p, newPw: undefined }));
                    setPasswordError("");
                  }}
                  placeholder="••••••••"
                  className="pr-9"
                  aria-invalid={!!pwFieldErrors.newPw}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPw(!showNewPw)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showNewPw ? "Hide password" : "Show password"}
                >
                  {showNewPw ? (
                    <EyeOff className="size-3.5" />
                  ) : (
                    <Eye className="size-3.5" />
                  )}
                </button>
              </div>
              {pwFieldErrors.newPw && (
                <FieldError message={pwFieldErrors.newPw} />
              )}
            </div>

            {/* Confirm password */}
            <div className="grid gap-1.5">
              <Label htmlFor="confirm-pw">Confirm New Password</Label>
              <div className="relative">
                <Input
                  id="confirm-pw"
                  type={showConfirmPw ? "text" : "password"}
                  value={confirmPw}
                  onChange={(e) => {
                    setConfirmPw(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="••••••••"
                  className="pr-9"
                  aria-invalid={!!passwordError}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPw(!showConfirmPw)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showConfirmPw ? "Hide password" : "Show password"}
                >
                  {showConfirmPw ? (
                    <EyeOff className="size-3.5" />
                  ) : (
                    <Eye className="size-3.5" />
                  )}
                </button>
              </div>
              {passwordError && <FieldError message={passwordError} />}
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              Cancel
            </DialogClose>
            <Button onClick={handlePasswordSave}>Update Password</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
