import {
  Animated,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren, useRef, useState} from 'react';
import DiceOne from '../public/dices/dice_1.png';
import DiceTwo from '../public/dices/dice_2.png';
import DiceThree from '../public/dices/dice_3.png';
import DiceFour from '../public/dices/dice_4.png';
import DiceFive from '../public/dices/dice_5.png';
import DiceSix from '../public/dices/dice_6.png';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
  animatedStyle: any;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl, animatedStyle}: DiceProps): JSX.Element => {
  return (
    <Animated.View style={animatedStyle}>
      <Animated.Image style={styles.diceImage} source={imageUrl} />
    </Animated.View>
  );
};

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const rotateAnimation = useRef(new Animated.Value(0)).current;

  const handleRollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;

    Animated.sequence([
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      switch (randomNum) {
        case 1:
          setDiceImage(DiceOne);
          break;
        case 2:
          setDiceImage(DiceTwo);
          break;
        case 3:
          setDiceImage(DiceThree);
          break;
        case 4:
          setDiceImage(DiceFour);
          break;
        case 5:
          setDiceImage(DiceFive);
          break;
        case 6:
          setDiceImage(DiceSix);
          break;
        default:
          setDiceImage(DiceOne);
          break;
      }
    });

    RNReactNativeHapticFeedback.trigger('impactLight', options);
  };

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyle = {
    transform: [{rotate}],
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} animatedStyle={animatedStyle} />
      <Pressable onPress={handleRollDice}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
