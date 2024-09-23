function getInputValueById(id){
    const donationAmount = document.getElementById(id).value;
    const amountInNumber = parseFloat(donationAmount);
    return amountInNumber;
    
}

function getTextValueById(id){
    const initialDonation = document.getElementById(id).innerText;
    const initialDonationInNumber = parseFloat(initialDonation);
    return initialDonationInNumber;
}