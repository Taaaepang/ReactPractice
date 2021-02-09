import * as React from "react";
import Story from "./story";
import Post from "./post";

const StoryBoard: React.FC = ({}) => (
    <div className="storyboard">
        <Story/>
        <Post/>
    </div>
)

export default StoryBoard;