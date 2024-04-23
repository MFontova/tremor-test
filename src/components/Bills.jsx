import { Card, ProgressBar } from '@tremor/react'

export const Bills = () => {
  return (
    <Card decoration="left" decorationColor="red">
      <h4 className='text-tremor-default text-tremor-content dark:text-dark-tremor-content'>Bills</h4>
      <p className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong' >35.42€</p>
      <p className='mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
        <span>32% of annual target</span>
        <span>400.000€</span>
      </p>
      <ProgressBar value={32} className='mt-2' color='red' />
    </Card>
  )
}