import React from 'react';
import Badge from 'react-bootstrap/Badge'

import { dailyHadithText } from '../assets/texts'

import '../styles/dailyHadith.css'

class DailyHadith extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hadithInfo: this.getRandomText()
        }

        this.hadithDisplay = this.hadithDisplay.bind(this);
        this.hadithImageDisplay = this.hadithImageDisplay.bind(this);
        this.getRandomText = this.getRandomText.bind(this);
    }

    /**
     * pick any Hadith from dailyHadithText randomly. 
     * 
     * @returns Hadith
     */
    getRandomText() {
        const randomIndex = Math.floor(Math.random() * dailyHadithText.length);

        return dailyHadithText[randomIndex];
    }

    /**
     * display the image next to the Hadith only for big screen sixes. This also loads a badged 
     * with information about the image
     *
     * @returns image with the badged information
     */
    hadithImageDisplay() {
        const { hadithInfo } = this.state;
        return (
            <div className="image-box">
                <img src={`${hadithInfo.img_url} `} className="img-hadith" alt="Daily hadith" resizeMode="contain" />
                <Badge className="img-info-hadith" bg="success">{hadithInfo.img_info}</Badge>
            </div>
        )
    }

    /**
     * display the Hadith in the flax box. The Hadith will be displayed in all screen sizes with the
     * double quotation marks and the source
     * 
     * 
     * @returns Hadith as text
     */
    hadithDisplay() {
        const { hadithInfo } = this.state;

        return (
            <div class="card-text card-hadith-text">
                <div>
                    <h1>"</h1>
                    {hadithInfo.hadith}
                    <p>
                        {hadithInfo.hadith_body}
                    </p>
                    <h1>"</h1>
                    <br></br>
                    <span> {hadithInfo.source} </span>
                </div>
            </div>
        )
    }


    render() {
        return (
            <div className="box-hadith">

                <h5 className="layout-title">
                    Daily Hadith
                </h5>

                <div class="card card-hadith">
                    <this.hadithImageDisplay>
                    </this.hadithImageDisplay>
                    <div class="card-body">

                        <this.hadithDisplay>
                        </this.hadithDisplay>

                    </div>
                </div>
            </div>
        )

    }
}

export default DailyHadith;