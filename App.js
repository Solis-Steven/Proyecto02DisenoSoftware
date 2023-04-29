import { StatusBar } from 'expo-status-bar';
import StackNavigator from './navigations/StackNavigator';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="light" />
    </>
  );
}