import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';



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

            <form className="form" onSubmit={this.onSubmit}>
                 {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input type="text"
                        placeholder="Description"
                        className="text-input"
                        autoFocus 
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                        
                        
                    <input type="number"
                     placeholder="Amount" 
                     className="text-input"
                     value={this.state.amount}
                     onChange={this.onAmountChange}
                     />

                    <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />

                    <textarea
                    className="textarea"
                        cols="30"
                        rows="10"
                        placeholder="Add a note of your Expense"
                        value={this.state.note}
                        onChange={this.onAddNote}
                        >
                    </textarea>
                <div>
                    <input type="submit" value="Save Expense" className="button"/>
                </div>
            </form>
           
         );
    }
}
 
export default ExpenseForm;