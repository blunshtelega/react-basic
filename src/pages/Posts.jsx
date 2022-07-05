import React, { useEffect, useRef, useState } from 'react';
import '../styles/App.css'
import PostSevice from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import CommonButton from '../components/UI/Button/CommonButton';
import Loader from '../components/UI/Loader/Loader';
import CommonModal from '../components/UI/Modal/CommonModal';
import Pagination from '../components/UI/Pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePost';
import { getPageCount } from '../utils/pages';
import {useObserver} from "../hooks/useObserver";
import CommonSelect from '../components/UI/Select/CommonSelect';


function Posts() {
    const [postsArray, setPostsArray] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(postsArray, filter.sort, filter.query);
    const lastElement = useRef()


    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostSevice.getAll(limit, page);
        setPostsArray([...postsArray, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver (lastElement, page < totalPages, isPostLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    const createPost = (newPost) => {
        setPostsArray([...postsArray, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPostsArray(postsArray.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

  return (
    <div className='App'>
        <CommonButton style={{margin: '30px 0'}} onClick={() => setModal(true)}>
            Добавить пост
        </CommonButton>
        <CommonModal visible={modal} setVisible={setModal}>
            <PostForm createPostCallbackToParent={createPost}/>
        </CommonModal>
        <PostFilter 
            filter={filter} 
            setFilter={setFilter}
        />
        <CommonSelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue="Кол-во элементов на странице"
            options={[
                {value: 5, name: '5'},
                {value: 10, name: '10'},
                {value: 25, name: '25'},
                {value: -1, name: 'Показать все'},
            ]}
        />
        {postError &&
            <h1>Произошла ошибка ${postError}</h1>
        }
        <PostList removeFuncCallback={removePost} arrayPropFromApp={sortedAndSearchedPosts} titlePropFromApp={'Список постов'}/>
        <div ref={lastElement} style={{height: 20, background: 'red'}}/>
        {isPostLoading &&
            <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
        }
        <Pagination 
            page={page} 
            changePage={changePage} 
            totalPages={totalPages}
        />
    </div>
  )
}

export default Posts;