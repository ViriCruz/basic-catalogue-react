import { shallow } from 'enzyme';
import CategoryFilter from '../../components/categoryFilter'
import React from 'react'

describe('Category Filter testing', () => {
  let wrapper;
  let mockOnChangeFn = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<CategoryFilter category="normal" onClick={mockOnChangeFn} />)
  })

  it('calls onClick prop when onChange triggers', () => {
    wrapper.find('select').simulate('change')
    expect(mockOnChangeFn.mock.calls.length).toBe(1)
  })

  it('should render 21 items on select category tag', () => {
    expect(wrapper.find('option')).toHaveLength(21)
  })

  it('should render \'\Select category\'\ in the first option tag', () => {
    expect(wrapper.find('option').at(0).text()).toBe('Select category')
  })
})