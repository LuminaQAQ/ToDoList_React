import { nanoid } from 'nanoid';
import React, { Fragment, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import EmptyStatus from '../../components/EmptyStatus';
import SgTodoItem from '../../components/SgTodoItem';
import { fetchData } from '../../utils/handleData';

export default function SearchView() {
    const todoData = fetchData();

    // eslint-disable-next-line
    const [search, setSearch] = useSearchParams();

    const navigate = useNavigate();

    const keywords = search.get('keywords');


    useEffect(() => {
        const searchInput = document.querySelector('.search-wrap .search-main input');

        if (searchInput.value === "") return navigate(`/`);
        // eslint-disable-next-line
    }, [])

    const newData = todoData.filter(item => {
        return item.content.indexOf(keywords) !== -1;
    })

    if (newData.length === 0) {
        return (
            <EmptyStatus />
        )
    }

    return (
        <Fragment>
            {
                newData.map(item => {
                    if (item.content.indexOf(keywords) !== -1) {
                        return (
                            <SgTodoItem key={nanoid()} {...item} />
                        )
                    }
                    return false;
                })
            }
        </Fragment>
    )
}