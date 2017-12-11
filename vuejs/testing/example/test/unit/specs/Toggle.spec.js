import { shallow } from 'vue-test-utils'
import Toggle from '@/components/Toggle'

describe('Toggle.vue', () => {
  it('should render correct title', () => {
    const wrapper = shallow(Toggle)
    expect(wrapper.find('.toggle h3').text()).toEqual('Toggle')
  })

  it('should render toggle button', () => {
    const wrapper = shallow(Toggle)
    expect(wrapper.find('.toggle button').exists()).toBe(true)
  })

  it('should default show to `false`', () => {
    const wrapper = shallow(Toggle)
    expect(wrapper.vm.show).toBe(false)
  })

  it('should not render message when show is `false`', () => {
    const wrapper = shallow(Toggle)
    expect(wrapper.find('.toggle p.message').exists()).toBe(false)
  })

  it('should render correct message when show is `true`', () => {
    const wrapper = shallow(Toggle)
    wrapper.setData({show: true})

    const p = wrapper.find('.toggle p.message')
    expect(p.exists()).toBe(true)
    expect(p.text()).toEqual('Hello from Toggle.vue!')
  })

  it('should toggle message when button is clicked', () => {
    const wrapper = shallow(Toggle)
    const button = wrapper.find('.toggle button')

    expect(wrapper.find('.toggle p.message').exists()).toBe(false)
    button.trigger('click')
    wrapper.update()
    expect(wrapper.find('.toggle p.message').exists()).toBe(true)
    button.trigger('click')
    wrapper.update()
    expect(wrapper.find('.toggle p.message').exists()).toBe(false)
  })
})
