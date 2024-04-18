import React, { Fragment, useState } from 'react'
import { publish } from 'pubsub-js'

import "./index.css"

import "./index.scss"

import "../../asserts/style/icon.css"
import { alterTodoContentData, alterTodoFinishedData, alterTodoImportantData } from '../../utils/handleData';

export default function SgTodoItem(props) {
    const { id, content, isImportant, isFinished, pathname, isEdit } = props;

    const [alterContent, setAlterContent] = useState(content);


    function showUpdateBar(e) {
        e.stopPropagation();
        if (e.button === 2) return false;

        publish('openUpdateBar', props);
    }

    function alterTodoContent(e) {
        const val = e.target.value;
        if (val.trim().length < 1) return false;

        setAlterContent(val);
        alterTodoContentData(pathname, id, val);
    }

    function isFinishedStyle() {
        return isFinished ? 'sg-todo-item-wrap finished' : 'sg-todo-item-wrap';
    }

    function isImportantStyle() {
        return isImportant ? 'sg-todo-item-icon-favorite important-view' : 'sg-todo-item-icon-favorite';
    }

    function handleTaskFinishedStatus(e) {
        if (e.button === 2) return false;
        alterTodoFinishedData(pathname, e.target.id, !isFinished);
    }

    function handleTaskImportantStatus(e) {
        if (e.button === 2) return false;
        alterTodoImportantData(pathname, e.target.id, !isImportant);
    }

    return (
        <Fragment>
            <section
                className={isFinishedStyle()}
                id={id}
                onMouseDown={showUpdateBar}
            >
                <section
                    id={id}
                    className='sg-todo-item-icon-check'
                    onMouseDown={handleTaskFinishedStatus}
                ></section>

                <section
                    id={id}
                    className='sg-todo-item-text'
                >
                    <span
                        className='sg-todo-item-text'
                        id={id}
                        style={isEdit ? { display: 'none' } : { display: 'block' }}
                    >{content}</span>
                    <input
                        type="text"
                        style={isEdit ? { display: 'block' } : { display: 'none' }}
                        value={alterContent}
                        onChange={alterTodoContent}
                    />
                </section>

                <section
                    id={id}
                    className={isImportantStyle()}
                    onMouseDown={handleTaskImportantStatus}
                ></section>
            </section>
        </Fragment >
    )
}
