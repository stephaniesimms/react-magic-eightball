import React from "react";
import { mount } from "enzyme";
// import toJson from "enzyme-to-json";
import EightBall from "./EightBall";


it("renders without crashing", function () {
  mount(<EightBall />);
});

it("renders initial message", function () {
  let wrapper = mount(<EightBall />);

  expect(wrapper.exists('p')).toEqual(true);

  let p_elem = wrapper.find('p').first().html();

  console.log(p_elem)
  expect(p_elem.equals(<p class="EightBall-msg">Think of a question</p>)).toEqual(true);
});

// it("renders correct message", function () {
//   let wrapper = mount(<EightBall />);
//   wrapper.setState({ msg: 'Quien sabe' });

//   let p_elem = wrapper.find('p').first();
//   expect(p_elem.equals(<p>Quien sabe</p>)).toEqual(true);
// });

// it("changes default message on click", function () {
//   let wrapper = mount(<EightBall />);

// });

// it("works with random messages", function () {
//   let wrapper = mount(<EightBall />);

// });