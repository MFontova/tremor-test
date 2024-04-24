import { DatePicker } from "@tremor/react"
import { es } from 'date-fns/locale'

export const MFDatePicker = () => {
  return (
    <div className="flex flex-col gap-3">
      <p>Date picker</p>
      <DatePicker locale={es} placeholder="Seleccionar" onValueChange={(e) => e != undefined && console.log(e.toDateString())} />
    </div>
  )
}