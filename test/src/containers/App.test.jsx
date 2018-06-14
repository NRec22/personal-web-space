import { shallow } from 'enzyme';
import React from 'react';
import toJson from 'enzyme-to-json';
import App from '../../../src/containers/App';

describe('App:', () => {
    it('should contain my name', () => {
        const wrapper = shallow(<App />);
        const myName = 'Neven Recchia';

        expect(wrapper.text()).toContain(myName);
    });

    it('should have nav option text', () => {
        const wrapper = shallow(<App />);
        const navText = ['Home', 'About Me', 'Contact', 'LinkedIn', 'Github'];

        navText.forEach((text) => {
            expect(wrapper.text()).toContain(text);
        })
    });

    it('should render as expected', () => {
        const wrapper = shallow(<App />);
        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();
    })
});
