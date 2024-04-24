import { MultiSelect, MultiSelectItem, SearchSelect, SearchSelectItem } from "@tremor/react"
import React from "react"

export const MFMultiSelect = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>Multi Select</p>
      <MultiSelect placeholder="Selecciona">
        <MultiSelectItem value="1">Option One</MultiSelectItem>
        <MultiSelectItem value="2">Option Two</MultiSelectItem>
        <MultiSelectItem value="3">Option Three</MultiSelectItem>
      </MultiSelect>
    </div>
  )
}