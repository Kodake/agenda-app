import React from 'react'
import { Calendar } from 'react-native-calendars'
import { Props } from '../interfaces/appInterfaces';
import store from '../store/sharedStateStore';
import { SafeAreaView, TextInput } from 'react-native';
import { AGENDA_STRINGS } from '../messages/appMessages';
import { styles } from '../styles/appStyles';
import { Button } from 'react-native-paper';

const CalendarPicker: React.FC<Props> = ({ navigation }) => {
    const handleSaveCita = () => {
        store.saveCita();
        navigation.navigate('Home');
    }

    return (
        <>
            <SafeAreaView style={styles.view}>
                <Calendar
                    onDayPress={date => {
                        store.setFecha(date.dateString)
                    }}
                    markedDates={{  
                        [store.fecha]: { selected: true, disableTouchEvent: false }
                    }}
                />

                <TextInput
                    placeholder={AGENDA_STRINGS.appointmentName}
                    onChangeText={(texto) => store.setCita(texto)}
                    style={styles.input}
                />
                <Button
                    buttonColor='#254bbe'
                    style={styles.button}
                    mode="contained"
                    onPress={handleSaveCita}
                >
                    {AGENDA_STRINGS.addAppointment}
                </Button>
            </SafeAreaView>
        </>
    )
}

export default CalendarPicker;