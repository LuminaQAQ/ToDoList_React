import React from 'react'
import { NavLink } from 'react-router-dom';

import './index.css'

export default function SgCategoryItem(props) {
    // console.log(props);
    const { to, icon, title, nums } = props;

    function isActived(status) {
        return status.isActive ? 'sg-category-item-wrap sg-category-item-active' : 'sg-category-item-wrap'
    }

    return (
        <NavLink to={to} className={isActived}>
            <section className='icon-wrap'>
                <img src={icon} alt="icon" />
            </section>

            <section className='title-wrap'>
                {title}
            </section>

            <section className='nums-badge-wrap'>
                {nums}
            </section>
        </NavLink>
    )
}
