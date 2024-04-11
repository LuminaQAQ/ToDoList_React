import React from 'react'

import "./index.css"

export default function SgSwitchItem(props) {
    // console.log(props);
    const { title, updateData } = props;

    function isChecked(e) {
        updateData(e.target.checked)
    }

    return (
        <div className="sg-switch-item-wrap">
            <section className='sg-switch-item-title'>
                {title}
            </section>
            <section className='sg-switch-item-title'>
                <label htmlFor="">
                    <input type="checkbox" onChange={isChecked} />
                </label>
            </section>
        </div>
    )
}
