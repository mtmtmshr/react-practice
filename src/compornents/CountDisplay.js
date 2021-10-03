import React from 'react'

const CountDisplay = (props) => {
    const {name, count} = props
    console.log(`display ${name}`)
    return (
        <div>
            {count}
        </div>
    )
}

export default React.memo(CountDisplay)
