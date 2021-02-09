import * as React from 'react';
import Emoticon from './emoticons';
import InputComment from './inputcomment';
import Push from './push';

const Comment:React.FC = ({}) => (
    <div className="comment">
        <Emoticon/>
        <InputComment/>
        <Push/>
    </div>
)

export default Comment;