import React, { useState } from 'react';
import CommonInput from './UI/Input/CommonInput';
import CommonButton from './UI/Button/CommonButton';

const PostForm = ({createPostCallbackToParent}) => {
    const [post, setPost] = useState({
        title: '',
        body: ''
    })

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        }
        createPostCallbackToParent(newPost);
        setPost({
            title: '',
            body: ''
        })
    }

    return (
        <div>
            <form>
                <CommonInput 
                    type = "text" 
                    placeholder = 'Название поста' 
                    value = {post.title}
                    onChange = {e => setPost({...post, title: e.target.value})}
                />
                <CommonInput 
                    type = "text" 
                    placeholder = 'Название поста' 
                    value = {post.body}
                    onChange = {e => setPost({...post, body: e.target.value})}
                />
                <CommonButton onClick={addNewPost}>Текст кнопки</CommonButton>
            </form>
        </div>
    );
};

export default PostForm;