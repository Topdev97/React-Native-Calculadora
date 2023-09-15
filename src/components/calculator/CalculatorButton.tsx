import React, { ReactNode, useEffect } from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import { styles } from './styles'

interface CalculatorButtonProps {
  digit: string
  setDigit: (number: string) => void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({digit, setDigit}) => {
  return (
    <TouchableOpacity 
      style={styles.Button}
      onPress={() => {setDigit(digit)}}
    >
      <Text style={styles.ButtonText}>{digit}</Text>
    </TouchableOpacity>
  )
}

export default CalculatorButton;