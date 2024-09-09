import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import DiceOne from '../public/dices/dice_1.png';
import DiceTwo from '../public/dices/dice_2.png';
import DiceThree from '../public/dices/dice_3.png';
import DiceFour from '../public/dices/dice_4.png';
import DiceFive from '../public/dices/dice_5.png';
import DiceSix from '../public/dices/dice_6.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

const App = (): JSX.Element => {
  return (
    <View>
      <Text>App</Text>
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
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
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
