import { BsSpotify, BsInstagram } from "react-icons/bs";
import { FaBandcamp, FaAmazon } from "react-icons/fa6";
import { BiMailSend } from "react-icons/bi";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";

export const linkItems = [
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/6oqyOpXcGL9xf4TAfczl0A?si=qaZEuZDgQMWfqemqLod3Qg",
    icon: <BsSpotify />,
  },
  {
    title: "Apple Music",
    url: "https://music.apple.com/us/artist/headstone/1704950130",
    icon: <SiApplemusic />,
  },
  {
    title: "Youtube Music",
    url: "https://music.youtube.com/channel/UC6jhIXJdhStYmSSaUfYMNFg?si=h-Vp0_64dx-ECB7l",
    icon: <SiYoutubemusic />,
  },
  {
    title: "Amazon Music",
    url: "https://music.amazon.com/albums/B0CGX1HHS1?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_8uwILMEPnfZOrxvN5B7jqy4F7",
    icon: <FaAmazon />,
  },
  {
    title: "Bandcamp",
    url: "https://headstone317.bandcamp.com/",
    icon: <FaBandcamp />,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/headstone317hc/",
    icon: <BsInstagram />,
  },
  {
    title: "Booking",
    url: "mailto:headstone317@gmail.com",
    icon: <BiMailSend />,
  },
];
