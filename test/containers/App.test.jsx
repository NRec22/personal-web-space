import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import { Switch } from 'react-router-dom';
import App from '../../src/containers/App';
import Banner from '../../src/components/Banner';
import PageFooter from '../../src/components/PageFooter';

describe('App:', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should contain a banner', () => {
    expect(wrapper.find(Banner)).toHaveLength(1);
  });

  it('should contain a footer', () => {
    expect(wrapper.find(PageFooter)).toHaveLength(1);
  });

  it('should contain a switch for routes', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('should render as expected', () => {
    // const wrapper = shallow(<App />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
