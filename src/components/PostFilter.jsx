import React from 'react';
import CommonInput from './UI/Input/CommonInput';
import CommonSelect from './UI/Select/CommonSelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <CommonInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Поиск"
            />
            <CommonSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={'Сортировка'}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    );
};

export default PostFilter;