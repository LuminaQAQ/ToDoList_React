// 数据存储方法
import {
    getItem,
    setItem,
} from "../utils/localStroge"

// pubsub
import { publish } from "pubsub-js"

// 配置项
import {
    regular,
    theme,
    fixedToDoGroup,
    toDoList,
    backgroundImg,
    userToDoGroup,
} from "../configs/config"

// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>

// ------- "常规设置"处理 -------
// #region
export function fetchRegularSetting() {
    return getItem('regular');
}

// 在顶部添加新任务
export function fetchAddTaskOnTop() {
    return getItem('regular').filter(item => {
        return item.title === "在顶部添加新任务";
    })[0];
}

// 将带有星标的任务移至顶部
export function fetchStarTaskMoveOnTop() {
    return getItem('regular').filter(item => {
        return item.title === "将带有星标的任务移至顶部";
    })[0];
}

export function fetchConfirmBeforeDelete() {
    return getItem('regular').filter(item => {
        return item.title === "在删除前确认";
    })[0];
}

// 在删除前确认
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
    const theme = val.filter(item => {
        return item.checked === true
    })[0];

    // 主题切换
    setTimeout(() => {
        const container = document.querySelector('.todolist-main-container');

        if (theme.id === "light") container.className = "todolist-main-container light";
        else container.className = "todolist-main-container";
    }, 10);

    return setItem('theme', val);
}
// #endregion
// ------- end -------

// ------- "智能列表设置"处理 -------
// #region
export function fetchfixedToDoGroupSetting() {
    const group = getItem('fixedToDoGroup');

    return group;
}

export function setfixedToDoGroupSetting(val) {
    setItem('fixedToDoGroup', val);

    return val
}
// #endregion
// ------- end -------

// ------- todo列表背景设置 -------
// #region
export function changeToDoListBackgroundSetting(img) {
    const wrap = document.querySelector('.todolist-main-wrap');
    wrap.className = `todolist-main-wrap ${img}`;

    setItem('backgroundImg', img);
}
// #endregion
// ------- end -------

// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>
// <<<<<<><><><><><><><><><><><><><><><><><><><>>>>>>


// ------- "上下文菜单"功能 -------
// #region
export function deleteToDo(localkey, id) {
    const temp = getItem(localkey);
    const res = temp.filter(item => {
        return item.id !== id
    })

    switch (localkey) {
        case 'todayListData':
            publish('todayListData', res);
            break;
        case 'importantListData':
            publish('importantListData', res);
            break;
        case 'taskListListData':
            publish('taskListListData', res);
            break;
        default:
            break;
    }
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

    // 默认显示的ToDo分组
    setItem('fixedToDoGroup', fixedToDoGroup);

    // 初始化todo
    setItem('toDoList', toDoList);

    // 初始化用户列表
    setItem('userToDoGroup', userToDoGroup);

    // 背景设置
    setItem('backgroundImg', backgroundImg)

    // 是否执行过这个初始化函数
    setItem('isInit', true)
}
// #endregion
// ------- end -------