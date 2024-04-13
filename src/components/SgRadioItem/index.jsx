import React from 'react'

import "./index.css"

export default function SgRadioItm(props) {

    const { ownership, id, name, title, checked, onChange } = props;

    function commitChangeValue(e) {
        const id = e.target.id;

        onChange(ownership, id, true);
    }

    return (
        <section className="sg-radio-wrap">
            <input
                type="radio"
                name={name}
                id={id}
                onChange={commitChangeValue}
                defaultChecked={checked}
            />
            <label htmlFor={id}>
                <section className='radio-circle'></section>
                <span>{title}</span>
            </label>
        </section>
    )
}
