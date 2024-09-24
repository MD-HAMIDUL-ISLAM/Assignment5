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

function getSectionById(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}