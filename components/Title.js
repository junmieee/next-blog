


import React from 'react'

const Title = ({ title }) => {
    return (
        <h1 className="flex item-start my-6 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
        </h1>
    )
}

export default Title