import React, { useState } from 'react'

import "./index.css"

export default function SgRadioItm(props) {

    const { id, name, title, checked, onChange } = props;

    function commitChangeValue(e) {
        onChange(id);
    }

    return (
        <section className={checked ? 'sg-radio-wrap on' : 'sg-radio-wrap'}>
            <input
                type="radio"
                name={name}
                id={id}
                checked={checked}
                onChange={commitChangeValue}
            />
            <label htmlFor={id}>
                <section className='radio-circle'></section>
                <span>{title}</span>
            </label>
        </section>
    )
}
