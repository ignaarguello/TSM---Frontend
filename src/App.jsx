import './App.css'

// Importacion de Componentes externos
import DateComponent from './components/DateComponent/DateComponent'
import FormModal from './components/FormModal/ButtonYModal'
import LinkPage from './components/LinkPage/LinkPage'


function App() {
  //* Componente Principal  de la Aplicacion
  return (
    <div id='Contenedor-App'>
      <DateComponent />
      <LinkPage />
      <FormModal />
    </div>
  )
}

export default App
