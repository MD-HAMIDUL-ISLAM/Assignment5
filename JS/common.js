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

function getButtonBgByID(id){

    document.getElementById('btn-donation').classList.remove('bg-green-400')
    document.getElementById('btn-history').classList.remove('bg-green-400')
    document.getElementById(id).classList.add('bg-green-400')
}