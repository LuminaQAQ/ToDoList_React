import React from 'react'
import { NavLink } from 'react-router-dom';

import './index.css'


export default function SgCategoryItem(props) {

    const { to, icon, title, nums } = props;

    function isActived(status) {
        return status.isActive ? 'sg-category-item-wrap sg-category-item-active' : 'sg-category-item-wrap'
    }

    return (
        <NavLink to={to} className={isActived}>
            {/* ------ 图标 ----- */}
            {/* #region */}
            <section className={`icon-wrap ${icon}-icon`}></section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ todo组的名字 ----- */}
            {/* #region */}
            <section className='title-wrap'>
                {title}
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 数字标记, 数据为零就不显示 ----- */}
            {/* #region */}
            <section
                className='nums-badge-wrap'

                style={nums === 0 || !nums ? { display: 'none' } : { display: 'flex' }}
            >
                {nums}
            </section>
            {/* #endregion */}
            {/* --------End------ */}
        </NavLink>
    )
}
