import React from 'react'

function Button({
    children,
    type = 'button',
    onClick = () => {},
    bgcolor = 'bg-blue-600',
    textColor = "text-white",
    className = '',
    ...props
}) {
  return (
     //custom class
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}`} {...props}> 
    {children}
    </button>
  )
}

export default Button