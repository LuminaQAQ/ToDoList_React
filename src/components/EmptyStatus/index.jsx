import React from 'react'

import './index.css'

import '../../asserts/style/icon.css'


export default function EmptyStatus() {
    return (
        <section className='todo-list-empty-wrap'>
            <div className="todo-list-empty-img empty-icon"></div>
            <h3>现在没有任何计划</h3>
        </section>
    )
}
