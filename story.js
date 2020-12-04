import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Story = ({route}) => {
  // const translateX = useSharedValue(0);
  // const translateY = useSharedValue(0);

  // const onGestureEvent = useAnimatedGestureHandler({
  //   onActive: ({translationX, translationY}) => {
  //     translateX.value = translationX;
  //     translateY.value = translationY;
  //   },
  // });

  return (
    <>
      <PanGestureHandler
      // onGestureEvent={onGestureEvent}
      >
        <Animated.View style={{height: '100%'}}>
          <SharedElement
            id={`item.${route.params.id}.photo`}
            style={{flex: 1, height: '100%', width: '100%'}}>
            <Image
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              source={{uri: route.params.download_url}}
            />
          </SharedElement>
          <View
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: 'rgba(0,0,0,0.1)',
              zIndex: 2,
            }}></View>
          <Text
            style={{
              position: 'absolute',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 50,
              bottom: 10,
              left: 10,
              zIndex: 3,
            }}>
            {route.params.author}
          </Text>
        </Animated.View>
      </PanGestureHandler>
    </>
  );
};

export default Story;
