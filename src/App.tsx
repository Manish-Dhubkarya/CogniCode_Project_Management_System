
import './App.css'
import Button1 from './UI_Components/Buttons/Button1'
import Button2 from './UI_Components/Buttons/Button2'
import Button3 from './UI_Components/Buttons/Button3'
import Navigation1 from './UI_Components/Navigations/Navigation1'

function App() {
  return(
    <div className='w-full flex flex-col gap-y-4 my-10 items-center justify-center'>
<Button1 width='w-[110px]' height='h-auto' gradientType="gradient1" value='Helloooo'/>
<Button2 width='w-[100px]' height='h-auto' value='Submit'/>
<Button3 width="w-[132px]" height="h-[27px]" value="Click Me" />
<Navigation1 />
</div>
  )
}

export default App
