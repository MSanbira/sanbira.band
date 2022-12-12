import React from "react";
import { ShowDate } from "../constants";
import dayjs from 'dayjs';

export const ShowDates = (props: ShowDatesProps) => {
    const {
        showDates,
        showsImage
    } = props;

    if (!showDates.length) {
        return <div/>
    }

    return (
        <div className="show-dates-wrapper">
            <div className="show-dates d-flex-ali-center-dir-col">
                <div className="shows-img hide-on-phone">
                    <img src={showsImage} alt='show dates'/>
                </div>
                <h3 className="hide-on-phone">in person</h3>
                <h2 className="hide-on-phone">show dates</h2>

                <div className="show-dates-container d-grid-lg-gap">
                    {showDates.map(({ date, location, eventLink, eventLinkDescription }) => (
                        <div className="show-date d-flex-jc-sb-lg-gap" key={date}>
                            <div className="d-flex-sm-gap">
                                <h4 className="light">{dayjs(date).format('DD.MM.YY')}</h4>
                                <h4>{location}</h4>
                            </div>
                            <a className="text-btn" href={eventLink} target='_blank' rel="noreferrer">
                                {eventLinkDescription}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

interface ShowDatesProps {
    showDates: ShowDate[];
    showsImage: string;
}

