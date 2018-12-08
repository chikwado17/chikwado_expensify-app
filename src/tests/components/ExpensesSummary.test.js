import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';


test("should correctly render expenses with 1 expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={232} />);
    expect(wrapper).toMatchSnapshot();
});


test("should correctly render expenses with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});

