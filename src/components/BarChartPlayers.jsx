import { BarChart } from '@tremor/react'
import { tennisData } from '../data/tennisData'

export const BarChartPlayers = () => {
  return (
    <BarChart categories={['points']} data={tennisData} index='name' />
  )
}