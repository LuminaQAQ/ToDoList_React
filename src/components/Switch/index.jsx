import React from 'react'

import "./index.css"

export default function Switch(props) {
    const { isChecked } = props;

    return (
        <section className={isChecked === '开' ? 'switch-wrap on' : 'switch-wrap'}></section>
    )
}
