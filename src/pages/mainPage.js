import React, { Component } from 'react';

import WelcomeMain from '../components/welcomeMain';
import PrayerTime from '../components/prayerTime';
import DailyHadith from '../components/dailyHadith';
import NewsFeed from '../components/newsFeed';

import '../styles/mainPage.css'

class MainPage extends Component {
    render() {

        return (
            <div className="main-page-container">
                <WelcomeMain></WelcomeMain>
                <PrayerTime></PrayerTime>
                <DailyHadith></DailyHadith>
                <NewsFeed></NewsFeed>
            </div>
        )

    }


}

export default MainPage;