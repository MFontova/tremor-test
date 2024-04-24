import { Switch } from "@tremor/react"
import React, { useState } from "react"

export const MFSwitch = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className="flex flex-row justify-between">
      <p>El switch está {isActive ? 'activado :)' : 'desactivado :('}</p>
      <Switch color={'emerald'} defaultChecked={isActive} onChange={() => setIsActive(current => !current)} />
    </div>
  )
}