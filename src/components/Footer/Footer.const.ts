import telegramIcon from "$/telegram.svg";
import whatsappIcon from "$/whatsapp.svg";
import instagramIcon from "$/instagram.svg";

interface ISocial {
  src: string;
  alt: string;
  href: string;
}

export const socials: ISocial[] = [
  {
    href: 'https://t.me/refleep',
    src: telegramIcon,
    alt: "Telegram"
  },
  {
    href: 'https://wa.me/8617038166522',
    src: whatsappIcon,
    alt: "Whatsapp"
  },
  {
    href: 'https://instagram.com/re.fleep?igshid=MjkzY2Y1YTY=',
    src: instagramIcon,
    alt: "Instagram"
  },
]