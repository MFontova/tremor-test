import { Select, SelectItem } from "@tremor/react"
import React from "react"

export const MFSelect = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>Select</p>
      <Select placeholder="Selecciona una opción">
        <SelectItem value="1">Option One</SelectItem>
        <SelectItem value="2">Option Two</SelectItem>
        <SelectItem value="3">Option Three</SelectItem>
      </Select>
    </div>
  )
}