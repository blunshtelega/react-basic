import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostSevice from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostSevice.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostSevice.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])

    return (
        <div>
            <h1>Вы открыли страницу новости c ID = {params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}.{post.title}</div>
            }
            <h1>
                Комментарии:

            </h1>
            {isComLoading
                ? <Loader/>
                : <div>{comments.map((comment) => 
                    <div key={Math.random()} style={{marginTop: 15}}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>    
                )}</div>
            }
        </div>
    );
};

export default PostPage;