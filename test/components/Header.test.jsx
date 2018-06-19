import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Header from '../../src/components/Header';

describe('Header: ', () => {
    it('contains a navbar', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(Navbar)).toBeDefined;
    })

    it('contains navigation titles', () => {
        const wrapper = shallow(<Header />);
        const navText = ['Home', 'About Me', 'Contact', 'LinkedIn', 'Github'];

        navText.forEach((text) => {
            console.info(wrapper.find(Navbar).text());
            expect(wrapper.text()).toContain(text);
        });
    })

    it('should render as expected', () => {
        const wrapper = shallow(<Header />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    })
})
