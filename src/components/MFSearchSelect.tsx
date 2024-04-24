import { SearchSelect, SearchSelectItem } from "@tremor/react"
import React from "react"

export const MFSearchSelect = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>Search Select</p>
      <SearchSelect placeholder="Selecciona una opción">
        <SearchSelectItem value="1">Option One</SearchSelectItem>
        <SearchSelectItem value="2">Option Two</SearchSelectItem>
        <SearchSelectItem value="3">Option Three</SearchSelectItem>
      </SearchSelect>
    </div>
  )
}