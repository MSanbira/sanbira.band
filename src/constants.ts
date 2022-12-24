import {
  AmazonLogo,
  AppleLogo,
  BandcampLogo,
  DeezerLogo,
  SpotifyLogo,
  YoutubeLogo,
} from "./components/listen-link-logos";

export const ContentFields = {
  Title: "title",
  MainLinks: "mainLinks",
  ShowDates: "showDates",
  ShowsImg: "showsImage",
  SongCards: "songCards",
};

export interface MainLink {
  title: string;
  link: string;
}

export interface ShowDate {
  date: string;
  location: string;
  eventLink: string;
  eventLinkDescription?: string;
}

export interface SongCard {
  title: string;
  songArt: string;
  spotifyLink?: string;
  amazonLink?: string;
  appleLink?: string;
  youtubeLink?: string;
  deezerLink?: string;
  bandcampLink?: string;
}

export const SongLinksContent = {
  spotifyLink: { name: "spotify", logo: SpotifyLogo },
  amazonLink: { name: "amazon music", logo: AmazonLogo },
  appleLink: { name: "apple music", logo: AppleLogo },
  youtubeLink: { name: "youtube", logo: YoutubeLogo },
  deezerLink: { name: "deezer", logo: DeezerLogo },
  bandcampLink: { name: "bandcamp", logo: BandcampLogo },
};
