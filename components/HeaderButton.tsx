import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CustomHeaderButton = (props: any) => {
  return (
    <HeaderButton {...props} title='' IconComponent={Ionicons} iconSize={23} color={Platform.OS === "ios" ? Colors.primaryColor : 'white'}/>
  )
}

export default CustomHeaderButton;

const styles = StyleSheet.create({})
