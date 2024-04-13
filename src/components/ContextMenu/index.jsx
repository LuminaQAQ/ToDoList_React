import React from 'react'

import "./index.css"

export default function ContentMenu() {

  return (
    <section className="context-menu-wrap">
      <div className="context-menu-basic-wrap">
        <section id='add-to-today' className='sg-option'>添加到"我的一天"</section>
        <section id='add-to-important' className='sg-option'>标记为"重要"</section>
        <section id='add-to-finished' className='sg-option'>标记为"已完成"</section>
      </div>

      <section id='todo-will-delete' className='delete-option sg-option'>删除</section>
    </section>
  )
}
