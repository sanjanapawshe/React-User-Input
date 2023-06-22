import { useState } from 'react';
import Header from './Components/Header/Header';
import ResultsTable from './Components/ResultsTable/ResultsTable';
import UserInput from './Components/UserInput/UserInput';

function App() {
  const [userInput, setUserInput] =useState(null)
  const calculateHandler = (userInput) => {
    setUserInput(userInput)
  }
  if(userInput) {
    const yearlyData = []; 
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <UserInput onCalculate={calculateHandler}></UserInput>
      <ResultsTable></ResultsTable>
    </div>
  );
}

export default App;
