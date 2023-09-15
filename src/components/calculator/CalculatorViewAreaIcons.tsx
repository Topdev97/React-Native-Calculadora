import React, { ReactNode } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, } from 'react-native'
import { styles } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

interface CalculatorViewAreaIconsProps {
  setRemove: () => void
}

const CalculatorViewAreaIcons: React.FC<CalculatorViewAreaIconsProps> = ({setRemove}) => {
  return (
    <>
      <FontAwesomeIcon color='#adb5bd' size={20} icon={faClock} />
      <TouchableOpacity onPress={() => {setRemove()}}>
        <FontAwesomeIcon color='#adb5bd' size={20} icon={faDeleteLeft} />
      </TouchableOpacity>
    </>
  )
}

export default CalculatorViewAreaIcons;