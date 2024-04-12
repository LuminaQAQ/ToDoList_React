const projectName = "ToDoList"
const version = "0.0.1";


// ------- getItem -------
// #region
export const getItem = (key) => {
    const local = window.localStorage.getItem(
        `${key}_${projectName}_${version}`
    );

    if (local === undefined || local === null) {
        return console.warn(`<键值 key: ${key} 不存在>`)
    } else {
        return JSON.parse(local);
    }
}
// #endregion
// ------- end -------

// ------- setItem -------
// #region
export const setItem = (key, val) => {
    if (val === undefined)
        return console.warn(`<数据 val: ${val} 不合法>`)

    window.localStorage.setItem(
        `${key}_${projectName}_${version}`,
        JSON.stringify(val)
    )

    return true;
}
// #endregion
// ------- end -------

// ------- removeItem -------
// #region
export const removeItem = (key) => {
    if (key === undefined)
        return console.warn(`<键值 key: ${key}>`)

    window.localStorage.removeItem(key);

    return true;
}
// #endregion
// ------- end -------

// ------- clear -------
// #region
export const clear = () => {
    window.localStorage.clear();

    return true;
}
// #endregion
// ------- end -------