
import './App.css'


const body = document.getElementsByTagName("body")[0]
function qizil(props){
  body.style.background=props
}
function App() {


  return (
    <>
      <button onClick={()=>qizil('blue')}>blue</button>
      <button onClick={()=>qizil('red')}>red</button>
      <button onClick={()=>qizil('yellow')}>yellow</button>
    </>
  )
}

export default App