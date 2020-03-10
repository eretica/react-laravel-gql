import React, {FC, ReactNode} from 'react'
import {Loading} from "./Loading";

interface Props {
  isHide: boolean
  insteadOf?: ReactNode
}

export const Hider: FC<Props> = ({ isHide, insteadOf = <Loading/>, children }) => {
  if (isHide) {
    return <>{insteadOf}</>
  }

  return <>{children}</>
}
