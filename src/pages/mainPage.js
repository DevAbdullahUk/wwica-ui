import React, { Component } from 'react';

import WelcomeMain from '../components/welcomeMain';
import PrayerTime from '../components/prayerTime';

import '../styles/mainPage.css'

class MainPage extends Component {
    render() {

        return (
            <div className="main-page-container">
                <WelcomeMain></WelcomeMain>
                <PrayerTime></PrayerTime>
            </div>
        )

    }


}

export default MainPage;