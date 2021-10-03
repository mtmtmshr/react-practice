import React from 'react'

const CountClick = (props) => {
    const {handleClick, children} = props
    console.log('clicked', children)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(CountClick)
