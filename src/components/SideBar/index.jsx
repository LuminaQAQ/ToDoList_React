import React, { useState } from 'react'
import { nanoid } from 'nanoid';

import { subscribe } from 'pubsub-js'

// css
import "./index.css"

// 组件
import SgCategoryItem from '../SgCategoryItem'
import SgUserCategoryItem from '../SgUserCategoryItem'

// 图标
import searchDarkIcon from '../../asserts/imgs/SideBar/search_dark.png'
import createGroupIcon from '../../asserts/imgs/SideBar/create_group.png'
import defaultUserAvatar from "../../asserts/imgs/MainBody/default_avatar.png";

// 配置项
import { fetchSidebarData } from '../../utils/handleData'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function SideBar() {
    const store = fetchSidebarData();
    const [fixedCategories, setFixedCategories] = useState(store);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [search, setSearch] = useSearchParams();
    const [searchInputText, setSearchInputText] = useState('');

    try {
        const arr = [search, searchInputText];
        arr.filter()
    } catch (error) { }

    subscribe('sidebar-reflash', function (pubkey, data) {
        setFixedCategories(data);
    })

    function searchTodo(e) {
        setSearchInputText(e.target.value);

        if (e.target.value === "" && pathname === "/search")
            return navigate(`/`);

        if (e.keyCode === 8 && e.target.value === "" && pathname !== "/search")
            return false;

        if (e.target.value !== "" && pathname !== "/search")
            return navigate(`/search?keywords=${e.target.value}`);

        if (pathname === "/search") setSearch(`keywords=${e.target.value}`);
    }

    return (
        <section className='todolist-sidebar-wrap'>

            {/* ------ 用户信息区域 ----- */}
            {/* #region */}
            <section className='userinfo-wrap'>
                <section className='userinfo-avatar'>
                    <img src={defaultUserAvatar} alt="" />
                </section>

                <section className='userinfo-username'>
                    To Do 清单
                </section>
            </section>
            {/* #endregion */}
            {/* --------End------ */}

            {/* ------ 搜索框 ----- */}
            {/* #region */}
            <section className='search-wrap'>
                <div className="search-main">
                    <input
                        type="text"
                        placeholder='搜索'
                        onKeyUp={searchTodo}
                    />
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
                    fixedCategories.map((item) => {
                        return (
                            <section
                                key={nanoid()}
                                style={item.checked === true || item.checked === undefined ? { display: 'block' } : { display: 'none' }}
                            >
                                <SgCategoryItem {...item} />
                            </section>
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
