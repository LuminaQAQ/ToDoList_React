// 随机id
import { nanoid } from 'nanoid'

// 动态数据
import { publish } from 'pubsub-js'

// 数据存储方法
import {
    getItem,
    setItem,
} from "./localStroge"

function getDate() {
    const date = new Date();
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

// 增
export function setData(content, type) {
    const local = getItem('toDoList') || [];
    const date = getDate();

    const curData = {
        id: nanoid(),
        date,
        isFinished: false,
        content,
        type: type === "allTask" ? "taskList" : type,
    }
    local.push(curData);

    setItem('toDoList', local);
    publish(type, local);
}

// 删
export function deleteData(pubkey) {

    publish(pubkey);
}

// 改
export function updateData(pubkey) {

    publish(pubkey);
}

// 查
export function fetchData(type) {
    const local = getItem('toDoList');

    if (type === "allTask") return local;
    else {
        const real = local.filter(item => {
            return item.type === type;
        })

        return real;
    }
}