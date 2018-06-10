import { shallow } from 'enzyme';
import React from 'react';
import { App, Hello } from '../../src/App';

describe('App:', () => {
    it('hello function should output hello world', () => {
        expect(Hello()).toBe('Hello, world!');
    });

    it('App should contain hello world', () => {
        const wrapper = shallow(<App />);

        expect(wrapper.text()).toContain('Hello' && 'world');
    });
});
