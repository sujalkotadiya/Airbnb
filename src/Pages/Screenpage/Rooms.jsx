import ScreenPage from './ScreenPage'
import RoomsData from '../../Datas/Rooms'

const Rooms = () => {
  return (
    <div>
         <ScreenPage props={RoomsData}/>
    </div>
  )
}

export default Rooms