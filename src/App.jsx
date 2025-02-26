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
        {/* Componente de la Fecha */}
        <DateComponent />
        {/* Componente con los Links para movernos entre seccion (Home, Auto) */}
        {/* <LinkPage /> */}
        {/* Componente de Boton y Modal */}
        {/*  <FormModal /> */}
        {/* Componente que renderiza las tareas */}
        {/* <TaskBox /> */}
      </div>
    </div>
  )
}

export default App
