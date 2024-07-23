import { FacebookIcon } from '../components/icons/facebook';
import { TwitterIcon } from '../components/icons/twitter';
import { YoutubeIcon } from '../components/icons/youtube';

export const header_links = [
  { id: 1, href: 'collections' },
  { id: 2, href: 'men' },
  { id: 3, href: 'women' },
  { id: 4, href: 'kids' },
  { id: 5, href: 'about' },
  { id: 6, href: 'contact' },
];

export const footer_links = {
  products: [
    { id: 1, href: 'shop collections' },
    { id: 2, href: 'new arrivals' },
    { id: 3, href: 'our outlets' },
  ],
  category: [
    { id: 1, href: 'men' },
    { id: 2, href: 'women' },
    { id: 3, href: 'kids' },
  ],
  company: [
    { id: 1, href: 'about us' },
    { id: 2, href: 'contact us' },
    { id: 3, href: 'our locations' },
  ],
  social: [
    { id: 1, icon: <YoutubeIcon />, name: 'youtube' },
    { id: 2, icon: <FacebookIcon />, name: 'facebook' },
    { id: 3, icon: <TwitterIcon />, name: 'twitter' },
  ],
};
