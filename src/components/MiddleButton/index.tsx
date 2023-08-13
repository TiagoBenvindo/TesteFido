import React from 'react';

import {
  View, Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Background } from '../Background';

import { styles } from './styles';

type Props = RectButtonProps & {
  title: string,
  isFilled?: boolean
}

export function MiddleButton({ title, isFilled, ...rest }: Props) {
  return (
    <RectButton
      style={[isFilled ? styles.containerline : styles.container]}
      {...rest}
    >
      <Text style={[isFilled ? styles.titleLine : styles.title]}>
        {title}
      </Text>
    </RectButton>
  );
}