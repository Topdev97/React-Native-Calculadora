import React, { ReactNode } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { styles } from './styles'

interface CalculatorButtonAreaProps {
  children: ReactNode
}

const CalculatorButtonArea: React.FC<CalculatorButtonAreaProps> = ({children}) => {
  return (
    <View style={styles.ButtonArea}>
      {children}
    </View>
  )
}

export default CalculatorButtonArea;