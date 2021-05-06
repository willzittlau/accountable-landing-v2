import Chat from 'assets/widget/chat.svg';
import Community from 'assets/widget/community.svg';
import Github from 'assets/widget/github.svg';
import { IoLogoFacebook } from 'react-icons/io';
import { IoLogoPwa, IoLogoApple, IoLogoGooglePlaystore, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat,
      altText: 'Community',
      title: 'Join the Community',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 2,
      iconSrc: Community,
      altText: 'Chat',
      title: 'Chat Communication',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
    {
      id: 3,
      iconSrc: Github,
      altText: 'Github',
      title: 'Github Access',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
    },
  ],
  menuItem: [
    {
      path: '/',
      label: 'Home',
    },
    {
      path: 'mailto:hello@dovetaildigital.ca',
      label: 'Contact',
    },
    {
      path: '/',
      label: 'Privacy',
    },
  ],
  appLinks: [
    {
      path: 'https://play.google.com/store/apps/details?id=ca.underscoresoftware.sleeptyme',
      label: 'Google Play Store',
      name: 'Google Play Store',
      icon: <IoLogoGooglePlaystore />,
    },
    {
      path: '/',
      label: 'Apple App Store',
      name: 'Apple App Store',
      icon: <IoLogoApple />,
    },
    {
      path: 'https://sleeptyme.ca/#/',
      label: 'PWA',
      name: 'PWA',
      icon: <IoLogoPwa />,
    },
  ],
  socials: [
    {
      path: '/',
      label: 'Apple App Store',
      name: 'Apple App Store',
      icon: <IoLogoLinkedin />,
    },
    {
      path: '/',
      label: 'Apple App Store',
      name: 'Apple App Store',
      icon: <IoLogoInstagram />,
    },
  ],
};
