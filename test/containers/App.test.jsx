import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../src/containers/App';
import Header from '../../src/components/Header';
import Banner from '../../src/components/Banner';

describe('App:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  it('should contain a header', () => {
    // const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  })

  it('should contain a banner', () => {
    expect(wrapper.find(Banner)).toHaveLength(1);
  })

  it('should render as expected', () => {
    // const wrapper = shallow(<App />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})
