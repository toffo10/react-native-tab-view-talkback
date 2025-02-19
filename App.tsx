/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions
} from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';


function FirstTab() {
  return <View />;
}

function SecondTab() {
  return <View />;
}

const tabs = [
  {
    title: 'cards',
    page: FirstTab,
    accessibilityLabel: 'cards',
  },
  {
    title: 'accounts',
    page: SecondTab,
    accessibilityLabel: 'accounts',
  },
];

const App = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  
  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
  });

  const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ];  

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
