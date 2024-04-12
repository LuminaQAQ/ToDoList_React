import React from 'react'

import "./index.css"

export default function ContentMenu() {

  return (
    <section className="context-menu-wrap">
      <div className="context-menu-basic-wrap">
        <section className='sg-option'>添加到"我的一天"</section>
        <section className='sg-option'>标记为"重要"</section>
        <section className='sg-option'>标记为"已完成"</section>
      </div>

      <section className='delete-option sg-option'>删除</section>
    </section>
  )
}
