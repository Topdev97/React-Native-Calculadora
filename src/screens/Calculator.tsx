import React, { useEffect, useState } from 'react'
import CalculatorIndex from '../components/calculator/index'

const Calculator: React.FC = () => {
  const [sumDigit, setSumDigit] = useState<string>('')
  const [finalResult, setFinalResult] = useState<string>('')

  function sumNumber(digit: string) {
   switch(digit) {
      case 'C' :
        setSumDigit('')
        setFinalResult('')
        break
      case '=':
        handleNumbers(sumDigit)
        break
      case '+':
        handleOperator(digit)
        break
      case '-':
        handleOperator(digit)
        break
      case '*':
        handleOperator(digit)
        break
      case '/':
        handleOperator(digit)
        break
      default:
        setSumDigit(prevState => prevState + digit)
   }
  }

  function handleOperator(digit: string) {
    const lastDigit = sumDigit.charAt(sumDigit.length - 1)
    if (
      lastDigit !== '+' &&
      lastDigit !== '-' &&
      lastDigit !== '*' &&
      lastDigit !== '/' &&
      lastDigit !== ''
    ) {
      setSumDigit(prevState => prevState + digit)
    }
  } 

  function handleNumbers(digits: string) {
    const regex = /[+\-*/]/g
    const operators = digits.match(regex)

    let filteredNumbers: string = digits
    let splitedNumbers: string[]
    let finalresult: number

    if (operators.length > 1) {
      for (let i = 0; i < operators.length; i++) {
        filteredNumbers = filteredNumbers.replace(operators[i], ' ')
        console.log(filteredNumbers)
      }
    } else {
      filteredNumbers = digits.replace(operators[0], ' ')
      splitedNumbers = filteredNumbers.split(' ')
      switch(operators[0]) {
        case '+':
          finalresult = Number(splitedNumbers[0]) + Number(splitedNumbers[1])
          break
        case '-':
          finalresult = Number(splitedNumbers[0]) - Number(splitedNumbers[1])
          break
        case '*':
          finalresult = Number(splitedNumbers[0]) * Number(splitedNumbers[1])
          break
        case '/':
          finalresult = Number(splitedNumbers[0]) / Number(splitedNumbers[1])
          break
      }
      setFinalResult(String(finalresult))
    }
  }

  function removeLast() {
    setSumDigit(sumDigit.slice(0, sumDigit.length - 1))
  }

  return (
    <CalculatorIndex.Root>
      <CalculatorIndex.ViewArea preview={sumDigit} result={finalResult}>
        <CalculatorIndex.ViewAreaIcon setRemove={() => {removeLast()}}/>
      </CalculatorIndex.ViewArea>
      <CalculatorIndex.ButtonArea>
        <CalculatorIndex.Button digit={'C'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={''} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'%'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'/'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'7'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'8'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'9'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'*'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'4'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'5'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'6'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'-'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'1'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'2'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'3'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'+'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'+/-'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'0'} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={','} setDigit={(e) => {sumNumber(e)}}/>
        <CalculatorIndex.Button digit={'='} setDigit={(e) => {sumNumber(e)}}/>
      </CalculatorIndex.ButtonArea>
    </CalculatorIndex.Root>
  )
}

export default Calculator;