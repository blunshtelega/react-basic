import React from 'react';
import CommonButton from './UI/Button/CommonButton';
import { useNavigate } from 'react-router-dom';

const PostItem = (itemProps) => {
    const navigate = useNavigate();
    const postLinkNavigate = () => {
        navigate('/posts/' + itemProps.propFromList.id);
    }

    return (
        <div className="post">
            <div className="post__content">
                <strong>{itemProps.propFromList.id}. {itemProps.propFromList.title}</strong>
                <div>
                    {itemProps.propFromList.body}
                </div>
            </div>

            <div className="post__buttons">
                <CommonButton onClick={() => postLinkNavigate()}>
                    Открыть
                </CommonButton>
                <CommonButton onClick={() => itemProps.removeFuncCallback(itemProps.propFromList)}>
                    Удалить
                </CommonButton>
            </div>
        </div>
    );
};

export default PostItem;