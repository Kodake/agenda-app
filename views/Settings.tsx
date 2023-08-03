import { useEffect, useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { Headline } from "react-native-paper";
import { Props } from "../interfaces/appInterfaces";

const Settings: React.FC<Props> = ({ navigation }) => {
    const [selected, setSelected] = useState('');

    const handleSelectedDate = (date: DateData) => {
        setSelected(date.dateString);

        navigation.navigate('Customer');
    }

    return (
        <>
            <Headline style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontSize: 30
            }}>{'Nueva Cita'}</Headline>

            <Calendar
                style={{
                    marginHorizontal: 10
                }}
                onDayPress={date => {
                    handleSelectedDate(date)
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#254bbe' }
                }}
            />
        </>
    );
}

export default Settings;