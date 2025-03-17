import './App.css'

// Importacion de Componentes externos
import DateComponent from './components/DateComponent/DateComponent'
import FormModal from './components/FormModal/FormModal'
import LinkPage from './components/LinkPage/LinkPage'
import TaskBox from './components/TaskBox/TaskBox'


function App() {
  //* Componente Principal  de la Aplicacion
  return (
    <div id='Aplicacion'>
      <div id='Subcontenedor_Aplicacion'>
        <section id='BarraNavegacion_Aplicacion'>
          <DateComponent />
        </section>
        <section id='TaskBox_Aplicacion'>
          <TaskBox />
        </section>
        {/* <LinkPage /> */}
         <FormModal />
      </div>
    </div>
  )
}

export default App
