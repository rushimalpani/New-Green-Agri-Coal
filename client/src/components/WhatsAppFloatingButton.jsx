import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_CHAT_URL = 'https://wa.me/919421073059';

function WhatsAppFloatingButton() {
  return (
    <a
      href={WHATSAPP_CHAT_URL}
      className="whatsapp-fab"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-fab__tooltip">Want to talk? Chat on WhatsApp</span>
      <FaWhatsapp aria-hidden="true" className="whatsapp-fab__icon" />
    </a>
  );
}

export default WhatsAppFloatingButton;
