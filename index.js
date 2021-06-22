//for Bitcoin Price 

const para = document.querySelector('.para');
const para1 = document.querySelector('.para1');


//for Ethereum Price

const par = document.querySelector('.par');
const par1 = document.querySelector('.par1');


//for Euro Price
const eur = document.querySelector('.eur')
const eur1 = document.querySelector('.eur1')


//for bnb price
const bin = document.querySelector('.bnb');
const bin1 = document.querySelector('.bnb1');

// for link price
const link = document.querySelector('.lin');
const link1 = document.querySelector('.lin1');


const fetchbitcoinPrice = async ()=>{
    try{
        //for bitcoin
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        const cur = res.data.ticker.price
        para.append('$ '+ cur)
        const dollar = res.data.ticker.price;
        const rupees = (dollar * 74.21).toFixed(2).toString();
         para1.textContent='Rs '+ rupees;


         //for Eth price 
         const res1 = await axios.get('https://api.cryptonator.com/api/ticker/eth-usd')
         const eth = res1.data.ticker.price;
         par.append('$ '+ eth)
         const dollar1 = res1.data.ticker.price;
         const rupees1 = (dollar1 * 74.21).toFixed(2);
         par1.textContent='Rs '+ rupees1;


         //for Euro Price 
         const res2 = await axios.get('https://api.cryptonator.com/api/ticker/ltc-usd')
         const euro = res2.data.ticker.price;
         eur.append('$ '+ euro )
         const euro1 = res2.data.ticker.price;
         const rup = (euro1 * 88.25).toFixed(2);
         eur1.textContent='Rs '+ rup;



         //for binance Price
         const res3 = await axios.get('https://api.cryptonator.com/api/ticker/bnb-usd')
         const ban = res3.data.ticker.price;
         bin.append('$ '+ ban);
         const dollar2 = res3.data.ticker.price;
         const rup1 = (dollar2 * 74.21).toFixed(2)
         bin1.textContent='Rs '+ rup1;


        //  for link price
        const res4 = await axios.get('https://api.cryptonator.com/api/ticker/link-usd')
        const lin = res4.data.ticker.price;
        link.append('$ '+ lin);
        const dollar3 = res3.data.ticker.price;
        const rup2 = (dollar3 * 74.21).toFixed(2)
        link1.textContent='Rs '+ rup2;




    }catch(e){
         para.innerHTML='OPP"S!!!!  Status Not Avialable';
         para1.innerHTML='OPP"S!!!!  Status Not Avialable';
    }
  
}