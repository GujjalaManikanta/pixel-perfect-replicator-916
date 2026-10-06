// Edit everything about the surprise here: names, messages and photos.
// To add photos: put image files in src/assets and import them, then set `mainPhoto` / `memories[].src`.
import p1 from "@/assets/photo1.jpg.asset.json";
import p2 from "@/assets/photo2.jpg.asset.json";
import p3 from "@/assets/photo3.jpg.asset.json";
import p4 from "@/assets/photo4.jpg.asset.json";
import p5 from "@/assets/photo5.jpg.asset.json";
import p6 from "@/assets/photo6.jpg.asset.json";
import p7 from "@/assets/photo7.jpg.asset.json";
import p8 from "@/assets/photo8.jpg.asset.json";

export const birthday = {
  name: "Mohana",
  welcome: {
    title: "Hey Mohana! 💕",
    subtitle: "A little surprise waiting for you... Are you ready? 👀",
    button: "Open Your Surprise 🎁",
  },
  hero: {
    title: "Happy Birthday, My Dear Pellamaa! 🎂❤️",
    subtitle: "Today is all about celebrating YOU ✨",
  },
  cake: {
    hint: "Tap the cake! 🕯️",
    wish: "Make a wish! 🌟 May all your dreams come true! 💕",
  },
  mainPhoto: p1.url as string | null,
  message: {
    heading: "A Little Message For You 💌",
    text: `Happy Birthday to the most beautiful girl! ❤️

I hope your special day is filled with happiness, laughter, love and unforgettable memories.

You deserve every beautiful thing life has to offer.

Thank you for being such an amazing person and for bringing so much happiness into the lives of the people around you.

May this new chapter of your life be filled with dreams coming true, beautiful adventures, endless smiles and lots of love.

Never stop being the wonderful person you are.

Happy Birthday Chinna! 🎂💖✨`,
  },
  memoriesHeading: "Our Beautiful Memories 💕",
  memoriesSubtitle: "Seven little moments, countless beautiful memories. ❤️",
  // Kept in exact upload order (photo 2 → photo 8).
  memories: [
    { src: p2.url, caption: "Hand In Hand, Memory By Memory 🤝❤️", bw: false },
    { src: p3.url, caption: "One of My Favorite Moments ❤️", bw: false },
    { src: p4.url, caption: "That Smile, That Moment ✨❤️", bw: false },
    { src: p5.url, caption: "A Memory Close To My Heart 🛕❤️", bw: false },
    { src: p6.url, caption: "Some Moments Need No Words... 🖤❤️", bw: true },
    { src: p7.url, caption: "Together Is My Favorite Place To Be 💕", bw: false },
    { src: p8.url, caption: "And Then There's You... 🌸❤️", bw: false },
  ],
  special: {
    title: "💖 A Special Memory 💖",
    src: p7.url,
    caption: "Some memories become a little more special because of the person in them. ❤️",
  },
  finalPhoto: p8.url,
  footer: "Made with full of ❤️ especially for you",
  surprise: {
    button: "Click For One More Surprise 💝",
    title: "💖 A Secret For You 💖",
    text: `If I could give you one thing today, I would give you the ability to see yourself through my eyes.

Then you would understand just how incredibly special you are to me. 🥹❤️

Keep smiling, keep shining, and never forget that you are loved. 🌸

Happy Birthday once again Bangaram! 🎂`,
  },
  final: {
    lead: "Once again...",
    title: "Happy Birthday Mohana ❤️🎂",
    sign: "Keep smiling, Bangaram 💕",
  },
};
