


function cookiesStore(min, max, avg){
    this.minCustomer = min;
    this.maxCustomer = max;
    this.avgCookies = avg;
    this.saleHour = [];
    this.totalSales = 0;
    
    
}

cookiesStore.prototype.checkSales = function(){
    for(let i=0; i<workhrs.length; i++){
        let rand = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
        let sales = Math.floor(this.avgCookies*rand);
        this.totalSales = this.totalSales + sales;
        this.saleHour.push(sales);
    }
    console.log(this.salHour);    
}


 
          
   

 let seattleStore = new cookiesStore('Seattle',23, 65, 6.3);
 
 let tokyoStore = new cookiesStore('Tokyo',3, 24, 1.2);
 let dubaiStore = new cookiesStore(11, 38, 3.7);
 let parisStore = new cookiesStore(20, 38, 2.3);
 let liamStore = new cookiesStore(2, 16, 4.6);

seattleStore.checkSales();
//console.log(seattleStore);
tokyoStore.checkSales();
dubaiStore.checkSales();
parisStore.checkSales();
liamStore.checkSales();






let table1 = document.getElementById('salesdata')    
let salesTable = document.createElement('table');
table1.appendChild(salesTable);

function Rows(){
    let heading = document.createElement('tr');
    table1.appendChild(heading);
    
    for(let i=0; i<workhrs.length;i++){
        let theading = document.createElement('th');
        heading.appendChild(theading);
        theading.textContent=workhrs[i];    
        
    }
}
Rows();

// let branch= ['Seattle', 'Tokyo', 'Dubai', 'Paris','Liam'];
// function resultData(cookie){
//     let dRow = document.createElement('tr');
//     salesTable.appendChild(dRow);
//     for(let x=0; x<workhrs.length;x++){
//         let cookieSale = document.createElement('td');
//         dRow.appendChild(cookieSale);
//         cookieSale.textContent=cookie.avgCusthour[x];
//         }
//     }

// resultData(seattleStore);
// resultData(tokyoStore);
// resultData(dubaiStore);
// resultData(parisStore);
// resultData(liamStore);
function seattleSales(cookiSales){
     let seattRow = document.createElement('tr');
     salesTable.appendChild(seattRow);
     seattRow.textContent= cookiSales.avgCusthour;;
}
seattleSales(seattleStore);

function tokyoSales(cookiSales){
     let tokRow = document.createElement('tr');
     salesTable.appendChild(tokRow);
     tokRow.textContent= cookiSales.avgCusthour;;
}
tokyoSales(tokyoStore);

function dubaiSales(cookiSales){
    let dubRow = document.createElement('tr');
    salesTable.appendChild(dubRow);
    dubRow.textContent= cookiSales.avgCusthour;;
}
dubaiSales(dubaiStore);

function parisSales(cookiSales){
    let parisRow = document.createElement('tr');
    salesTable.appendChild(parisRow);
    parisRow.textContent= cookiSales.avgCusthour;;
}
parisSales(parisStore);


function liamSales(cookiSales){
    let liamRow = document.createElement('tr');
    salesTable.appendChild(liamRow);
    liamRow.textContent= cookiSales.avgCusthour;;
}
parisSales(liamStore);

let storeLocation = ['Seattle', 'Tokyo','Dubai', 'Paris', 'Liam'];


let sum=0;
let totalSaleHour = []; 

function Perhoursales(sales){
for(let i=0;i<storeLocation.length;i++){
    let tableFooter = document.getElementById('Total');
    let totalsum = document.createElement('th');
    tableFooter.appendChild(totalsum);
    for(let s=0;s<workhrs.length;s++){
        sum = sum+ sales.avgCusthour[s];
        
        totalSaleHour.push(sum); 

    }
  }
}
Perhoursales(seattleStore);