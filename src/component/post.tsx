import * as React from 'react';
import MiddlePost from './middlepost';
import UpperPost from './upperpost';
import LowerPost from './lowerpost';
import Comment from './comment';

const Post: React.FC = ({}) => (
    <div className='post'>
        <UpperPost/>
        <MiddlePost/>
        <LowerPost/>
        <Comment/>
    </div>
)
export default Post;
