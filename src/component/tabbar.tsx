import * as React from 'react';
import AppLogo from './AppStyle';
import SearchBar from './searchbar';
import HomeButton from './button/homebutton';
import HeartButton from './button/heartbutton';
import AdvButton from './button/advbutton';
import MessageButton from './messagebutton';
import ProfileButton from './button/profilebutton';


const Tabbar: React.FC= ({}) => (
    <div className="grid_tabbar">
        <AppLogo/>
        <SearchBar />
        <HomeButton/>
        <HeartButton/>
        <AdvButton/>
        <MessageButton/>
        <ProfileButton/>
    </div>
)

export default Tabbar;
