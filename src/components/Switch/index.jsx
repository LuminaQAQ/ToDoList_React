import React from 'react'

import "./index.css"

export default function Switch(props) {
    const { isChecked } = props;

    return (
        <section className={isChecked ? 'switch-wrap on' : 'switch-wrap'}></section>
    )
}
