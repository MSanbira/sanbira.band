import React, { useEffect, useState } from "react";
import { SongCard, SongLinksContent } from "../constants";
import { Arrow } from "./arrow";

export const SongCards = (props: SongCardsProps) => {
  const { songCards } = props;

  const [scrolled, setScrolled] = useState<number>(0);

  useEffect(() => {
    document
      .querySelector(".song-cards")
      ?.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e: any) => {
    if (e.target.scrollLeft === 0) {
      setScrolled(0);
    } else if (
      Math.abs(
        e.target.scrollLeft + e.target.offsetWidth - e.target.scrollWidth
      ) < 5
    ) {
      setScrolled(2);
    } else {
      setScrolled(1);
    }
  };

  const scrollCards = (direction: number) => {
    // @ts-ignore
    const cardWidth = document.querySelector(".song-card").offsetWidth || 500;
    document.querySelector(".song-cards")?.scrollBy({
      left: cardWidth * direction,
      behavior: "smooth",
    });
  };

  const cardsContainer = document.querySelector(".song-cards") as any;
  const isHasScroll =
    cardsContainer?.offsetWidth !== cardsContainer?.scrollWidth;

  return (
    <div className="song-cards-wrapper">
      <div className="song-cards-container">
        <div className="song-cards" data-snapped-card={scrolled}>
          {songCards.map((sc, i) => {
            const { title, songArt } = sc;

            return (
              <div className="song-card d-flex-dir-col-ali-center" key={i}>
                <img src={songArt} alt={title} />
                <h3>listen</h3>
                <h2>{title}</h2>
                <div className="listen-links d-grid-md-gap">
                  {Object.keys(SongLinksContent).map((key) => (
                    <ListenLink
                      link={sc[key as keyof SongCard]}
                      title={
                        SongLinksContent[key as keyof typeof SongLinksContent]
                          .name
                      }
                      logo={SongLinksContent[
                        key as keyof typeof SongLinksContent
                      ].logo()}
                      key={key}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        {isHasScroll && (
          <div className="nav-songs d-flex-ali-center-jc-sb hide-on-phone">
            <button
              className="flipped"
              disabled={scrolled === 0}
              onClick={() => scrollCards(-1)}
              aria-label="track list back"
            >
              <Arrow />
            </button>
            <button
              disabled={scrolled === 2}
              onClick={() => scrollCards(+1)}
              aria-label="track list forward"
            >
              <Arrow />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ListenLink = (props: {
  link?: string;
  title: string;
  logo: JSX.Element;
}) => {
  const { link, title, logo } = props;

  if (!link) {
    return <></>;
  }

  return (
    <a
      className="listen-link d-flex-ali-center-lg-gap-jc-sb"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="d-flex-ali-center-xs-gap">
        {logo}
        <h4>{title}</h4>
      </div>
      <Arrow />
    </a>
  );
};

interface SongCardsProps {
  songCards: SongCard[];
}
