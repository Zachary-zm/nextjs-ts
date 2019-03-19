import { shallow } from 'enzyme';
import HomePage from './index';

describe('Homepage', () => {
  it('should render the text `Hello, world!`', () => {
    const component = shallow(<HomePage />);
    expect(component.text()).toEqual('Hello, world!');
  });
});