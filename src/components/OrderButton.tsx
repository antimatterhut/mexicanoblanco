import Button from "@/components/Button";
import { SHOP_URL, uiCopy } from "@/content/site";

type OrderButtonProps = {
  // Accepted for later; ignored until the shop is turned on.
  shopPath?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function OrderButton({ variant, className }: OrderButtonProps) {
  if (!SHOP_URL) {
    return (
      <Button href="/find-us#contact" variant={variant} className={className}>
        {uiCopy.comingSoonLabel}
      </Button>
    );
  }

  return (
    <Button href={SHOP_URL} external variant={variant} className={className}>
      {uiCopy.orderLabel}
    </Button>
  );
}
