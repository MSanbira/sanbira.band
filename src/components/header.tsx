import React from "react";
import { MainLink } from "../constants";

export const Header = (props: HeaderProps) => {
  const { title, mainLinks } = props;

  return (
    <header className="d-flex-ali-baseline-jc-sb-sm-gap-f-wrap">
      <h1>{title}</h1>
      <div className="d-flex-ali-center">
        {mainLinks.map(({ title, link }) => (
          <a
            className="text-btn"
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {title}
          </a>
        ))}
      </div>
    </header>
  );
};

interface HeaderProps {
  title: string;
  mainLinks: MainLink[];
}
