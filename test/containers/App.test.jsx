import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../src/containers/App';
import Header from '../../src/components/Header';

describe('App:', () => {
    it('should contain a header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header)).toBeDefined;
    })

    it('should render as expected', () => {
        const wrapper = shallow(<App />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    })
});
