import React, { useState } from 'react'
import Switch from "../Switch";

import "./index.css"

export default function SgSwitchItem(props) {
    const { title, updateData, row, ownership, checked } = props;

    const [isChecked, setIsChecked] = useState(checked);

    function isCheckedHandler(e) {
        const id = e.target.id.split('-')[1];

        updateData(ownership, id, !isChecked);
        setIsChecked(!isChecked)
    }

    return (
        <div className={row ? "sg-switch-item-wrap row" : "sg-switch-item-wrap"}>
            <section className='sg-switch-item-title'>
                {title}
            </section>
            <section className='sg-switch-item-title'>
                <label htmlFor={`checkbox-${title}`}>
                    <Switch isChecked={isChecked} />
                    <span>{isChecked ? '开' : '关'}</span>
                    <input
                        type="checkbox"
                        id={`checkbox-${title}`}
                        onChange={isCheckedHandler}
                        checked={isChecked}
                    />
                </label>
            </section>
        </div>
    )
}
