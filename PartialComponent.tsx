
import React from 'react'

type ComponentProp = {
    name: string,
    age: number,
    isMarried: boolean
}

const PartialComponent = ({name,age , isMarried}:Partial<ComponentProp>) => {
  return (
    <div>PartialComponent</div>
  )
}

export default PartialComponent