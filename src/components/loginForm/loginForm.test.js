import React from 'react';
import LoginForm from './loginForm';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('test form', () => {
  it('test if it render correctly', () => {
    const tree = renderer
    .create(<LoginForm/>)
    .toJSON();
    
    expect(tree).toMatchSnapshot();
  });


  it('test if callback is executed when user click cancel button', () => {
    const login = jest.fn();
    const onCancel = jest.fn();
    const wrapper = mount(<LoginForm login={login} onCancel={onCancel}></LoginForm>);
    wrapper.find('.btn').get(0).props.onClick();
    expect(login).toHaveBeenCalled();
    wrapper.find('.btn').get(1).props.onClick();
    expect(onCancel).toHaveBeenCalled();
  });
});