import React, { Children } from 'react'

function SpanSoporte({children}) {
  return (
    <div>
         <span className="text-2xl font-weight-bold text-gray-800 mr-2">{children}</span>
    </div>
  )
}

export default SpanSoporte