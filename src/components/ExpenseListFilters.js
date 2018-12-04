import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';
import { sortByAmount } from '../actions/filters';
import { sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';




class ExpenseListFilters extends React.Component {

    state = {

        calenderFocused: null
    }


    onDatesChange = ({ startDate , endDate}) => {

        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));

    };

    onFocusChange = ( calenderFocused ) => {
        this.setState(() => ({ calenderFocused: calenderFocused }))
    }
    render() {

        return ( 
            <div>
                {/*/setting the filters text to the input value using props.filters.text*/}
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    //dispaction an action generator
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
    
                {/* sorting by date and amount using sortBy then dispatch sortbyDate and sortByAmount */}
                <select value={this.props.filters.sortBy} onChange={(e) => {
                    
                    if(e.target.value === 'date'){
                       this.props.dispatch(sortByDate());
                    }else if(e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount());
                    }
                    
                    }}>
    
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                    
                    <DateRangePicker
                        startDate={this.props.filters.startDate}
                        endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates={true}
                        isOutsideRange={ () => false}
                        numberOfMonths={1}
                     />
            </div>
         );
    }
}




//HOC
const mapStateToProps = (state) => {
    return {
        filters:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilters);