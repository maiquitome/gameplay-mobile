import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  showCheckBox?: boolean;
  isChecked?: boolean;
}

export function Category({
  title,
  icon: CategoryIcon,
  isChecked = false,
  showCheckBox = false,
  ...rest
}: Props) {
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={[styles.container, { opacity: isChecked ? 1 : 0.5 }]}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          style={styles.content}
          colors={[secondary85, secondary40]}
        >
          {
            showCheckBox &&
            <View style={isChecked ? styles.checked : styles.unchecked} />
          }

          <CategoryIcon width={48} height={48} />

          <Text style={styles.title}>
            {title}
          </Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton >
  );
}
