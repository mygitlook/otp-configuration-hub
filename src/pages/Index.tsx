import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const Index = () => {
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP code",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically verify the OTP with your backend
    toast({
      title: "OTP Verification",
      description: "OTP verification successful!",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md p-6 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Enter OTP Code
          </h1>
          <p className="text-sm text-muted-foreground">
            Please enter the 6-digit code sent to your email
          </p>
        </div>

        <div className="space-y-4">
          <InputOTP
            value={otp}
            onChange={setOtp}
            maxLength={6}
            render={({ slots }) => (
              <InputOTPGroup className="gap-2 flex justify-center">
                {slots.map((slot, idx) => (
                  <InputOTPSlot
                    key={idx}
                    {...slot}
                    index={idx}
                  />
                ))}
              </InputOTPGroup>
            )}
          />

          <Button 
            className="w-full" 
            onClick={handleVerifyOTP}
            disabled={otp.length !== 6}
          >
            Verify OTP
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Index;