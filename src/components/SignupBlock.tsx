import Button from "@/components/Button";
import { SIGNUP_FORM_URL, signupCopy } from "@/content/site";

// Renders nothing until SIGNUP_FORM_URL is set. Links out to the hosted form
// rather than showing a form that does not work.
export default function SignupBlock() {
  if (!SIGNUP_FORM_URL) return null;

  return (
    <div className="mt-12 rounded-2xl bg-surface p-6 md:p-8">
      <h3 className="font-display text-2xl">{signupCopy.heading}</h3>
      <p className="mt-2 text-muted">{signupCopy.intro}</p>
      <Button href={SIGNUP_FORM_URL} external className="mt-6">
        {signupCopy.buttonLabel}
      </Button>
    </div>
  );
}
