import 'react-native-gesture-handler';
import * as React from 'react';
import MainNavigation from './navigation/MainNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <MainNavigation />
    </PaperProvider>
  );
}

export default App;