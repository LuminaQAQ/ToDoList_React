import React from 'react'

// css
import "./index.css"

// 组件
import SgCategoryItem from '../SgCategoryItem'

// 图标
import searchDarkIcon from '../../asserts/imgs/SideBar/search_dark.png'
// import searchLightIcon from '../../asserts/imgs/SideBar/search_light.png'
import importIcon from '../../asserts/imgs/SideBar/important.png'
import todayIcon from '../../asserts/imgs/SideBar/today.png'
import tasklistIcon from '../../asserts/imgs/SideBar/task-dark.png'
import createGroupIcon from '../../asserts/imgs/SideBar/create_group.png'

export default function SideBar() {
    const fixedCategories = [
        {
            key: "001",
            to: '/important',
            icon: importIcon,
            title: '重要',
            nums: 0,
        },
        {
            key: "002",
            to: '/today',
            icon: todayIcon,
            title: '我的一天',
            nums: 0,
        },
        {
            key: "003",
            to: '/tasklist',
            icon: tasklistIcon,
            title: '任务',
            nums: 0,
        },
    ]

    return (
        <section className='todolist-sidebar-wrap'>

            {/* ------ 用户信息区域 ----- */}
            {/* #region */}
            <section className='userinfo-wrap'>
                <section className='userinfo-avatar'>
                    <img src="" alt="" />头像
                </section>
                <section className='userinfo-username'>
                    username
                </section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 搜索框 ----- */}
            {/* #region */}
            <section className='search-wrap'>
                <div className="search-main">
                    <input type="text" placeholder='搜索' />
                </div>
                <section className='search-icon'>
                    <img src={searchDarkIcon} alt="" />
                </section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 固定分类 ----- */}
            {/* #region */}
            <section className='fixed-categories'>
                {
                    fixedCategories.map(item => {
                        return (
                            <SgCategoryItem {...item} />
                        )
                    })
                }
            </section>
            <hr />
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ name ----- */}
            {/* #region */}
            <section className='user-categories'>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
                <p>1</p>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ name ----- */}
            {/* #region */}
            <section className='create-new-wrap'>
                <section className='create-new-list'>
                    <section className='create-new-list-add-icon'>+</section>
                    <section className='create-new-list-add-text'>新建列表</section>
                </section>
                <section className='create-new-group'>
                    <img src={createGroupIcon} alt="" />
                </section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}
        </section>
    )
}