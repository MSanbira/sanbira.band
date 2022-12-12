export const ContentFields = {
    Title: 'title',
    MainLinks: 'mainLinks',
    ShowDates: 'showDates',
    ShowsImg: 'showsImage',
    SongCards: 'songCards'
}

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

export const SongLinksNames = {
    spotifyLink: 'spotify',
    amazonLink: 'amazon music',
    appleLink: 'apple music',
    youtubeLink: 'youtube',
    deezerLink: 'deezer',
    bandcampLink: 'bandcamp',
}