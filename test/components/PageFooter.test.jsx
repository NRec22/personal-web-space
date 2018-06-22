import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Footer from 'react-bulma-components/lib/components/footer';
import PageFooter from '../../src/components/PageFooter';

describe('Footer: ', () => {
  it('contains a bulma footer', () => {
    const wrapper = shallow(<PageFooter />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  })

  it('should render as expected', () => {
    const wrapper = shallow(<PageFooter />);
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})