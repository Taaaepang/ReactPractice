import * as React from "react";
import CheckedStoryItem from "./checkedstoryitem";
import NewStoryItem from "./newstoryitem";

const Story: React.FC = ({}) => (
    <div className="upperstory">
        <NewStoryItem/>
        <CheckedStoryItem/>       
    </div>
)

export default Story