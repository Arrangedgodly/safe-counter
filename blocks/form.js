var formCoin = document.forms.coinForm;
var coinData = new FormData(formCoin);
var formBill = document.forms.billForm;
var formBillOverage = document.forms.billOverageForm;

function changeText() {
  console.log(coinData.get(pennySingle));
}

