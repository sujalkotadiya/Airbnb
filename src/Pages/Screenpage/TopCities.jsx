import ScreenPage from './ScreenPage'
import TopCitiesData from '../../Datas/TopCities'

const TopCities = () => {
  return (
    <div>
         <ScreenPage props={TopCitiesData}/>
    </div>
  )
}

export default TopCities