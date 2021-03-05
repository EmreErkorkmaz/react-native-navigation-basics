import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type DefaultTextProps = {
  children: React.ReactNode,
  style?: React.Attributes
}

const DefaultText = ({children, style}: DefaultTextProps) => {
  return (
      <Text style={{...styles.text, ...style}}>{children}</Text>
  )
}

export default DefaultText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
})
