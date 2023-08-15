import React from 'react';
import { Text, View } from 'react-native';
import { Agenda, AgendaSchedule } from 'react-native-calendars';

const mockData: AgendaSchedule = {
  '2023-08-01': [
    {
      name: 'Event 1',
      height: 25,
      day: '2023-08-01',
    },
    {
      name: 'Event 2',
      height: 25,
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
      <Text>No events today</Text>
    </View>
  );
};

const AgendaList = () => {
  return (
    <Agenda items={mockData} renderEmptyDate={renderEmptyDate} renderEmptyData={renderEmptyData}/>
  )
}

export default AgendaList;