import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };
    render(props) {
        this.handleOnChangeInput = (e) => {
            this.props.dispatch(setTextFilter(e.target.value));
        };
        this.onSelectSort = (e) => {
            if (e.target.value === 'date') {
                this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
                this.props.dispatch(sortByAmount());
            }
        };
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={this.handleOnChangeInput} />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSelectSort}
                >
                    <option value="">Select</option>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate}
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        ); 
    };
};


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters);