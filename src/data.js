import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://github.com/idoTsehori', icon: 'fab fa-github' },
  { id: 2, href: 'https://www.linkedin.com/in/ido-tsehori/', icon: 'fab fa-linkedin' },
  { id: 3, href: 'https://www.facebook.com/ido.tsehori/', icon: 'fab fa-facebook' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    txt: `Smart travel, big savings with ido roads.
Make your money go further with us.`,
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    txt: `where hiking dreams come true.
Hiking paradise with ido roads.`,
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    txt: `comfort at its best.
Indulge in comfort with ido roads.`,
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: `Breathtaking landscapes and ancient monasteries with ido roads.
Tibetan culture and spirituality with ido roads.
Hike the Himalayas and witness the world's highest peak with ido roads.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: `Ancient temples, lush forests, stunning beaches with ido roads.
Vibrant culture and natural beauty of Java with ido roads.
From Jakarta to Yogyakarta with ido roads.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: `Hidden gems of Hong Kong with ido roads.
Diverse neighborhoods, rich history, and vibrant nightlife with ido roads.
From Kowloon to Lantau Island with ido roads.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: `Wildlife adventure and the Big Five with ido roads.
Kenya's stunning landscapes and diverse culture with ido roads.
From the savannah to the coast with ido roads.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: 'august 22th, 2023',
    title: `Let's go to Tel Aviv`,
    info: `Sun, sea, and vibrant city life with ido roads.
Delicious cuisine and rich history with ido roads.
From Old Jaffa to the White City with ido roads.`,
    location: 'israel',
    duration: 7,
    cost: 5500,
  },
  {
    id: 6,
    image: tour6,
    date: 'january 1th, 2023',
    title: 'Somewhere over the rainbow',
    info: `Mystical landscapes and breathtaking scenery with ido roads.
A journey to a world beyond with ido roads.
Experience the magic with ido roads.`,
    location: 'somewhere',
    duration: 11,
    cost: 9000,
  },
]
