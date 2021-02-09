import * as React from "react";
import StoryBoard from "../component/storyboard";
import RightSideBanner from "../component/rightsidebanner";
import "../css/main.css";
import Tabbar from "../component/tabbar";


const MainPage: React.FC = ({}) => (
    <div className="main">
        <Tabbar/>
        <div className="historys">
            <StoryBoard/>
            <RightSideBanner/>
        </div>
    </div>
)


export default MainPage;