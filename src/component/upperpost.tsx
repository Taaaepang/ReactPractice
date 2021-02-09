import * as React from 'react';
import PostOption from './postoption';
import UserIcon from './usericon';
import UserName from './username';


const UpperPost:React.FC = ({}) => (
    <div className="upperpost">
        <UserIcon/>
        <UserName/>
        <PostOption/>
    </div>
)

export default UpperPost;