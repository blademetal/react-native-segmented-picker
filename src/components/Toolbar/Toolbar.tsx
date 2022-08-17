import React, { ReactElement } from 'react';
import { View, TouchableOpacity, Text, ViewStyle } from 'react-native';
import styles from './ToolbarStyles';
import { TEST_IDS } from '../../config/constants';

interface Props {
  confirmText: string;
  confirmTextColor: string;
  toolbarBackground: string;
  toolbarBorderColor: string;
  toolbarStyle: ViewStyle;
  onConfirm: () => void;
}

/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default ({
  confirmText,
  confirmTextColor,
  toolbarBackground,
  toolbarBorderColor,
  toolbarStyle,
  onConfirm,
}: Props): ReactElement => (
  <View
    style={[
      styles.toolbarContainer,
      {
        backgroundColor: toolbarBackground,
        borderBottomColor: toolbarBorderColor,
        ...toolbarStyle,
      },
    ]}>
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={onConfirm}
      testID={TEST_IDS.CONFIRM_BUTTON}>
      <View style={styles.toolbarConfirmContainer}>
        <Text style={[styles.toolbarConfirmText, { color: confirmTextColor }]}>
          {confirmText}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
