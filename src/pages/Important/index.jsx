import React, { Fragment } from 'react'
import SgTodoItem from '../../components/SgTodoItem'

export default function ImportantView() {

    return (
        <Fragment>
            <SgTodoItem important content="学习HTML" />
            <SgTodoItem important content="学习JS" />
            <SgTodoItem important content="学习CSS" />
            <SgTodoItem important content="学习好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识好多知识" />
        </Fragment>
    )
}
