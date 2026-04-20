"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import AuthIllustration from "@/components/illustrations/AuthIllustration";
import { Chewy } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const chewy = Chewy({ weight: "400", subsets: ["latin"] });
const formValidation = z.object({
  email: z.string().email("Please put a valid email first."),
  password: z.string(),
});

export default function LoginPage() {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const [zodError, setZodError] = useState<{
    email?: string;
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userAnswers = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    const checkResult = formValidation.safeParse(userAnswers);

    if (!checkResult.success) {
      // Here you can handle validation errors, e.g., show error messages to the user
      const fieldErrors = checkResult.error.flatten().fieldErrors;
      setZodError({
        email: fieldErrors.email?.[0],
        password: fieldErrors.password?.[0],
      });
      return;
    }

    await signIn.email(
      {
        email: userAnswers.email,
        password: userAnswers.password,
      },
      {
        onSuccess: () => {
          router.push("/dashboard");
        },
        onError: (ctx) => {
          setAuthError(ctx.error.message);
          setZodError({});
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
            &ldquo;The simplest way to stay connected with the people and ideas
            that matter most.&rdquo;
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
              Sign in
            </h2>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-destructive">{authError}</p>
            <FieldSet>
              <FieldGroup>
                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200 fill-mode-both">
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

                <Field className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 fill-mode-both">
                   <p className="text-sm text-destructive">
                      {zodError.password}
                    </p>
                  <div className="flex items-center justify-between">
                   
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      autoComplete="current-password"
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
              </FieldGroup>
            </FieldSet>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 delay-500 fill-mode-both">
              <Button type="submit" className="w-full" size="lg">
                Sign in
              </Button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 animate-in fade-in duration-500 delay-500 fill-mode-both">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs text-muted-foreground">OR</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Sign up link */}
          <p className="text-center text-sm text-muted-foreground animate-in fade-in duration-500 delay-700 fill-mode-both">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground hover:text-primary underline underline-offset-4 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
