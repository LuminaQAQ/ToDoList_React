// 常规设置
export const regular = [
    {
        id: 'addNewOnTop',
        checked: false,
    },
    {
        id: 'pinStarOnTop',
        checked: false,
    },
    {
        id: 'confirmBeforeDelete',
        checked: false,
    },
];

// 主题
export const theme = [
    {
        id: "light",
        title: "浅色主题",
        name: "theme",
        checked: false,
    },
    {
        id: "dark",
        title: "深色主题",
        name: "theme",
        checked: true,
    },
    {
        id: "default",
        title: "默认主题",
        name: "theme",
        checked: false,
    },
];

// 默认的ToDo分组
export const fixedToDoGroup = [
    {
        id: 1,
        key: 'important',
        checked: false,
    },
    {
        id: 2,
        key: 'all',
        checked: false,
    },
    {
        id: 3,
        key: 'finished',
        checked: false,
    },
];

// 默认的ToDo分组的数据
export const fixedToDoList = {
    today: [],
    important: [],
    all: [],
    finished: [],
    taskList: [],
}

// 用户的ToDo分组
export const userToDoGroup = [];

// 用户的ToDo分组的数据
export const userToDoList = {};