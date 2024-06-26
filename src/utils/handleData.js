// 随机id
import { nanoid } from 'nanoid'

// 动态数据
import { publish } from 'pubsub-js'
import { fetchAddTaskOnTop, fetchStarTaskMoveOnTop } from '../api/api';

// 数据存储方法
import {
    getItem,
    setItem,
} from "./localStroge"


// ------- 综合处理函数 -------
// #region

// 时间获取
function getDate() {
    const date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

// #endregion
// ------- end -------

// ------- "增"操作 -------
// #region

// 增加ToDo
export function setData(content, type) {
    let local = getItem('toDoList') || [];
    let localSidebar = fetchSidebarData();

    const date = getDate();

    // ------- 本地数据 -------
    // #region
    // todo数据
    const curData = {
        id: nanoid(),
        todo_id: Number(local[local.length - 1]?.todo_id) + 1 || 0,
        date,
        isFinished: false,
        isImportant: type === "important" ? true : false,
        content,
        type: type === "allTask" ? "taskList" : type,
    }
    local.push(curData);

    setItem('toDoList', local);
    local = fetchData(type);
    publish(type, local);


    localSidebar = fetchSidebarData();

    setItem('fixedToDoGroup', localSidebar);
    publish('sidebar-reflash', localSidebar);
    // #endregion
    // ------- end -------

}

// 增加用户自定义组
export function addUserToDoGroup() {
    console.log('core');
}
// #endregion
// ------- end -------

// ------- "删"操作 -------
// #region

// 删
export function deleteData(route, type, id) {
    let local = getItem('toDoList') || [];

    // ------- 本地数据 -------
    // #region
    local = local.filter(item => {
        return item.id !== id
    })

    setItem('toDoList', local);
    local = fetchData(route);
    publish(route, local);


    // #endregion
    // ------- end -------


    // ------- 侧边栏 -------
    // #region
    setItem('fixedToDoGroup', fetchSidebarData());
    publish('sidebar-reflash', fetchSidebarData());
    // #endregion
    // ------- end -------
}
// #endregion
// ------- end -------

// ------- "改"操作 -------
// #region

// 改"完成"状态
export function alterTodoFinishedData(route, id, isFinished) {
    let todoData = fetchData();
    todoData.map(item => {
        if (item.id === id) {
            item.isFinished = isFinished;
        }

        return item
    })


    setItem('toDoList', todoData);
    publish('sidebar-reflash', fetchSidebarData());
    publish('openUpdateBar', id);
    publish(route, fetchData(route));
}

// 改"重要"状态
export function alterTodoImportantData(route, id, isImportant) {
    let todoData = fetchData();

    todoData.map(item => {
        if (item.id === id) item.isImportant = isImportant;

        return item
    })


    setItem('toDoList', todoData);
    publish('sidebar-reflash', fetchSidebarData());
    publish(route, fetchData(route));
}

// 改"我的一天"状态
export function alterTodoTodayData(route, id, type) {
    let todoData = fetchData();

    todoData.map(item => {
        if (item.id === id)
            item.type === 'today' ? item.type = 'taskList' : item.type = 'today';

        return item
    })


    setItem('toDoList', todoData);
    publish('sidebar-reflash', fetchSidebarData());
    publish(route, fetchData(route));
}

// 改"ToDo内容"状态
export function alterTodoContentData(route, id, content) {
    let todoData = fetchData();

    todoData.map(item => {
        if (item.id === id)
            item.content = content;

        return item
    })


    setItem('toDoList', todoData);
    publish('sidebar-reflash', fetchSidebarData());
    publish(route, fetchData(route));
}

// #endregion
// ------- end -------

// ------- "查"操作 -------
// #region
// 页面数据获取
export function fetchData(type) {
    const local = getItem('toDoList');

    let res = [];
    if (type === "allTask" || type === undefined) res = local;
    else if (type === "important") {
        res = local.filter(item => {
            return item.isImportant === true;
        })
    } else if (type === "finished") {
        res = local.filter(item => {
            return item.isFinished === true;
        })
    } else if (type === "today") {
        res = local.filter(item => {
            let date = item.date.split(' ')[0];
            let newYMD = date.split('-');
            const newDay = Number(newYMD[2]) + 1;
            newYMD[2] = newDay;
            const newDate = newYMD.join('-');

            if (new Date(date) < new Date(newDate)) {
                return item.type === type;
            }
            return false;
        });
    } else {
        res = local.filter(item => {
            return item.type === type;
        });
    }


    // 如果设置 "在顶部添加新任务"
    const addOnTop = fetchAddTaskOnTop();
    // 如果设置 "将带有星标的任务移至顶部"
    const starOnTop = fetchStarTaskMoveOnTop();

    res.sort((a, b) => {
        if (starOnTop.checked && a.isImportant !== b.isImportant) return b.isImportant - a.isImportant;
        if (addOnTop.checked && a.todo_id !== b.todo_id) return b.todo_id - a.todo_id;

        return a.todo_id - b.todo_id;
    })

    return res;
}

// 查侧边栏
export function fetchSidebarData() {
    let sidebarData = getItem('fixedToDoGroup');
    const todoData = getItem('toDoList');

    const newSideData = [];
    for (let i = 0; i < sidebarData.length; i++) {
        const item = sidebarData[i];

        if (item.icon === "allTask") {
            item.nums = todoData.length;
            newSideData.push(item);
            continue;
        } else if (item.icon === "finished") {
            item.nums = todoData.reduce((counter, todoObj) => {
                if (item.icon === "finished" && todoObj.isFinished) counter++;

                return counter;
            }, 0);
        } else if (item.icon === "important") {
            item.nums = todoData.reduce((counter, todoObj) => {
                if (item.icon === "important" && todoObj.isImportant) counter++;

                return counter;
            }, 0);
        } else if (item.icon === "today") {
            item.nums = todoData.reduce((counter, todoObj) => {

                let date = todoObj.date.split(' ')[0];
                let newYMD = date.split('-');
                const newDay = Number(newYMD[2]) + 1;
                newYMD[2] = newDay;
                const newDate = newYMD.join('-');

                if (todoObj.type === "today" && new Date(date) < new Date(newDate)) {
                    counter++;
                }

                return counter;
            }, 0);
        } else {
            item.nums = todoData.reduce((counter, todoObj) => {
                if (todoObj.type === item.icon) counter++;

                return counter;
            }, 0);
        }

        newSideData.push(item);
    }

    setItem('fixedToDoGroup', newSideData);
    return getItem('fixedToDoGroup');
}

// #endregion
// ------- end -------