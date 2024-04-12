import React, { useState } from 'react'
import Switch from "../Switch";

import "./index.css"

export default function SgSwitchItem(props) {
    // console.log(props);
    const { title, updateData, row } = props;

    const [isCheckText, setIsCheckText] = useState('关');

    function isChecked(e) {
        updateData(e.target.checked);
        setIsCheckText(e.target.checked ? '开' : '关');
    }

    return (
        <div className={row ? "sg-switch-item-wrap row" : "sg-switch-item-wrap"}>
            <section className='sg-switch-item-title'>
                {title}
            </section>
            <section className='sg-switch-item-title'>
                <label htmlFor={`checkbox-${title}`}>
                    <Switch isChecked={isCheckText} />
                    <span>{isCheckText}</span>
                    <input id={`checkbox-${title}`} type="checkbox" onChange={isChecked} />
                </label>

            </section>
        </div>
    )
}
