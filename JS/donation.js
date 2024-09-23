// Noakhali Section Starts Here
document.getElementById('btn-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    
    const donationAdded = getInputValueById('donate-naokhali-input');
    const initialAmount = getTextValueById('initial-donation-noakhali');
    const myInitialBalance = getTextValueById('my-balance');
    const currentBalance = initialAmount + donationAdded;
    const myCurrentBalance = myInitialBalance - donationAdded;
    document.getElementById('initial-donation-noakhali').innerText = currentBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;
})
// Noakhali Section Ends Here

// Feni Section Starts Here
document.getElementById('btn-feni').addEventListener('click', function(event){
    event.preventDefault();
    
    const donationAddedFeni = getInputValueById('donate-feni-input');
    const initialAmountFeni = getTextValueById('initial-donation-feni');
    const myInitialBalance = getTextValueById('my-balance');
    const currentBalanceFeni = initialAmountFeni + donationAddedFeni;
    const myCurrentBalance = myInitialBalance - donationAddedFeni;
    document.getElementById('initial-donation-feni').innerText = currentBalanceFeni; 
    document.getElementById('my-balance').innerText = myCurrentBalance;
})
// Feni Section Ends Here

// Quota Movement Section Starts Here 
document.getElementById('btn-qm').addEventListener('click', function(event){
    event.preventDefault();
    
    const donationAddedQm = getInputValueById('donate-qm-input');
    const initialAmountQm = getTextValueById('initial-donation-qm');
    const myInitialBalance = getTextValueById('my-balance');
    const currentBalanceQm = initialAmountQm + donationAddedQm;
    const myCurrentBalance = myInitialBalance - donationAddedQm;
    document.getElementById('initial-donation-qm').innerText = currentBalanceQm; 
    document.getElementById('my-balance').innerText = myCurrentBalance;
    console.log('donation balance:', currentBalanceFeni, myCurrentBalance);
})
// Quota Movement Section Starts Here 