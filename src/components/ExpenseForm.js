import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends Component {

        constructor(props){

            super(props);

            this.state = {
                //Checking if props.expense is exiting, if there is an expense already
                //edit it if there is none then show an empty string or empty input
                description: props.expense ? props.expense.description : '',
                note: props.expense ? props.expense.note : '',
                amount: props.expense ? (props.expense.amount / 100).toString() : '',
                createdAt: props.expense ? moment(props.expense.createdAt) :moment(),
                calenderFocused:false,
                error:''
            }
        }
        onDescriptionChange = (e) => {
            const description = e.target.value;

            this.setState(() => ({ description }));
        }

        onAddNote = (e) => {
            const note = e.target.value;

            this.setState(() => ({ note }))
        }
        onAmountChange = (e) => {
            const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){

                this.setState(() => ({ amount }));
            }
        };
        onDateChange = (createdAt) => {
            if(createdAt){
                this.setState(() => ({ createdAt }));
            }
        };
        onFocusChange = ({focused}) => {
            this.setState(() => ({calenderFocused: focused}));
        }
        onSubmit = (e) => {
            //Stopping pagereload
            e.preventDefault();

            if(!this.state.description || !this.state.amount){
                this.setState(() => ({
                    error: 'Please Provide Description and Amount'
                }));
            }else{
                this.setState(() => ({
                    error:''
                }));
               
                //receiving onSubmit props down here from AddExpense
                //
                this.props.onSubmit({
                    description:this.state.description,
                    amount: parseFloat(this.state.amount, 10) * 100,
                    createdAt: this.state.createdAt.valueOf(),
                    note:this.state.note
                });
            }
        }
    render() { 
        return ( 

            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text"
                        placeholder="Description"
                        autoFocus 
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        <br/>
                        
                    <input type="number"
                     placeholder="Amount" 
                     value={this.state.amount}
                     onChange={this.onAmountChange}
                     /><br/>

                    <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />

                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Add a note of your Expense"
                        value={this.state.note}
                        onChange={this.onAddNote}
                        >
                    </textarea><br/>


                    <input type="submit" value="Add Expense"/>
                </form>
            </div>
         );
    }
}
 
export default ExpenseForm;