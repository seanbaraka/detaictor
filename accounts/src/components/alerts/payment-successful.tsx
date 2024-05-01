import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function PaymentSuccessful({
  isShown,
  onClose,
}: {
  isShown: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={isShown}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Payment Received</DialogTitle>
          <DialogDescription className="text-center">
            <p className="leading-6">
              Your payment was successful. You have premium access for the next
              30days and on top of that 500 word credits!
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogClose asChild>
          <Button type="button" variant="secondary" onClick={onClose}>
            Continue to Account
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
