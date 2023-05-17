import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className = { s.item }>
                <img
                    src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS66eWW291zp4-TXGl9TTaa7nvA6HexDXOYLTKFcelL0E2dCLEf7QXG2gQCLBzlOUB33X0&usqp=CAU' />
                { props.message }

                <div>
                    {props.likesCount}
                <span>{' '}likes</span>
                </div>
            </div>
        </div>
    );
};

export default Post;