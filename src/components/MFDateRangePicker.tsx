import { DateRangePicker, DateRangePickerItem, DateRangePickerValue } from "@tremor/react"
import { subYears, subMonths, subWeeks } from "date-fns"
import { es } from "date-fns/locale"
import React from "react"
import { useState } from "react"

export const MFDateRangePicker = () => {
  const [value, setValue] = useState<DateRangePickerValue>({
    from: undefined,
    to: undefined
    // from: subYears(new Date(), 1),
    // to: new Date()
  })
  return (
    <div className="flex flex-col gap-3">
      <p>Date range picker</p>
      <DateRangePicker 
        locale={es}  
        selectPlaceholder="Seleccionar rango" 
        placeholder="Seleccionar" 
        value={value}
        onValueChange={setValue}
      >
        <DateRangePickerItem
          from={subWeeks(new Date(), 1)} 
          value="lastweek" 
          key="lastweek"
        >
          Última semana
        </DateRangePickerItem>
        <DateRangePickerItem
          from={subYears(new Date(), 1)} 
          value="ytd" 
          key="ytd"
        >
          Último año
        </DateRangePickerItem>
        <DateRangePickerItem
          from={subMonths(new Date(), 6)} 
          value="half" 
          key="half"
        >
          Últimos seis meses
        </DateRangePickerItem>
      </DateRangePicker>
    </div>
  )
}