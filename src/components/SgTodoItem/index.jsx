import React from 'react'

import "./index.css"

import "../../asserts/style/icon.css"
import { alterTodoFinishedData, alterTodoImportantData } from '../../utils/handleData';

export default function SgTodoItem(props) {

    const { id, content, isImportant, isFinished, pathname } = props;

    function isFinishedStyle() {
        return isFinished ? 'sg-todo-item-wrap finished' : 'sg-todo-item-wrap';
    }

    function isImportantStyle() {
        return isImportant ? 'sg-todo-item-icon-favorite important-view' : 'sg-todo-item-icon-favorite';
    }

    function handleTaskFinishedStatus(e) {
        alterTodoFinishedData(pathname, e.target.id, !isFinished);
    }

    function handleTaskImportantStatus(e) {
        alterTodoImportantData(pathname, e.target.id, !isImportant);
    }

    return (
        <section
            className={isFinishedStyle()}
            id={id}
        >
            <section
                id={id}
                className='sg-todo-item-icon-check'
                onClick={handleTaskFinishedStatus}
            ></section>

            <section id={id} className='sg-todo-item-text'>{content}</section>

            <section
                id={id}
                className={isImportantStyle()}
                onClick={handleTaskImportantStatus}
            ></section>
        </section>
    )
}
