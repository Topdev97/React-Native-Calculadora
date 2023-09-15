import React, { ReactNode } from 'react'
import { SafeAreaView, View, Text, TextInput } from 'react-native'
import { styles } from './styles'

interface CalculatorViewAreaProps {
  children: ReactNode
  preview?: string
  result?: string
}

const CalculatorViewArea: React.FC<CalculatorViewAreaProps> = ({children, preview, result }) => {
  return (
    <SafeAreaView style={styles.ResultArea}>
      <View style={styles.ViewArea}>
        <TextInput 
          style={styles.ViewAreaText} 
          value={preview}
        />
        <Text style={styles.ViewAreaText}>{result}</Text>
      </View>
      <View style={styles.ViewAreaButtons}>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default CalculatorViewArea;