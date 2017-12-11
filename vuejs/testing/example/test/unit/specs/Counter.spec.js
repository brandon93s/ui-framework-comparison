import { shallow } from 'vue-test-utils'
import Counter from '@/components/Counter'

describe('Counter.vue', () => {
  it('should render correct title', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.find('.counter h3').text()).toEqual('Counter')
  })

  it('should render add and remove buttons', () => {
    const wrapper = shallow(Counter)
    const buttons = wrapper.findAll('.counter button')

    expect(buttons.length).toBe(2)
    expect(buttons.at(0).text()).toBe('Add 1')
    expect(buttons.at(1).text()).toBe('Remove 1')
  })

  it('should render current count message', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.find('.counter p').text()).toEqual('The current count is 0.')
  })

  it('should default count to `0`', () => {
    const wrapper = shallow(Counter)
    expect(wrapper.vm.counter).toBe(0)
  })

  it('should increment on `add 1` click', () => {
    const wrapper = shallow(Counter)
    const button = wrapper.find('button.add')

    expect(wrapper.vm.counter).toBe(0)
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(1)
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(2)
  })

  it('should decrement on `remove 1` click', () => {
    const wrapper = shallow(Counter)
    const button = wrapper.find('button.remove')

    expect(wrapper.vm.counter).toBe(0)
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(-1)
    button.trigger('click')
    expect(wrapper.vm.counter).toBe(-2)
  })

  it('should update message on counter change', () => {
    const wrapper = shallow(Counter)

    wrapper.vm.counter = 10
    wrapper.update()

    expect(wrapper.find('.counter p').text()).toEqual('The current count is 10.')
  })
})
