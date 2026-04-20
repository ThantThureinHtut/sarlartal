"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import AuthIllustration from "@/components/illustrations/AuthIllustration";
import { Chewy } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";

const chewy = Chewy({ weight: "400", subsets: ["latin"] });

const formRulebook = z
  .object({
    name: z.string().min(1, "Please tell us your name."),
    // Here is your custom email rule!
    email: z.string().email("Please put a valid email first."),
    password: z.string().min(8, "Your password must be at least 8 characters."),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match.",
    path: ["confirm"], // This tells Zod where the error happened
  });

export default function SignUpPage() {
  const router = useRouter();
  const [zodError, setZodError] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirm?: string;
  }>({});
  const [authError, setAuthError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userAnswers = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirm: formData.get("confirm") as string,
    };
    const checkResult = formRulebook.safeParse(userAnswers);

    // If the validation fails, we set the error state with the specific messages for each field
    if (!checkResult.success) {
      const fieldErrors = checkResult.error.flatten().fieldErrors;
      setZodError({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
        confirm: fieldErrors.confirm?.[0],
      });
      return;
    }

    // If validation passes, we clear any previous errors and proceed with the sign-up process
    setZodError({});
    await signUp.email(
      {
        name: checkResult.data.name,
        email: checkResult.data.email,
        password: checkResult.data.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setAuthError(ctx.error.message);
          console.error("Sign-up error:", ctx.error);
        },
      },
    );
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left panel — branding */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-foreground p-10 text-background animate-in fade-in slide-in-from-left duration-700 fill-mode-both">
        <Link href="/" className="relative z-10">
          <h1 className={`text-3xl text-lime-400 ${chewy.className}`}>
            SarLarTal
          </h1>
        </Link>

        <div className="relative z-10 flex flex-1 items-center justify-center py-8">
          <AuthIllustration />
        </div>

        <blockquote className="relative z-10 space-y-2">
          <p className="text-lg leading-relaxed text-background/80">
            &ldquo;Join thousands of people already using SarLarTal to connect,
            share, and grow together.&rdquo;
          </p>
          <footer className="text-sm text-background/50">SarLarTal Team</footer>
        </blockquote>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-col items-center justify-center px-6 py-12 animate-in fade-in slide-in-from-right duration-700 fill-mode-both">
        <div className="w-full max-w-sm space-y-8">
          {/* Mobile logo */}
          <Link href="/">
            <h1
              className={`text-3xl text-lime-500 text-center lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both ${chewy.className}`}
            >
              SarLarTal
            </h1>
          </Link>

          {/* Heading */}
          <div className="space-y-1 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150 fill-mode-both">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">
              Create an account
            </h2>
            <p className="text-sm text-muted-foreground">
              Fill in the details below to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {authError && (
              <p className="text-sm text-destructive">
                {authError}
              </p>
            )}
            <FieldSet>
              <FieldGroup>
                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <p className="text-sm text-destructive">{zodError.name}</p>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </Field>

                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <p className="text-sm text-destructive">{zodError.email}</p>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                </Field>

                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[400ms] fill-mode-both">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <p className="text-sm text-destructive">{zodError.password}</p>
                  <p className="text-sm text-destructive">{zodError.confirm}</p>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </Field>

                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
                  <FieldLabel htmlFor="confirm">Confirm password</FieldLabel>
                  <div className="relative">
                    <Input
                      id="confirm"
                      name="confirm"
                      type={showConfirm ? "text" : "password"}
                      placeholder="••••••••"
                      autoComplete="new-password"
                      className="pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      tabIndex={-1}
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                    >
                      {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </Field>
              </FieldGroup>
            </FieldSet>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-700 fill-mode-both">
              <Button type="submit" className="w-full" size="lg">
                Create account
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 animate-in fade-in duration-500 delay-700 fill-mode-both">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-muted-foreground animate-in fade-in duration-500 delay-1000 fill-mode-both">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
