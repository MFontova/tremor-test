import { BarList, AreaChart } from '@tremor/react'
import { Bills } from './components/Bills'
import { Sales } from './components/Sales'
import { BarListData } from './data/barListData'
import { areaChartData } from './data/areaChartData'
import { PlayersList } from './components/PlayersList'
import { BarChartPlayers } from './components/BarChartPlayers'

function App() {

  return (
    <div className="flex h-full">
      <section className='bg-transparent w-1/5 p-8 shadow-sm shadow-white'>
        <p className="font-semibold text-3xl">Menú</p>
      </section>
      <section className="bg-transparent-50 w-4/5 p-8 flex flex-col gap-10">
        <p className="font-semibold text-3xl">Contenido</p>
        <div className='flex gap-10'>
          <Sales />
          <Bills />
        </div>
        <div className='flex justify-between gap-10'>
          <BarList showAnimation={true} data={BarListData} className='flex-1 p-5' />
          <BarList showAnimation={true} data={BarListData} sortOrder='ascending' className='flex-1 p-5' />
        </div>
        <AreaChart data={areaChartData} index='a' categories={['First value', 'Second value']} />
        <div className='flex justify-between gap-10 items-middle'>
          <PlayersList />
          <BarChartPlayers />
        </div>
      </section>
    </div>
    // <section className='flex flex-col gap-8'>
      // <Card decoration="left" decorationColor="#e2001a">
      //   <h4 className='text-tremor-default text-tremor-content dark:text-dark-tremor-content'>Sales</h4>
      //   <p className='text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong' >71.25€</p>
      //   <p className='mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content'>
      //     <span>32% of annual target</span>
      //     <span>225.000€</span>
      //   </p>
      //   <ProgressBar value={75} className='mt-2' />
      // </Card>
    //   <BarList showAnimation={true} data={[
    //     {
    //       key: '1',
    //       value: 75,
    //       name: 'Primero',
    //       icon: RiMedalLine,
    //     },
    //     {
    //       key: '2',
    //       value: 50,
    //       name: 'Segundo',
    //     },
    //     {
    //       key: '1',
    //       value: 25,
    //       name: 'Tercero',
    //     },
    //   ]} />
    //   <Tracker data={[
    //     {
    //       color: 'emerald',
    //       tooltip: 'Primero'
    //     },
    //     {
    //       color: 'yellow',
    //       tooltip: 'Segundo'
    //     },
    //     {
    //       color: 'orange',
    //       tooltip: 'Tercero'
    //     },
    //     {
    //       color: 'red',
    //       tooltip: 'Cuarto'
    //     },
    //   ].reverse()} />
    //   <Card className='mx-auto flex max-w-lg items-center justify-between px-4 py-3.5 gap-5' decoration={'bottom'} decorationColor={'emerald'}>
    //     <div className='flex items-center space-x-2.5'>
    //       <p className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>Synergie Now</p>
    //       <span className='text-tremor-default text-tremor-content dark:text-dark-tremor-content'>Usuarios totales</span>
    //     </div>
    //     <SparkAreaChart 
    //       categories={['Performance']}
    //       index={'month'}
    //       colors={['emerald']}
    //       className='h-8 w-20 sm:h-10 sm:w-36'
    //       data={[
    //         {
    //           month: 'Jan 21',
    //           Performance: 4000,
    //         },
    //         {
    //           month: 'Feb 21',
    //           Performance: 3000,
    //         },
    //         {
    //           month: 'Mar 21',
    //           Performance: 2000,
    //         },
    //         {
    //           month: 'Apr 21',
    //           Performance: 2780,
    //         },
    //         {
    //           month: 'May 21',
    //           Performance: 1890,
    //         },
    //         {
    //           month: 'Jun 21',
    //           Performance: 2390,
    //         },
    //         {
    //           month: 'Jul 21',
    //           Performance: 3490,
    //         },
    //       ]} />
    //     <div className='flex items-center space-x-2.5'>
    //       <span className='font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'>4598</span>
    //       <span className='rounded bg-emerald-500 px-2 py-1 text-tremor-default font-medium text-white'>+32%</span>
    //     </div>
    //   </Card>
    // </section>
  )
}

export default App
