import React from 'react';

export default class App extends React.Component {
  // initialize the state of the app
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: 15,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

 // Function to update state values when an input changes, using event binding
  handleInputChange(event) {
    this.setState({
      [event.target.name]: parseFloat(event.target.value),
    });
  }

  calculate() {
    const { balance, rate, term } = this.state;
    console.log(balance, rate, term);
    console.log('Hello Word');
    // if (balance === 0 || rate === 0) {
    //   document.getElementById('output').innerText = 'Please enter a valid balance and rate.';
    // } else {
    //   const principal = balance;
    //   const monthlyInterestRate = (rate / 100) / 12;
    //   const totalNumberOfMonths = term * 12;
    //   const numerator = monthlyInterestRate * ((1 + monthlyInterestRate) ** totalNumberOfMonths);
    //   const denominator = ((1 + monthlyInterestRate) ** totalNumberOfMonths) - 1;
    // }
    // const monthlyPayment = principal * (numerator / denominator);
    // return monthlyPayment;
  }

  // handleClick(e) {
  //   e.preventDefault;
  //   const result = this.calculate();
  //   this.setState ({
  //     output: `${result.toFixed(2)} is your payment.`
  //   })
  // }

  render() {
    return (
      <div className='container'>
        <h3>Mortgage Calculator</h3>
        <label htmlFor='mortgage-balance'>
            Mortgage Balance:
          <input name='balance' type='number' id='mortgage-balance' placeholder='Mortgage Loan Balance (US Dollars)' value={ this.state.balance } onChange={ this.handleInputChange } />
        </label>
        <br />
        <label htmlFor='APR'>
            APR:
          <input name='rate' type='number' step='0.01' placeholder='Annual Percentage Rate of Charge (APR)' value={ this.state.rate } onChange={ this.handleInputChange } />
        </label>
        <br />
        <label htmlFor='loan-term'>Choose a loan term:</label>
        <select name='term' id='loan-term' onChange={ this.handleInputChange }>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <br />
        <button name='submit' type='submit' onClick={ () => this.calculate }>Submit</button>
        <div name='output' id='output' />
      </div>
    );
  }
}
