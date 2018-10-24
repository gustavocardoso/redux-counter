import React from 'react'
import { shallow } from 'enzyme'

import { Counter } from './Counter'

describe('<Counter />', () => {
  it('should mounts without errors', () => {
    const props = {
      count: 10,
      increment: () => 0,
      decrement: () => 0
    }

    const wrapper = shallow(<Counter {...props} />)

    expect(wrapper.length).toEqual(1)
  })

  it('should calls increment', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }

    const wrapper = shallow(<Counter {...props} />)
    
    expect(props.increment.mock.calls.length).toEqual(0)

    wrapper.find('.increment').simulate('click')

    expect(props.increment.mock.calls.length).toEqual(1)
    expect(wrapper.find('.counter').text()).toEqual('Counter: 10')
  })

  it('should calls decrement', () => {
    const props = {
      count: 10,
      increment: jest.fn(),
      decrement: jest.fn()
    }

    const wrapper = shallow(<Counter {...props} />)

    expect(props.decrement.mock.calls.length).toEqual(0)

    wrapper.find('.decrement').simulate('click')

    expect(props.decrement.mock.calls.length).toEqual(1)
  })
})

