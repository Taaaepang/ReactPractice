import * as React from 'react';
import CommentList from './commentlist';
import LikeButton from './likebutton';
import ShareButton from './button/sharebutton';


const LowerPost: React.FC = ({}) => (
    <div className="lowerpost">
        <LikeButton/>
        <CommentList/>
        <ShareButton/>
    </div>
)

export default LowerPost;