import React, { Component } from 'react';

import WelcomeMain from '../components/welcomeMain';
import PrayerTime from '../components/prayerTime';
import DailyHadith from '../components/dailyHadith';
import NewsFeed from '../components/newsFeed';
import SupportWWICA from '../components/supportWWICA';
import ConnectWWICA from '../components/contactWWICA';

import '../styles/mainPage.css'

class MainPage extends Component {
    render() {

        return (
            <div className="main-page-container">
                <WelcomeMain></WelcomeMain>
                <PrayerTime></PrayerTime>
                <DailyHadith></DailyHadith>
                <NewsFeed></NewsFeed>
                <SupportWWICA></SupportWWICA>
                <ConnectWWICA></ConnectWWICA>
            </div>
        )

    }


}

export default MainPage;