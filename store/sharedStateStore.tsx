import { action, makeAutoObservable, observable } from 'mobx';
import { AgendaSchedule, DateData } from 'react-native-calendars';

class SharedStateStore {
    citas: AgendaSchedule = {
        '2023-08-01': [
            {
                name: 'Event 1',
                height: 50,
                day: '2023-08-01',
            },
            {
                name: 'Event 2',
                height: 50,
                day: '2023-08-01',
            },
        ],
        '2023-08-02': [
            {
                name: 'Event 3',
                height: 50,
                day: '2023-08-02',
            },
        ],
    };

    cita: string = '';
    fecha: string = '';

    constructor() {
        makeAutoObservable(this, {
            citas: observable,
            cita: observable,
            fecha: observable,
            setCita: action,
            setFecha: action,
            setDay: action,
            saveCita: action
        });
    }

    setCita(cita: string) {
        this.cita = cita;
    }

    setFecha(fecha: string) {
        this.fecha = fecha;
    }

    setDay(day: DateData) {
        this.fecha = day.dateString;
    }

    clearCita() {
        this.setCita('');
        this.setFecha('');
    }

    saveCita() {
        if (!this.fecha || !this.cita) {
            return;
        }

        if (!this.citas[this.fecha]) {
            this.citas[this.fecha] = [];
        }

        this.citas[this.fecha].push({
            name: this.cita,
            height: 50,
            day: this.fecha,
        });

        this.clearCita();
    }
}

const sharedStateStore = new SharedStateStore();
export default sharedStateStore;
