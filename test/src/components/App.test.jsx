import { shallow } from 'enzyme';
import React from 'react';
import App from '../../../src/components/App';

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
});
