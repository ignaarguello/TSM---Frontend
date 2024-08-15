//Hooks Nativos
import { useState, useEffect } from 'react';

function useCurrentDate() {
    //Estado Inicial
    const [date, setDate] = useState({ dia: null, dia_number: null, mes: null, año: null });
    const [loading, setLoading] = useState(true);

    // Fechas
    const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    //UseEffect para cada vez que se monta el componente
    useEffect(() => {
        const fetchData = async () => {
            // Simulamos una carga de 1.5 segundos
            await new Promise(resolve => setTimeout(resolve, 1500));
            const data = new Date();
            setDate({
                dia: daysOfWeek[data.getDay()],
                dia_numero: data.getDate(),
                mes: monthsOfYear[data.getMonth()],
                año: data.getFullYear()
            })

            setLoading(false);
        };
        fetchData();
    }, []);

    return { date, loading };
}

export default useCurrentDate