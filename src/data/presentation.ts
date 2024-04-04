type Social = {
  label: string;
  link: string;
};

type Presentation = {
  name: string;
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  name: "Red Pie",
  mail: "rpidbing2728.com",
  title: "Hello,I'm not a Red Pie [੭ ᐕ)੭*⁾⁾]",
  profile: "/ZhaoCai.webp",
  description:
    "Nice to meet you, I am *Red Pie*, My profile picture is my cute cat named *招财[ ZhaoCai ]*. I am working hard to become an *IOT developer*, thank you for your visit.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/RpidBing",
    },
  ],
};

export default presentation;
