export interface Sweet {
  id: string;
  name: string;
  hindi: string;
  tagline: string;
  description: string;
  image: string;
  accent: string;
}

export const signatureSweets: Sweet[] = [
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    hindi: "काजू कतली",
    tagline: "The Crown Jewel",
    description:
      "Paper-thin diamond slices of hand-ground premium cashews, kissed with pure silver vark. Melts on the tongue — a royal tradition from our kitchen to your celebrations.",
    image: "https://images.unsplash.com/photo-1666190064817-8e4373890498?w=800&q=80",
    accent: "#C8A23D",
  },
  {
    id: "motichoor-ladoo",
    name: "Motichoor Ladoo",
    hindi: "मोतीचूर लड्डू",
    tagline: "Pearls of Celebration",
    description:
      "Tiny golden pearls of finest gram flour, perfumed with cardamom and rose water, bound by pure desi ghee. The sweet that begins every auspicious moment.",
    image: "https://images.unsplash.com/photo-1615832494873-b0c52d519696?w=800&q=80",
    accent: "#D4781C",
  },
  {
    id: "peda",
    name: "Mathura Peda",
    hindi: "मथुरा पेड़ा",
    tagline: "Braj ki Meethas",
    description:
      "Born from the sacred land of Braj — our signature peda is made from slowly reduced A2 milk, flavoured with saffron and green cardamom. A taste of devotion itself.",
    image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?w=800&q=80",
    accent: "#8B6914",
  },
  {
    id: "ghewar",
    name: "Rajasthani Ghewar",
    hindi: "घेवर",
    tagline: "Royal Heritage",
    description:
      "A disc-shaped masterpiece — crisp honeycomb lattice soaked in saffron syrup, crowned with rabri and silver leaf. Festive royalty on a plate.",
    image: "https://images.unsplash.com/photo-1690401767645-595de0e26444?w=800&q=80",
    accent: "#7A1B2D",
  },
  {
    id: "dry-fruit-box",
    name: "Dry Fruit Royale",
    hindi: "ड्राई फ्रूट मिठाई",
    tagline: "Nature's Finest",
    description:
      "An opulent collection — pistachios, almonds, cashews and figs enrobed in saffron-infused khoya, finished with edible gold. The ultimate luxury sweet gift.",
    image: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=800&q=80",
    accent: "#2D5016",
  },
];

export interface FestiveCollection {
  id: string;
  name: string;
  hindi: string;
  subtitle: string;
  description: string;
  image: string;
  icon: string;
}

export const festiveCollections: FestiveCollection[] = [
  {
    id: "diwali",
    name: "Diwali",
    hindi: "दीपावली",
    subtitle: "Festival of Lights",
    description:
      "Illuminate celebrations with our exclusive Diwali hampers — handcrafted sweets in luxurious festive packaging with diyas and dry fruits.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&q=80",
    icon: "🪔",
  },
  {
    id: "weddings",
    name: "Weddings",
    hindi: "विवाह",
    subtitle: "Sacred Celebrations",
    description:
      "Bespoke wedding sweet trays and shagun boxes designed for the most cherished moments — from roka to reception.",
    image: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&q=80",
    icon: "💍",
  },
  {
    id: "janmashtami",
    name: "Janmashtami",
    hindi: "जन्माष्टमी",
    subtitle: "Krishna's Birthday",
    description:
      "Special offerings from the land of Govardhan — Makhan Mishri, Peda, and Panchamrit sweets for the divine celebration.",
    image: "https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&q=80",
    icon: "🦚",
  },
  {
    id: "corporate",
    name: "Corporate",
    hindi: "कॉर्पोरेट",
    subtitle: "Business Excellence",
    description:
      "Premium corporate gift boxes with custom branding — make lasting impressions with the taste of tradition.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&q=80",
    icon: "🎁",
  },
];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "Delhi",
    content:
      "The Mathura Peda from Sri Girraj is unlike anything I've tasted anywhere else. You can feel the purity of ingredients. We order for every family function now.",
  },
  {
    id: "2",
    name: "Rajesh Agarwal",
    location: "Mumbai",
    content:
      "We've been sending their Diwali gift boxes to our clients for three years. The quality and packaging is consistently outstanding. It reflects our brand values.",
  },
  {
    id: "3",
    name: "Meera Joshi",
    location: "Jaipur",
    content:
      "Their Kaju Katli melts like butter — so thin and pure. My mother-in-law said it reminded her of the sweets from her childhood. That's the highest compliment!",
  },
  {
    id: "4",
    name: "Vikram Mehta",
    location: "Bangalore",
    content:
      "Ordered their wedding collection for my daughter's shaadi. Every guest asked where we got the sweets from. The presentation was fit for royalty.",
  },
];
