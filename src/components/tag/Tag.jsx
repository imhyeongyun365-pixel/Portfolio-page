import React from 'react'
import './Tag.scss'
const VARIANT={
  success :'variant_success',
  info :'variant_info',
  warning :'variant_warning',
  neutral :'variant_neutral',
}


const Tag = ({
  children, variant = 'neutral'
}) => {
  return (
    <span className="`${tag} ${VARIANT[variant]} ?? VARIANT.neutral`">
      {children}
    </span>
  )
}

export default Tag