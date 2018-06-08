import { App } from '../src/App';

describe('App:', () => {
    it('should display hello world', () => {
        expect(App()).toBe('<h1>Hello, world!</h1>');
    });
});
