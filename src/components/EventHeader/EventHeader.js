/* @flow */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import EventTags from '../EventTags';
import LinearGradient from 'react-native-linear-gradient';
import { fontSizes } from '../../styles';

import type { Event } from '../../types';

type Props = {
  event: Event
};

const EventHeader = ({ event }: Props) => (
  <LinearGradient colors={['transparent', 'rgba(0, 0, 0, 0.9)']}>
    <View style={styles.container}>
      <Text style={styles.date}>{event.start}</Text>
      <Text style={styles.title} numberOfLines={3} ellipsizeMode="tail">
        {event.name}
      </Text>
      <EventTags tags={event.tags} />
    </View>
  </LinearGradient>
);

const textShadow = {
  textShadowColor: '#000000',
  textShadowRadius: 4,
  textShadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 7,
    paddingTop: 30,
    backgroundColor: 'transparent'
  },
  title: {
    color: '#FFFFFF',
    fontSize: fontSizes.h2,
    fontWeight: '300',
    ...textShadow
  },
  date: {
    color: '#FFFFFF',
    fontSize: fontSizes.small,
    fontWeight: '300',
    ...textShadow
  }
});

export default EventHeader;
