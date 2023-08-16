import React from 'react';
import { Alert, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry } from 'react-native-calendars';
import { AGENDA_STRINGS } from '../messages/appMessages';
import { styles } from '../styles/appStyles';
import store from '../store/sharedStateStore';

const renderEmptyData = () => {
  return (
    <View style={styles.containerDate}>
      <Text style={styles.xlText}>{AGENDA_STRINGS.noAppointmentToday}</Text>
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
  return (
    <SafeAreaView style={styles.view}>
      <Agenda
        items={store.citas}
        renderItem={renderItem}
        renderEmptyData={renderEmptyData}
      />
    </SafeAreaView>
  )
}

export default AgendaList;