/**
 * @format
 */

import React from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';

import { Header } from './src/components/common/Header';
import CarouselList from './src/components/CarouselList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Carousels'} />
    <CarouselList />
  </View>
);

AppRegistry.registerComponent(appName, () => App);
