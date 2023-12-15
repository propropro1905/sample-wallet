var privKey = bsv.PrivateKey.fromRandom();
var pubKey = bsv.PublicKey.fromPrivateKey(privKey);
var address = bsv.Address.fromPrivateKey(privKey);


// var p = document.querySelector("#privText");
// p.innerHTML = privKey.toString();

var y = document.querySelector("#pubText");
y.innerHTML = pubKey.toString();
var z = document.querySelector("#address");
z.innerHTML = address.toString();

var addressCode = 'bitcoinsv:' + address;
console.log(addressCode)
new QRCode(document.getElementById("qr"), addressCode);

// var config = {
//     method: 'get',
//     url: "https://api.whatsonchain.com/v1/bsv/main/exchangerate",
// };

// axios(config)
//     .then((response) => {
//         let data = JSON.stringify(response.data);
//         let p = document.getElementById("er");
//         p.innerHTML = data;
//     })


var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;

});