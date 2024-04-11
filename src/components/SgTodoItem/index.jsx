import React from 'react'

import "./index.css"

import "../../asserts/style/icon.css"

export default function SgTodoItem() {
    return (
        <section className='sg-todo-item-wrap'>
            <section className='sg-todo-item-icon-check'></section>
            <section className='sg-todo-item-text'>1</section>
            <section className='sg-todo-item-icon-favorite'></section>
        </section>
    )
}
