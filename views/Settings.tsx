import { useState } from "react";
import { Calendar, DateData } from "react-native-calendars";
import { Headline } from "react-native-paper";
import { Props } from "../interfaces/appInterfaces";
import CalendarPicker from "../components/CalendarPicker";
import AgendaList from "../components/AgendaList";

const Settings: React.FC<Props> = ({ navigation }) => {
    return (
        <>
            <Headline style={{
                textAlign: 'center',
                marginTop: 20,
                marginBottom: 10,
                fontSize: 30
            }}>{'Nueva Cita'}</Headline>

            <CalendarPicker
                navigation={navigation}
            />
        </>
    );
}

export default Settings;