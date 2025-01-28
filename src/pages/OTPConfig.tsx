import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Send, Settings } from "lucide-react";

const OTPConfig = () => {
  const [receiverEmail, setReceiverEmail] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [smtpHost, setSmtpHost] = useState("");
  const [smtpPort, setSmtpPort] = useState("");
  const { toast } = useToast();

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically save to your backend
    toast({
      title: "Configuration Saved",
      description: "OTP settings have been updated successfully.",
    });
  };

  const handleTestOTP = () => {
    // Here you would typically trigger a test OTP
    toast({
      title: "Test OTP Sent",
      description: `A test OTP has been sent to ${receiverEmail}`,
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8 flex items-center gap-2">
        <Settings className="h-6 w-6" />
        <h1 className="text-2xl font-bold">OTP Configuration</h1>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSaveConfig} className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5" />
              OTP Receiver Settings
            </h2>
            
            <div className="space-y-2">
              <label htmlFor="receiverEmail" className="text-sm font-medium">
                OTP Receiver Email
              </label>
              <Input
                id="receiverEmail"
                type="email"
                placeholder="Enter receiver email address"
                value={receiverEmail}
                onChange={(e) => setReceiverEmail(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500">
                OTP codes will be sent to this email address
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Send className="h-5 w-5" />
              SMTP Settings
            </h2>
            
            <div className="space-y-2">
              <label htmlFor="senderEmail" className="text-sm font-medium">
                Sender Email
              </label>
              <Input
                id="senderEmail"
                type="email"
                placeholder="Enter sender email address"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="smtpHost" className="text-sm font-medium">
                  SMTP Host
                </label>
                <Input
                  id="smtpHost"
                  type="text"
                  placeholder="smtp.example.com"
                  value={smtpHost}
                  onChange={(e) => setSmtpHost(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="smtpPort" className="text-sm font-medium">
                  SMTP Port
                </label>
                <Input
                  id="smtpPort"
                  type="number"
                  placeholder="587"
                  value={smtpPort}
                  onChange={(e) => setSmtpPort(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button type="submit" className="w-full md:w-auto">
              Save Configuration
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleTestOTP}
              className="w-full md:w-auto"
            >
              Test OTP
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default OTPConfig;