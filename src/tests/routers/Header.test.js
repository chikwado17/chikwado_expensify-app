import React  from 'react';
import { Header } from '../../routers/Header';
import { shallow } from 'enzyme';


test("should render Header Component correctly", () => {
//rendering component with enzyme shallow API
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
})
