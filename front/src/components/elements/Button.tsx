import React, {FC, useRef, useState} from 'react'

interface Props {
  color: 'primary' | 'secondary'
}

export const Button: FC = ({ children }) => (
  <button>{children}</button>
)
