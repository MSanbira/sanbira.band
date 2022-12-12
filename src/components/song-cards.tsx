import React from "react";
import { SongCard, SongLinksNames } from "../constants";
import { Arrow } from "./arrow";

export const SongCards = (props: SongCardsProps) => {
    const {
        songCards
    } = props;

    return (
        <div className="song-cards-wrapper">
            <div className="song-cards">
                {songCards.map((sc) => {
                    const { title, songArt } = sc;

                    return (
                        <div className="song-card d-flex-dir-col-ali-center" key={title}>
                            <img src={songArt} alt={title} />
                            <h3>listen</h3>
                            <h2>{title}</h2>
                            <div className="listen-links d-grid-lg-gap">
                                {Object.keys(SongLinksNames).map((key) => (
                                    <ListenLink
                                        link={sc[key as keyof SongCard]}
                                        title={SongLinksNames[key as keyof typeof SongLinksNames]}
                                        key={key}
                                    />
                                ))}
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="nav-songs d-flex-ali-center-jc-sb hide-on-phone">
                <button className="flipped">
                    <Arrow />
                </button>
                <button>
                    <Arrow />
                </button>
            </div>
        </div>
    )
}

const ListenLink = (props: { link?: string; title: string; }) => {
    const { link, title } = props;

    if (!link) {
        return <></>;
    }

    return (
        <a
            className="listen-link d-flex-ali-center-lg-gap-jc-sb"
            href={link}
            target='_blank'
            rel="noreferrer"
        >
            <h4>{title}</h4>
            <Arrow/>
        </a>
    )
}

interface SongCardsProps {
    songCards: SongCard[];
}
