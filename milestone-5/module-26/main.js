// step-1: get all the documents

const depositElement = document.getElementById('deposit');
const withdrawElement = document.getElementById('withdraw');
const balanceElement = document.getElementById('balance');
const depoInput = document.getElementById('depo-input');
const withInput = document.getElementById('with-input');
const depoButton = document.getElementById('depo-button');
const withButton = document.getElementById('with-button');

let balAmount = Number(balanceElement.innerText);

depoButton.addEventListener('click', function(){
    const newDepoAmount = Number(depoInput.value);
    depoInput.value = '';
    let depoAmount = Number(depositElement.innerText);

    if(!isNaN(newDepoAmount)){
        depoAmount += newDepoAmount;
        balAmount += newDepoAmount;
        depositElement.innerText = depoAmount;
        balanceElement.innerText = balAmount;
    }
    else {
        return;
    }
})

withButton.addEventListener('click', function(){
    const newWithAmount = Number(withInput.value);
    withInput.value = '';
    let withAmount = Number(withdrawElement.innerText);

    if(newWithAmount > balAmount) {
        window.alert('You do not sufficient balance')
    }
    else if(!isNaN(newWithAmount)){
        withAmount += newWithAmount;
        balAmount -= newWithAmount;
        withdrawElement.innerText = withAmount;
        balanceElement.innerText = balAmount;
    }
    else {
        return;
    }
})