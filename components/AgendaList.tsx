import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule } from 'react-native-calendars';
import { Button } from 'react-native-paper';

const mockData: AgendaSchedule = {
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

const renderEmptyDate = (date: string) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No events today</Text>
    </View>
  );
};

const renderEmptyData = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 25 }}>No hay citas para hoy</Text>
    </View>
  );
};

const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
  const fontSize = isFirst ? 20 : 15;
  const color = isFirst ? 'black' : '#43515c';

  return (
    <TouchableOpacity
      testID={'item'}
      style={[styles.item, { height: reservation.height }]}
      onPress={() => Alert.alert(reservation.name)}
    >
      <Text style={{ fontSize, color }}>{reservation.name}</Text>
    </TouchableOpacity>
  );
};

const AgendaList = () => {
  const [eventName, setEventName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleAddEvent = () => {
    console.warn(selectedDate);
    console.warn(eventName);

    if (!selectedDate || !eventName) {
      return;
    }

    if (!mockData[selectedDate]) {
      mockData[selectedDate] = [];
    }

    mockData[selectedDate].push({
      name: eventName,
      height: 50,
      day: selectedDate,
    });

    setEventName('');
    setSelectedDate('');
  };

  const handleDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    console.warn(day.dateString)
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={mockData}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        renderEmptyData={renderEmptyData}
        showClosingKnob={true}
        onDayPress={handleDayPress}
      />

      <TextInput
        placeholder="Nombre de la cita"
        value={eventName}
        onChangeText={setEventName}
        style={styles.input}
      />
      <Button
        buttonColor='#254bbe'
        style={styles.button}
        mode="contained"
        onPress={handleAddEvent}
      >
        {'Agregar Cita'}
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  },
  customDay: {
    margin: 10,
    fontSize: 24,
    color: 'green'
  },
  dayItem: {
    marginLeft: 34
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginBottom: 10,
  }
});

export default AgendaList;