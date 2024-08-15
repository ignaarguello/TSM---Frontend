// Estilos
import '../../styles/DateComponent.css'

// Hooks
import useCurrentDate from '../../hooks/useGetDateToday'

export default function DateComponent() {
    //Datos del Hook Externo
    const { date, loading } = useCurrentDate();

    return (
        <div id='Contenedor-DateComponent-Principal'>
            <span id='Titulo-Today_DCP'>Today</span>
            <div id='ContenedorLoaderYFecha_DCP'>
                {loading ? (
                    <div>Cargando fecha...</div>
                ) : (
                    <div id='Contenedor-DatosFecha_DCP'>
                        <span>{date.dia}</span>
                        <span>{date.dia_numero}</span>
                        <span>-</span>
                        <span>{date.mes}</span>
                        <span>{date.año}</span>
                    </div>
                )}
            </div>
        </div>
    )
}
