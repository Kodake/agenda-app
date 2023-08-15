import React, { useState } from 'react'
import { Calendar, DateData } from 'react-native-calendars'
import { Props } from '../interfaces/appInterfaces';

const CalendarPicker: React.FC<Props> = ({ navigation }) => {
    const [selected, setSelected] = useState('');

    const handleSelectedDate = (date: DateData) => {
        setSelected(date.dateString);

        navigation.navigate('Customer');
    }

    return (
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
    )
}

export default CalendarPicker;