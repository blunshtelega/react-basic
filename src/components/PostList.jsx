import React from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import PostItem from './PostItem';

const PostList = ({arrayPropFromApp, titlePropFromApp, removeFuncCallback}) => {

    if(!arrayPropFromApp.length){
        return (
            <h1 style={{textAlign: 'center'}}>
                Постов нет
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {titlePropFromApp}
            </h1>
            <TransitionGroup>
                {arrayPropFromApp.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem removeFuncCallback={removeFuncCallback} postId={index +1} propFromList={post}/>  
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;