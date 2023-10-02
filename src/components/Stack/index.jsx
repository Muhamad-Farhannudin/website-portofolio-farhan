import React from 'react'

export default function index({className, children}) {
  return (
    <button className={className}>
      {children}
    </button>
  )
}
