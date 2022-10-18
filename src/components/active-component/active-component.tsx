import React from 'react'

const ActiveComponent: React.FC<{active: boolean, children: any}> = ({active, children}) => {
  return active ? children : null
}

export default ActiveComponent
