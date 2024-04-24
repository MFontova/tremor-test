import { BarList, AreaChart, TabGroup, TabList, Tab, TabPanels, TabPanel } from '@tremor/react'
import { Bills } from './components/Bills'
import { Sales } from './components/Sales'
import { BarListData } from './data/barListData'
import { areaChartData } from './data/areaChartData'
import { PlayersList } from './components/PlayersList'
import { BarChartPlayers } from './components/BarChartPlayers'
import { MFDatePicker } from './components/MFDatePicker'
import { MFDateRangePicker } from './components/MFDateRangePicker'
import { MFSelect } from './components/MFSelect'
import { MFSearchSelect } from './components/MFSearchSelect'
import { MFMultiSelect } from './components/MFMultiSelect'
import { MFSwitch } from './components/MFSwitch'

function App() {

  return (
    <div className="flex h-full">
      <section className='bg-transparent p-8 flex w-[500px] flex-col gap-10 min-h-full h-screen'>
        <p className="font-semibold text-3xl">Menú</p>
        <MFDatePicker/>
        <MFDateRangePicker/>
        <MFSelect/>
        <MFSearchSelect/>
        <MFMultiSelect/>
        <MFSwitch/>
      </section>
      <section className="bg-transparent-50 border-l border-white w-4/5 p-8 flex flex-col gap-10">
        <p className="font-semibold text-3xl">Contenido</p>
        <TabGroup>
          <TabList className='mb-10'>
            <Tab>Gràficos A</Tab>
            <Tab>Gràficos B</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='flex flex-col gap-10'>
                <div className='flex gap-10'>
                  <Sales />
                  <Bills />
                </div>
                <AreaChart data={areaChartData} index='a' categories={['First value', 'Second value']} />
              </div>
            </TabPanel>
            <TabPanel>
              <div className='flex flex-col gap-10'>
                <div className='flex justify-between gap-16'>
                  <BarList showAnimation={true} data={BarListData} className='flex-1' />
                  <BarList showAnimation={true} data={BarListData} sortOrder='ascending' className='flex-1' />
                </div>
                <div className='flex justify-between gap-10 items-middle'>
                  <PlayersList />
                  <BarChartPlayers />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
    </div>
  )
}

export default App
