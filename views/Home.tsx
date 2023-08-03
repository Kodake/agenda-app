import { useState } from "react";
import { Calendar } from "react-native-calendars";

type MarkedDates = Record<string, { selected?: boolean; marked?: boolean; selectedColor?: string }>;

const Home = () => {
    const [markedDates, setMarkedDates] = useState<MarkedDates>({
        '2023-05-16': { selected: true, marked: true, selectedColor: 'blue' },
        '2023-05-17': { marked: true },
        '2023-05-19': { selected: true },
    });

    const handleDayPress = (date: { dateString: string }) => {
        const dateString = date.dateString;

        // Check if the date is already marked, if yes, then unmark it
        if (markedDates[dateString] && markedDates[dateString].selected) {
            const newMarkedDates: MarkedDates = { ...markedDates };
            delete newMarkedDates[dateString];
            setMarkedDates(newMarkedDates);
        } else {
            // If the date is not marked, then mark it
            setMarkedDates((prevMarkedDates) => ({
                ...prevMarkedDates,
                [dateString]: { selected: true, selectedColor: 'blue' },
            }));
        }
    };

    return (
        <Calendar
            onDayPress={handleDayPress}
            markedDates={markedDates}
        />
    );
}

export default Home;