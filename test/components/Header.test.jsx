import { shallow, render } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Header from '../../src/components/Header';

describe('Header: ', () => {
    it('contains a navbar', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(Navbar)).toHaveLength(1);
    })

    it('contains a burger menu for mobile', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(Navbar.Brand)).toHaveLength(1);
        expect(wrapper.find(Navbar.Burger)).toHaveLength(1);
    })

    it('contains navigation titles', () => {
        const wrapper = render(<Header />);
        const navText = ['Home', 'About Me', 'Contact', 'LinkedIn', 'Github'];

        navText.forEach((text) => {
            expect(wrapper.text()).toContain(text);
        });
    })

    it('should render as expected', () => {
        const wrapper = shallow(<Header />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    })
})