import { Button } from "./ui/button";

interface WhatsAppButtonProps {
  message: string;
}


export default function WhatsAppButton({message}: WhatsAppButtonProps) {

  const phoneNumber = '+94710985154';
  const staticMessage = message;  

  const handleMessageSend = () => {
    const encodedMessage = encodeURIComponent(`${staticMessage}`);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Button onClick={handleMessageSend}>
      Send WhatsApp
    </Button>
  )
}
