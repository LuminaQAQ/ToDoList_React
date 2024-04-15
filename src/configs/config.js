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
        id: "light",
        title: "浅色主题",
        name: "theme",
        checked: false,
    },
    {
        ownership: 'theme',
        id: "dark",
        title: "深色主题",
        name: "theme",
        checked: true,
    },
    {
        ownership: 'theme',
        id: "default",
        title: "默认主题",
        name: "theme",
        checked: false,
    },
];

// 默认的ToDo分组 及 智能分组设置
export const fixedToDoGroup = [
    {
        id: 1,
        icon: 'today',
        title: '我的一天',
        to: '/today?title=我的一天&icon=today',
        ownership: 'fixed',
    },
    {
        id: 2,
        to: '/important?title=重要&icon=important',
        icon: 'important',
        title: '重要',
        checked: true,
        ownership: 'fixed',
    },
    {
        id: 3,
        to: '/allTask?title=全部&icon=allTask',
        icon: 'allTask',
        title: '全部',
        ownership: 'fixed',
    },
    {
        id: 4,
        to: '/finished?title=已完成&icon=finished',
        icon: 'finished',
        title: '已完成',
        checked: true,
        ownership: 'fixed',
    },
    {
        id: 5,
        to: '/taskList?title=任务&icon=taskList',
        icon: 'taskList',
        title: '任务',
        checked: true,
        ownership: 'fixed',
    },
];

// 用户的ToDo分组
export const userToDoGroup = [];

// ToDo数据
export const toDoList = [];

// 背景设置
export const backgroundImg = '';