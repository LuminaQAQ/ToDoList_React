import React from 'react'

import "./index.css"

import "../../asserts/style/icon.css"

export default function SgTodoItem(props) {

    const { id, content, important } = props;

    return (
        <section
            className='sg-todo-item-wrap'
            id={id}
        >
            <section id={id} className='sg-todo-item-icon-check'></section>
            <section id={id} className='sg-todo-item-text'>{content}</section>
            <section id={id} className={important ? 'sg-todo-item-icon-favorite important-view' : 'sg-todo-item-icon-favorite'}></section>
        </section>
    )
}
