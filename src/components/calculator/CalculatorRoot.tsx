import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { styles } from './styles'

interface CalculatorRootProps {
  children: ReactNode
}

const CalculatorRoot: React.FC<CalculatorRootProps> = ({children}) => {
  return (
    <View style={styles.Main}>
      {children}
    </View>
  )
}

export default CalculatorRoot;