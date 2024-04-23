import { Card, ProgressBar } from '@tremor/react'

export const Sales = () => {
  return (
    <Card decoration="left" decorationColor="emerald">
      <h4 className='text-tremor-default text-tremor-content dark:text-dark-tremor-content'>Sales</h4>
      <p className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong' >71.25€</p>
      <p className='mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
        <span>75% of annual target</span>
        <span>225.000€</span>
      </p>
      <ProgressBar value={75} className='mt-2' color='emerald' />
    </Card>
  )
}