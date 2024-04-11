import React from 'react'

// css
import "./index.css"

// 组件
import SgCategoryItem from '../SgCategoryItem'

// 图标
import searchDarkIcon from '../../asserts/imgs/SideBar/search_dark.png'
// import searchLightIcon from '../../asserts/imgs/SideBar/search_light.png'
import createGroupIcon from '../../asserts/imgs/SideBar/create_group.png'
import SgUserCategoryItem from '../SgUserCategoryItem'

export default function SideBar() {
    const fixedCategories = [
        {
            key: "001",
            to: '/today?title=我的一天&icon=today',
            icon: 'today',
            title: '我的一天',
            nums: 1,
        },
        {
            key: "002",
            to: '/important?title=重要&icon=important',
            icon: 'important',
            title: '重要',
            nums: 0,
        },
        {
            key: "003",
            to: '/all?title=全部&icon=all',
            icon: 'all',
            title: '全部',
            nums: 0,
        },
        {
            key: "004",
            to: '/finished?title=重要&icon=finished',
            icon: 'finished',
            title: '已完成',
            nums: 0,
        },
        {
            key: "005",
            to: '/tasklist?title=任务&icon=tasklist',
            icon: 'tasklist',
            title: '任务',
            nums: 0,
        },
    ];


    return (
        <section className='todolist-sidebar-wrap'>

            {/* ------ 用户信息区域 ----- */}
            {/* #region */}
            <section className='userinfo-wrap'>
                <section className='userinfo-avatar today-icon'></section>

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

            {/* ------ 用户自定义分类 ----- */}
            {/* #region */}
            <section className='user-categories'>
                <SgUserCategoryItem to={'/userTask'} title="无标题列表" icon="userlist" />
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 新建功能区 ----- */}
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
