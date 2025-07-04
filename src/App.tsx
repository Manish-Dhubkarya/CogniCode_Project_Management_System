import './App.css'
import Button1 from './UI_Components/Buttons/Button1'
import Button2 from './UI_Components/Buttons/Button2'
import Button3 from './UI_Components/Buttons/Button3'
import Button4 from './UI_Components/Buttons/Button4'
import Filter from './UI_Components/Filter/Filter'
import Navigation1 from './UI_Components/Navigations/Navigation1'
import PaginationNav from './UI_Components/Navigations/PaginationNav'
import CircularProgress from './UI_Components/Progresses/CircularProgress'
import EmployeeSearchBar from './UI_Components/SearchBars/EmployeeSearch'
import MainSearchBar from './UI_Components/SearchBars/MainSearchBar'
import MikeSearch from './UI_Components/SearchBars/MikeSearch'

function App() {
  return(
    <div className='w-full font-librefranklin  flex bg-gray-200 flex-col gap-y-4 my-10 items-center justify-center'>
<Button1 gradientType="gradient1" value='Helloooo'/>
<Button2 value='Submit'/>
<Button3 value="Updates" />
<Button4 value1="12" value2="On Going" />
<MainSearchBar/>
<Navigation1 />
<MikeSearch/>
<EmployeeSearchBar/>
<Filter/>
<CircularProgress progress={90}/>
<PaginationNav total={10} />

</div>
  )
}

export default App;
