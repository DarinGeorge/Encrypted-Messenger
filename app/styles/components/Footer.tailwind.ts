import {Animated} from 'react-native';
import tw from 'twrnc';
import {footerHeight} from '../../constants/Defaults';

export const styles = {
  container: tw`absolute px-3 bottom-0 left-0 right-0 h-[${footerHeight}px] flex-row justify-between items-center bg-gray-100`,
  username: tw`font-bold text-[22px]`,
};

export const processHeightByScrollY = (scrollY: Animated.Value) => {
  const height = scrollY.interpolate({inputRange: [0, 250], outputRange: [250, 50]});

  return {
    height,
  };
};

export const offsetHeaderTopByValue = (value: number) => {
  return {
    paddingTop: value,
  };
};
