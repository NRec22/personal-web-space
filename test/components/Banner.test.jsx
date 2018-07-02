import { shallow, render } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Hero from 'react-bulma-components/lib/components/hero';
import Banner from '../../src/components/Banner';
import Header from '../../src/components/Header';

describe('Banner: ', () => {
  it('contains a hero body', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find(Hero)).toHaveLength(1);
  })

  it('should contain a header', () => {
    const wrapper = shallow(<Banner />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('contains my name', () => {
    const wrapper = render(<Banner />);
    expect(wrapper.text()).toContain('Neven Recchia');
  })

  it('should render as expected', () => {
    const wrapper = shallow(<Banner />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})