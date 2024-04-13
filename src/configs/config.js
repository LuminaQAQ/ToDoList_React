// 常规设置
export const regular = [
    {
        ownership: 'regular',
        title: '在顶部添加新任务',
        checked: false,
    },
    {
        ownership: 'regular',
        title: '将带有星标的任务移至顶部',
        checked: false,
    },
    {
        ownership: 'regular',
        title: '在删除前确认',
        checked: false,
    },
];

// 主题设置
export const theme = [
    {
        ownership: 'theme',
        id: "浅色主题",
        title: "浅色主题",
        name: "theme",
        checked: false,
    },
    {
        ownership: 'theme',
        id: "深色主题",
        title: "深色主题",
        name: "theme",
        checked: true,
    },
    {
        ownership: 'theme',
        id: "默认主题",
        title: "默认主题",
        name: "theme",
        checked: false,
    },
];

// 显示默认的分组的设置, 智能分组
export const fixed = [
    {
        ownership: 'fixed',
        title: '重要',
        checked: false,
    },
    {
        ownership: 'fixed',
        title: '全部',
        checked: false,
    },
    {
        ownership: 'fixed',
        title: '已完成',
        checked: false,
    },
]

// 默认的ToDo分组
export const fixedToDoGroup = [
    {
        id: 1,
        icon: 'today',
        title: '我的一天',
        to: '/today?title=我的一天&icon=today',
        nums: 0,
        checked: false,
        ownership: 'fixed',
    },
    {
        id: 2,
        to: '/important?title=重要&icon=important',
        icon: 'important',
        title: '重要',
        nums: 0,
        checked: false,
    },
    {
        id: 3,
        to: '/allTask?title=全部&icon=allTask',
        icon: 'allTask',
        title: '全部',
        nums: 0,
        checked: false,
    },
    {
        id: 4,
        to: '/finished?title=已完成&icon=finished',
        icon: 'finished',
        title: '已完成',
        nums: 0,
        checked: false,
    },
    {
        id: 5,
        to: '/taskList?title=任务&icon=taskList',
        icon: 'taskList',
        title: '任务',
        nums: 0,
        checked: false,
    },
];

// 默认的ToDo分组的数据
export const fixedToDoList = {
    today: [],
    important: [],
    allTask: [],
    finished: [],
    taskList: [],
}

// 用户的ToDo分组
export const userToDoGroup = [];

// 用户的ToDo分组的数据
export const userToDoList = {};