import React from 'react'
import { NavLink } from 'react-router-dom';

import "../../asserts/style/icon.css"

export default function SgUserCategoryItem(props) {
    const { to, icon, title, nums } = props;

    function isActived(status) {
        return status.isActive ? 'sg-category-item-wrap sg-category-item-active' : 'sg-category-item-wrap'
    }

    return (
        <NavLink to={`${to}?title=${title}&icon=${icon}`} className={isActived}>
            <section className={`icon-wrap userlist-icon`}></section>

            <section className='title-wrap'>
                {title}
            </section>

            <section
                className='nums-badge-wrap'
                style={nums === 0 || !nums ? { display: 'none' } : { display: 'flex' }}
            >
                {nums}
            </section>
        </NavLink>
    )
}
