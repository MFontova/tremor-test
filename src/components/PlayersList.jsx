import { List, ListItem} from '@tremor/react'
import { tennisData } from '../data/tennisData'

export const PlayersList = () => {
  return (
    <List className='flex flex-col justify-center'>
      {
        tennisData.map(element => (
          <ListItem key={element.name}>
            <span>{element.name}</span>
            <span>{element.points}</span>
          </ListItem>
        ))
      }
    </List>
  )
}