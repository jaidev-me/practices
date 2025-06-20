import React from 'react'

const page = ({params}) => {
    console.log(params)
  return (
    <div>
      {params.query}
    </div>
  )
}

export default page
