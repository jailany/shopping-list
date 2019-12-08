import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { wrap } from 'module';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const appSetup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

const findItemByTestAttr = (wrapper, name) => {
  return wrapper.find(`[data-test='${name}']`);
}

test('app renders without error', () => {
  const wrapper = appSetup();
  const appComponent = findItemByTestAttr(wrapper, 'app');
  expect(appComponent.length).toBe(1);
});

test('text field renders without error', () => {
  const wrapper = appSetup();
  const textBox = findItemByTestAttr(wrapper, 'text-box');
  expect(textBox.length).toBe(1);
});

test('add button renders without error', () => {
  const wrapper = appSetup();
  const addButton = findItemByTestAttr(wrapper, 'add-button');
  expect(addButton.length).toBe(1);
});

test('no items are rendered on load', () => {
  const wrapper = appSetup();
  const list = wrapper.state('list');
  expect(list.length).toBe(0);
})

test('clicking on add button adds', () => {
  const wrapper = appSetup();
  const textBox = findItemByTestAttr(wrapper, 'text-box');
  const addButton = findItemByTestAttr(wrapper, 'add-button');

  textBox.simulate('focus');
  textBox.simulate('change', { target : { value : "todo text" } });
  addButton.simulate('click');


  const listItem = findItemByTestAttr(wrapper, 'todo-item');
  expect(listItem.text()).toContain('todo text');
})