import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import './index.css'
import '../../asserts/style/default.css'

export default function SgPageTitle(props) {
    const [search] = useSearchParams() || {};
    const title = search.get('title') || '';
    const icon = search.get('icon') || '';

    const navigate = useNavigate();

    const [isShow, setIsShow] = useState(false);

    function handleMenuShow() {
        if (isShow) setIsShow(false);
        else setIsShow(true);

        navigate('/setting')
    }

    return (
        <header className='header-title-wrap'>

            {/* ------ 页面标题区域 ----- */}
            {/* #region */}
            <section className='page-header-category'>
                <section className={`title-wrap ${icon}-icon`}></section>
                <section>{title}</section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 功能区域 ----- */}
            {/* #region */}
            <section
                className='page-header-menu'
                onClick={handleMenuShow}
            >
            </section>
            {/* #endregion */}
            {/* --------End------ */}

        </header >
    )
}
