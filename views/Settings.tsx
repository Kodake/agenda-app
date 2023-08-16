import { Headline } from "react-native-paper";
import { Props } from "../interfaces/appInterfaces";
import CalendarPicker from "../components/CalendarPicker";
import { observer } from "mobx-react";

const Settings: React.FC<Props> = observer(({ navigation }) => {
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
});

export default Settings;