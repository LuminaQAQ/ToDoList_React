// 数据存储方法
import {
    getItem,
    setItem,
} from "../utils/localStroge"

// 配置项
import {
    regular,
    theme,
    fixed,
    fixedToDoGroup,
    fixedToDoList,
    userToDoGroup,
} from "../configs/config"

// ------- "常规设置"处理 -------
// #region
export function fetchRegularSetting() {
    return getItem('regular');
}

export function setRegularSetting(val) {
    return setItem('regular', val);
}
// #endregion
// ------- end -------

// ------- "主题设置"处理 -------
// #region
export function fetchThemeSetting() {
    return getItem('theme');
}

export function setThemeSetting(val) {
    return setItem('theme', val);
}
// #endregion
// ------- end -------

// ------- "智能列表设置"处理 -------
// #region
export function fetchfixedToDoGroupSetting() {
    return getItem('fixed');
}

export function setfixedToDoGroupSetting(val) {
    return setItem('fixed', val);
}
// #endregion
// ------- end -------

// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>


// ------- "侧边栏"数据处理 -------
// #region
export function fetchFixedToDoGroup(key) {
    return getItem(key);
}

export function setFixedToDoGroup(key, val) {
    return setItem(key, val);
}

// export function searchToDoList(key) {
//     console.log(key);
// }
// #endregion
// ------- end -------


// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>


// ------- "我的一天"数据处理 -------
// #region

// 获取"我的一天"数据
export const fetchTodayData = (key) => {
    return getItem(key);
}

// 更新"我的一天"数据
export const setTodayData = (key, val) => {
    return setItem(key, val);
}

// #endregion
// ------- end -------

// ------- "重要"数据处理 -------
// #region

// 获取"我的一天"数据
export const fetchImportantData = (key) => {
    return getItem(key);
}

// 更新"我的一天"数据
export const setImportantData = (key, val) => {
    return setItem(key, val);
}

// #endregion
// ------- end -------

// ------- "全部"数据处理 -------
// #region

// 获取"全部"数据
export const fetchAllTaskListData = (key) => {
    return getItem(key);
}

// 更新"全部"数据
export const setAllTaskListData = (key, val) => {
    return setItem(key, val);
}
// #endregion
// ------- end -------

// ------- "已完成"数据处理 -------
// #region

// 获取"已完成"数据
export const fetchFinishedListData = (key) => {
    return getItem(key);
}

// 更新"已完成"数据
export const setFinishedListData = (key, val) => {
    return setItem(key, val);
}
// #endregion
// ------- end -------

// ------- "任务"数据处理 -------
// #region

// 获取"任务"数据
export const fetchTaskListData = (key) => {
    return getItem(key);
}

// 更新"任务"数据
export const setTaskListData = (key, val) => {
    return setItem(key, val);
}
// #endregion
// ------- end -------


// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>


// ------- 初始化本地储存 -------
// #region
export const initLocalData = () => {
    if (getItem('isInit')) return false;

    // 常规设置
    setItem('regular', regular);

    // 主题设置
    setItem('theme', theme);

    // 智能列表
    setItem('fixed', fixed);

    // 默认显示的ToDo分组
    setItem('fixedToDoGroup', fixedToDoGroup);

    // 默认ToDo分组的数据
    Object.entries(fixedToDoList).forEach(item => {
        setItem(item[0] + 'ListData', item[1]);
    })

    // 用户自定义的ToDo分组
    setItem('userToDoGroup', userToDoGroup);

    // 是否执行过这个初始化函数
    setItem('isInit', true)
}
// #endregion
// ------- end -------