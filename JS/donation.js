// Noakhali Section Starts Here
document.getElementById('btn-noakhali').addEventListener('click', function (event) {
    event.preventDefault();

    const donationAddedNoakhali = getInputValueById('donate-naokhali-input');
    if (isNaN(donationAddedNoakhali)) {
        alert('Please input a number')
        return
    }
    const initialAmountNoakhali = getTextValueById('initial-donation-noakhali');
    const myInitialBalance = getTextValueById('my-balance');
    if (donationAddedNoakhali > myInitialBalance) {
        alert('You have not enough balance')
        return
    }
    else {
        const currentBalanceNoakhali = initialAmountNoakhali + donationAddedNoakhali;
        const myCurrentBalance = myInitialBalance - donationAddedNoakhali;
        document.getElementById('initial-donation-noakhali').innerText = currentBalanceNoakhali;
        document.getElementById('my-balance').innerText = myCurrentBalance;


        const wrapperDiv = document.createElement('div')
        wrapperDiv.classList.add('border-[.5px]', 'border-solid', 'border-gray-200', 'rounded-2xl', 'p-8', 'mb-6')
        const p = document.createElement('p');
        p.innerText = `${donationAddedNoakhali} taka is donated as flood relief for Noakhali, Bangladesh`;
        p.classList.add('font-bold', 'text-xl', 'mb-4')
        const currentDate = new Date();
        const formattedDate = currentDate.toString();
        const time = document.createElement('p');
        time.innerText = `Date & Time: ${formattedDate}`;
        time.classList.add('font-light', 'text-base', 'italic')
        wrapperDiv.appendChild(p);
        wrapperDiv.appendChild(time);
        document.getElementById('history-container').appendChild(wrapperDiv);

    }


})
// Noakhali Section Ends Here

// Feni Section Starts Here
document.getElementById('btn-feni').addEventListener('click', function (event) {
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
document.getElementById('btn-qm').addEventListener('click', function (event) {
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

// History Section Starts Here.
document.getElementById('btn-donation').addEventListener('click', function () {
    getSectionById('donation-section');
})
document.getElementById('btn-history').addEventListener('click', function () {
    getSectionById('history-section');
})
// History Section Ends Here.