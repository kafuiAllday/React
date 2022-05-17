import React, { useState } from 'react'

function RatingSelect({select}) {
    const[selected, setSelected]=useState(10)
    const handleChage=(e)=>{
        setSelected(e.currentTarget.value)
        select(e.currentTarget.value)
    }
  return (
    <div>
      
    </div>
  )
}

export default RatingSelect
