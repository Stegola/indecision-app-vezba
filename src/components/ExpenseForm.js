import React from 'react';
// install: npm install moment --save, npm install --save react-dates moment, npm install react-addons-shallow-compare --save
import 'react-dates/initialize'; // add this for Moment.js !
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


// const date = new Date();
const now = moment();
console.log(now.format('MMM Do YYYY'));

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };
    onDateChange = (createdAt) => {
        if (createdAt) { // zabranjeno manuelno brisanje/pisanje datuma kroz input polje
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Set error state euqal to 'Please provide description and amount.'
            const error = 'Please provide description and amount.';
            this.setState(() => ({ error }));
        } else {
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    // Bubbling
    /* onClickDiv1 = (e) => {
        alert("div1");
    };
    onClickDiv2 = (e) => {
        alert("div2");
    };
    onClickDiv3 = (e) => {
        alert("div3");
        e.stopPropagation();
    }; */
    render() {
        return (
            <div>
                {/* <div onClick={ this.onClickDiv1 } id="div1" style={{ border: "5px solid black", padding: "20px", width: "120px" }}>
                    <div onClick={this.onClickDiv2} id="div2" style={{ border: "5px solid black", padding: "20px", width: "70px" }}>
                        <div onClick={this.onClickDiv3}id="div3" style={{ border: "5px solid black", padding: "20px", width: "20px" }}></div>
                    </div>
                </div> */}

                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        style={{ float: 'left', clear: 'both' }}
                    />
                    <input 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        type="text"
                        placeholder="Amount"
                        style={{ float: 'left', clear: 'both' }}
                    />
                    <div style={{ clear: 'both', marginLeft: '300px' }}>
                        <SingleDatePicker
                            date={this.state.createdAt}
                            onDateChange={this.onDateChange}
                            focused={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false} // you can put day as argument for available days
                        />
                    </div>
                    <textarea 
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        placeholder="Add a note for your expense (optional)"
                        cols="30" 
                        rows="10"
                        style={{ float: 'left', clear: 'both' }}
                    ></textarea>
                    <button style={{ float: 'left', clear: 'both' }}>{this.props.submitBtn}</button>
                </form>
            </div>
        )
    }
}