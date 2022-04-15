import React from 'react'

const Arrow = ({color, extraClass}) => {
  return (
    <span
        className={`w-4 h-4 
                    inline-block 
                    border-${color ? color : 'yellow-300' }
                    border-solid border-t-[5px] border-r-[5px] 
                    transform rotate-45 ${extraClass && extraClass}`}></span>
  )
}

export default Arrow;