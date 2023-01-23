import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 2 numbers and display a running total', () => {
    const button1 = container.getByTestId('number1')
    const button4 = container.getByTestId('number4')
    const runningTotal = container.getByTestId('running-total')
    const operatorAdd = container.getByTestId('operator-add')
    const operatorEquals = container.getByTestId('operator-equals')
    fireEvent.click(button1)
    fireEvent.click(operatorAdd)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('should be able to subtract 2 numbers and display a running total', () => {
    const button7 = container.getByTestId('number7')
    const button4 = container.getByTestId('number4')
    const runningTotal = container.getByTestId('running-total')
    const operatorSubtract = container.getByTestId('operator-subtract')
    const operatorEquals = container.getByTestId('operator-equals')
    fireEvent.click(button7)
    fireEvent.click(operatorSubtract)
    fireEvent.click(button4)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')

  })

  it('should be able to multiply 2 numbers and display a running total', () => {
    const button3 = container.getByTestId('number3')
    const button5 = container.getByTestId('number5')
    const runningTotal = container.getByTestId('running-total')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const operatorEquals = container.getByTestId('operator-equals')
    fireEvent.click(button3)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button5)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('15')

  })
  it('should be able to divide 2 numbers and display a running total', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    const operatorDivide = container.getByTestId('operator-divide')
    const operatorEquals = container.getByTestId('operator-equals')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(operatorDivide)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('3')

  })

  it('should concatenate multiple numbers on display', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('217')

  })

  it('should concatenate multiple numbers on display', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const operatorAdd = container.getByTestId('operator-add')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const runningTotal = container.getByTestId('running-total')
    const operatorEquals = container.getByTestId('operator-equals')
    fireEvent.click(button2)
    fireEvent.click(operatorAdd)
    fireEvent.click(button1)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('21')

  })

  it('should be able to clear the display w/o affecting the calc', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const button7 = container.getByTestId('number7')
    const operatorAdd = container.getByTestId('operator-add')
    const operatorMultiply = container.getByTestId('operator-multiply')
    const runningTotal = container.getByTestId('running-total')
    const operatorEquals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    fireEvent.click(button2)
    fireEvent.click(operatorAdd)
    fireEvent.click(button1)
    fireEvent.click(clear)
    fireEvent.click(operatorMultiply)
    fireEvent.click(button7)
    fireEvent.click(operatorEquals)
    expect(runningTotal.textContent).toEqual('14')
  })
})
