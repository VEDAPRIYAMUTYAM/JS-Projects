function calculateMaturityAmount(){
    //Get input values from the form elements
    const principle=parseFloat(document.getElementById('principle').value);
    const intrestRate=parseFloat(document.getElementById('intrestRate').value);
    const tenure=parseFloat(document.getElementById('tenure').value);
    //Perform Calculation
    const maturityAmount=principle+(principle*intrestRate*tenure)/100;
    //Display the Result
    document.getElementById('result').innerText=`Maturity Amount: ${maturityAmount.toFixed(2)}`;

}
//Attach the event listener to calculate Button
document.getElementById('calculateButton').addEventListener('click',calculateMaturityAmount)