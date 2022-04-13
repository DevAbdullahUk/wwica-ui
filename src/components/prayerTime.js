import React, { Component } from 'react';

import moon from '../assets/moon-symbol.png'
import sun from '../assets/sun-symbol.png'
import sunrise from '../assets/sunrise-symbol.png'
import sunset from '../assets/sunset-symbol.png'

import '../styles/prayerTime.css';

class PrayerTime extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            prayerTimeTable: [
                {
                    icon: moon,
                    name: "Fajr",
                    prayerTime: null,
                    athan: null
                },
                {
                    icon: sunrise,
                    name: "Sunrise",
                    prayerTime: null,
                    athan: 'n/a'
                },
                {
                    icon: sun,
                    name: "Dhuhr",
                    prayerTime: null,
                    athan: null
                },
                {
                    icon: sun,
                    name: "Asr",
                    prayerTime: null,
                    athan: null
                },
                {
                    icon: sunset,
                    name: "Maghrib",
                    prayerTime: null,
                    athan: null
                },
                {
                    icon: moon,
                    name: "Isha",
                    prayerTime: null,
                    athan: null
                }
            ]
        }

        this.prayerCard = this.prayerCard.bind(this);
        this.getPrayerTime = this.getPrayerTime.bind(this);
        this.timeFormatter = this.timeFormatter.bind(this);
        this.prayerTimeTableFormatter = this.prayerTimeTableFormatter.bind(this);
    }

    componentDidMount() {
        this.getPrayerTime();
    }

    /**
     * This function will get the prayer time from Masjidbox
     */
    async getPrayerTime() {
        const prayerTime = new Date().toISOString().split('T')[0] + "T00:00:00.000" + "%2B01:00"
        const url = "https://api.masjidbox.com/1.0/masjidbox/landing/athany?get=wg&days=1&begin="
        const headers = {
            "accept": "application/json, text/plain, */*",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
            "apikey": "JejYcMS7hsOsZTPDk2ZhKOAlW9IyQ6Px",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "x-from": "http://www.wwica.co.uk",
            "x-key": "qnB0Gunlk-Nke0Ib3eb5Q",
            "Referer": "https://masjidbox.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }


        await fetch(url + prayerTime, {
            "headers": headers,
            "body": null,
            "method": "GET"
        }).then(response => response.json())
            .then(data => this.setState({ prayerTimeTable: this.prayerTimeTableFormatter(data.timetable[0]) }))
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    /**
     * Display the prayer time in boxes. This function will display the icon (for large screen), the
     * name of the prayer, the time (if not avalible it will load a spinner), and the athan time in a box
     * 
     * @param {*} prayer should have prayer name, icon and time
     * @returns the prayer time in boxes
     */
    prayerCard(prayer) {
        const prayerInfo = prayer.prayerInfo;

        return (
            <div class="shadow-none p-3 mb-5 bg-light rounded prayer-card">

                <div className="prayer-icon">
                    <img src={prayerInfo.icon}></img>
                </div>

                <div className="prayer-name">{prayerInfo.name}</div>

                <div className="prayer-time">
                    {
                        prayerInfo.prayerTime ? 
                            (prayerInfo.prayerTime)
                          :
                            (<div
                                class="spinner-border text-success spinner-border-sm"
                                role="status">
                            </div>)
                        
                    }

                </div>

                <div className="prayer-athan-lable">
                    ATHAN
                    {
                        prayerInfo.athan ? 
                        (<span> {prayerInfo.athan}</span>)
                            : (<span> ... </span>)
                    }
                </div>
            </div>
        );
    }


    /**
     * This function will format the date and time to hh:mm AM/PM
     * 
     * @param {*} time the time in iso format
     * @returns the formatted time in hh:mm AM/PM
     */
    timeFormatter = (time) => {
        const options = {
            hour: "2-digit", minute: "2-digit"
        };

        return new Date(time).toLocaleTimeString('en-US', options);
    }


    prayerTimeTableFormatter = (prayerTimeTable) => {
        return [
            {
                icon: moon,
                name: "Fajr",
                prayerTime: this.timeFormatter(prayerTimeTable.fajr),
                athan: this.timeFormatter(prayerTimeTable.iqamah.fajr)
            },
            {
                icon: sunrise,
                name: "Sunrise",
                prayerTime: this.timeFormatter(prayerTimeTable.sunrise),
                athan: "00:00 --"
            },
            {
                icon: sun,
                name: "Dhuhr",
                prayerTime: this.timeFormatter(prayerTimeTable.dhuhr),
                athan: this.timeFormatter(prayerTimeTable.iqamah.dhuhr)
            },
            {
                icon: sun,
                name: "Asr",
                prayerTime: this.timeFormatter(prayerTimeTable.asr),
                athan: this.timeFormatter(prayerTimeTable.iqamah.asr)
            },
            {
                icon: sunset,
                name: "Maghrib",
                prayerTime: this.timeFormatter(prayerTimeTable.maghrib),
                athan: this.timeFormatter(prayerTimeTable.iqamah.maghrib)
            },
            {
                icon: moon,
                name: "Isha",
                prayerTime: this.timeFormatter(prayerTimeTable.isha),
                athan: this.timeFormatter(prayerTimeTable.iqamah.isha)
            }
        ]
    }



    render() {
        const { prayerTimeTable } = this.state

        return (
            <div className="prayer-cards-group">
                {
                    prayerTimeTable.map((info, i) =>
                        <this.prayerCard
                            prayerInfo={info}
                        >

                        </this.prayerCard>
                    )}
            </div>
        )
    }
}

export default PrayerTime;