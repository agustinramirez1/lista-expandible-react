import './App.css'
import List from './Components/Lista-desplegable/List'
import Card from './Components/Card/Card'
import Bloque from './Components/Bloque-expandible/Bloque'
import Botones from './Components/Botones/Botones'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <List />
      <Card />
      <Bloque />
      <div className='container mt-5 mb-5'>
        <div>
          <Botones background={"rgb(0, 149, 224)"} text={"LABEL"} color={"white"} />
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"}/>
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"} disabled={true}/> <br /> <br />
        </div>
        <div>
          <Botones background={"rgb(0, 149, 224)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} iconPosition={'start'}/>
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} iconPosition={'start'}/>
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} disabled={true} iconPosition={'start'}/> <br /> <br />
        </div>
        <div>
          <Botones background={"rgb(0, 149, 224)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} iconPosition={'end'}/>
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} iconPosition={'end'}/>
          <Botones background={"rgb(19, 176, 255)"} text={"LABEL"} color={"white"} icon={"bi bi-plus"} disabled={true} iconPosition={'end'}/> <br /> <br />
        </div>
        <div>
          <Botones background={"white"} text={"LABEL"} border={"rgb(0, 149, 224)"} color={"rgb(0, 149, 224)"}/>
          <Botones background={"aliceblue"} border={"rgb(19, 176, 255)"} text={"LABEL"} color={"rgb(19, 176, 255)"}/>
          <Botones background={"white"} color={'rgb(19, 176, 255)'} border={"rgb(19, 176, 255)"} text={"LABEL"} outlined={true} disabled={true}/> <br /> <br />
        </div>
        <div>
          <Botones background={"white"} color={'rgb(0, 149, 224)'} border={"rgb(0, 149, 224)"} text={"LABEL"} icon={"bi bi-plus"} iconPosition={'start'} outlined={true}/>
          <Botones background={"aliceblue"} border={"rgb(19, 176, 255)"} text={"LABEL"} color={"rgb(19, 176, 255)"} icon={"bi bi-plus"} iconPosition={'start'}/>
          <Botones background={"white"} color={'rgb(0, 149, 224)'} border={"rgb(19, 176, 255)"} text={"LABEL"} icon={"bi bi-plus"} disabled={true} iconPosition={'start'} outlined={true}/> <br /> <br />
        </div>
        <div>
          <Botones background={"white"} color={'rgb(0, 149, 224)'} border={"rgb(0, 149, 224)"} text={"LABEL"} icon={"bi bi-plus"} iconPosition={'end'} outlined={true}/>
          <Botones background={"aliceblue"} border={"rgb(19, 176, 255)"} text={"LABEL"} color={"rgb(19, 176, 255)"} icon={"bi bi-plus"} iconPosition={'end'}/>
          <Botones background={"white"} color={'rgb(19, 176, 255)'} border={"rgb(0, 149, 224)"} text={"LABEL"} icon={"bi bi-plus"} disabled={true} iconPosition={'end'} outlined={true}/> <br /> <br />
        </div>
        <div>
          <Botones color={"rgb(0, 149, 224)"} text={"LABEL"} link={true}/>
          <Botones text={"LABEL"} color={"rgb(19, 176, 255)"} textDecoration={true} link={true}/>
          <Botones text={"LABEL"} color={"rgb(19, 176, 255)"} icon={"bi bi-plus"} iconPosition={'end'} link={true}/>
          <Botones color={"rgb(19, 176, 255)"} text={"LABEL"} icon={"bi bi-plus"} iconPosition={'end'} link={true}/> <br /> <br />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App
