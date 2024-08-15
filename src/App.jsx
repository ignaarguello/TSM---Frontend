import './App.css'

// Importacion de Componentes externos
import DateComponent from './components/DateComponent/DateComponent'
import FormModal from './components/FormModal/FormModal'
import LinkPage from './components/LinkPage/LinkPage'


function App() {
  //* Componente Principal  de la Aplicacion
  return (
    <div id='Contenedor-App'>
      {/* Componente de la Fecha */}
      <DateComponent />
      {/* Componente con los Links para movernos entre seccion (Home, Auto) */}
      <LinkPage />
      {/* Componente de Boton y Modal */}
      <FormModal />
    </div>
  )
}

export default App
