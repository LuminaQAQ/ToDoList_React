# 页面预览

[https://luminaqaq.github.io/ToDoList_React/](https://luminaqaq.github.io/ToDoList_React/)

---

# 功能完成情况

- [x] 基本样式
- [x] 基本 CRUD
- [x] 基本 ToDo 功能
- [x] 手动切换主题
- [x] 自适应深色/浅色主题
- [x] 移动端适配
- [x] 自定义设置(ToDo 展示页面右上角的三个点)
- [ ] 用户自定义分组
- [ ] 用户信息
- [ ] 结构优化
- [ ] 数据处理方式优化

---

# 项目使用

### 项目克隆

`git clone https://github.com/LuminaQAQ/ToDoList_React.git`

### 初始化

` npm install`

### 项目启动

`npm start`

### 项目打包

`npm run build`

---

# 简单的说明

* `api/`：存放数据交互的 API 相关代码（本地存储，假装有后端 😋。但因为历史原因，导致和 utils/localData.js 分家了 😂）。
* `asserts/`：存放应用程序中使用的静态资源，如图片等。
* `components/`：存放 React 组件，包括上下文菜单、空状态、主体内容、单个待办事项等。
* `configs/`：存放配置文件，如应用程序的配置信息。
* `pages/`：存放页面组件，如全部任务、已完成任务、设置页面等。
* `routes/`：存放路由配置文件，定义了页面之间的跳转规则。
* `utils/`：存放工具函数，如处理数据的方法和本地存储相关的方法。

---

# 树形文件目录

```plaintext
├─.gitignore
├─LICENSE
├─package-lock.json
├─package.json
├─project_structure.md
├─public
│ ├─favicon.ico
│ ├─index.html
│ ├─logo192.png
│ ├─logo512.png
│ └─manifest.json
├─README.md
└─src
  ├─api
  │ └─api.js
  ├─App.css
  ├─App.js
  ├─App.scss
  ├─asserts
  │ ├─imgs
  │ │ ├─BackgroundImages
  │ │ │ ├─autumn.jpg
  │ │ │ ├─fancy.jpg
  │ │ │ ├─flower-field.jpg
  │ │ │ ├─hilltop.jpg
  │ │ │ ├─mountain.jpg
  │ │ │ ├─snow.jpg
  │ │ │ ├─sunset-glow.jpg
  │ │ │ └─wriggle.jpg
  │ │ ├─MainBody
  │ │ │ ├─add.png
  │ │ │ ├─back.png
  │ │ │ ├─bg1.jpg
  │ │ │ ├─default_avatar.png
  │ │ │ ├─empty-status.png
  │ │ │ ├─favorite.png
  │ │ │ ├─more.png
  │ │ │ ├─nav.png
  │ │ │ ├─todo-done.png
  │ │ │ ├─todo-hover.png
  │ │ │ ├─todo-unfinished.png
  │ │ │ └─unfavorite.png
  │ │ └─SideBar
  │ │   ├─allTask.png
  │ │   ├─create_group.png
  │ │   ├─finished.png
  │ │   ├─important.png
  │ │   ├─search_dark.png
  │ │   ├─search_light.png
  │ │   ├─task-dark.png
  │ │   ├─today.png
  │ │   └─user_todo.png
  │ └─style
  │   ├─default.css
  │   ├─default.scss
  │   ├─icon.css
  │   ├─icon.scss
  │   ├─mobile.css
  │   ├─mobile.scss
  │   ├─theme.css
  │   ├─theme.scss
  │   ├─theme_option.css
  │   └─theme_option.scss
  ├─components
  │ ├─ContextMenu
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─EmptyStatus
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─MainBody
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgCategoryItem
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgPageTitle
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgRadioItem
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgSwitchItem
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgTodoItem
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SgUserCategoryItem
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SideBar
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ └─Switch
  │   ├─index.css
  │   ├─index.jsx
  │   └─index.scss
  ├─configs
  │ └─config.js
  ├─index.css
  ├─index.js
  ├─index.scss
  ├─pages
  │ ├─AllTask
  │ │ └─index.jsx
  │ ├─Finished
  │ │ └─index.jsx
  │ ├─Important
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─SearchView
  │ │ └─index.jsx
  │ ├─Setting
  │ │ ├─index.css
  │ │ ├─index.jsx
  │ │ └─index.scss
  │ ├─Task
  │ │ └─index.jsx
  │ ├─Today
  │ │ └─index.jsx
  │ ├─UserInfo
  │ │ └─index.jsx
  │ └─UserTask
  │   └─index.jsx
  ├─routes
  │ └─index.js
  └─utils
    ├─handleData.js
    └─localStroge.js
```
