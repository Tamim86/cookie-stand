let workhrs = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00']
function randNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const seattleBranch = {
    minCustomer:23,
    maxCustomer:65,
    avgCookies:6.3,
    avgCusthour:[],
    totalSales: 0,
    checkSales:function(){
        //let sales = 1;
        //let total = 0;        
        for(i=0; i<workhrs.length; i++){
            
            let sales = Math.floor(this.avgCookies*randNum(this.minCustomer,this.maxCustomer));
            this.totalSales = this.totalSales + sales;
            this.avgCusthour.push(sales);
            
            //return['At'+workhrs[i+1]+' the number of customers was '+rand+' and the number of burchased cookies '+sales];
        }
        console.log(this.avgCusthour);
        console.log(this.totalSales);
    
        
    },
     
        //this.checkSales(); 

    renderResult:function(){
        for(let x=0; x<workhrs.length;x++){
            let ulel = document.createElement('ul');
            let seattleList = document.getElementById('seattle');
            seattleList.appendChild(ulel);
            ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;

        }
        
        let totalsum = document.createElement('li');
        seattle.appendChild(totalsum);
        totalsum.textContent = ` Total ${this.totalSales} cookies`;

              
     }  

    }
    seattleBranch.checkSales();
    seattleBranch.renderResult();

    
    const tokyoBranch = {
        minCustomer:3,
        maxCustomer:24,
        avgCookies:1.2,
        avgCusthour:[],
        totalSales: 0,
        checkSales:function(){
            //let sales = 1;
            //let total = 0;        
            for(i=0; i<workhrs.length; i++){
                let sales = Math.floor(this.avgCookies*randNum(this.minCustomer,this.maxCustomer));
                
                this.totalSales = this.totalSales + sales;
                this.avgCusthour.push(sales);
                //return['At'+workhrs[i+1]+' the number of customers was '+rand+' and the number of burchased cookies '+sales];
            }
            console.log(this.avgCusthour);
        
            
        }, 
            //this.checkSales(); 
    
        renderResult:function(){
            for(let x=0; x<workhrs.length;x++){
                let ulel = document.createElement('ul');
                let tokyoList = document.getElementById('Tokyo');
                tokyoList.appendChild(ulel);
                ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;
    
            }
            let totalsum = document.createElement('li');
            Tokyo.appendChild(totalsum);
            totalsum.textContent = ` Total ${this.totalSales} cookies`;

            
         

                  
         }  
    
        }
        tokyoBranch.checkSales();
        tokyoBranch.renderResult();    


        const dubaiBranch = {
            minCustomer:11,
            maxCustomer:38,
            avgCookies:3.7,
            avgCusthour:[],
            totalSales: 0,
            checkSales:function(){
                //let sales = 1;
                //let total = 0;        
                for(i=0; i<workhrs.length; i++){
                    let rand = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
                    let sales = Math.floor(this.avgCookies*rand);
                    this.totalSales = this.totalSales + sales;
                    this.avgCusthour.push(sales);
                    //return['At'+workhrs[i+1]+' the number of customers was '+rand+' and the number of burchased cookies '+sales];
                }
                console.log(this.avgCusthour);
            
                
            }, 
                //this.checkSales(); 
        
            renderResult:function(){
                for(let x=0; x<workhrs.length;x++){
                    let ulel = document.createElement('ul');
                    let dubaiList = document.getElementById('dubai');
                    dubaiList.appendChild(ulel);
                    ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;
        
                }
                
                let totalsum = document.createElement('li');
                dubai.appendChild(totalsum);
                totalsum.textContent = ` Total ${this.totalSales} cookies`;
        
             }  
        
            }
            dubaiBranch.checkSales();
            dubaiBranch.renderResult();    
    



            const parisBranch = {
                minCustomer:20,
                maxCustomer:38,
                avgCookies:2.3,
                avgCusthour:[],
                totalSales: 0,
                checkSales:function(){
                    //let sales = 1;
                    //let total = 0;        
                    for(i=0; i<workhrs.length; i++){
                        let rand = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
                        let sales = Math.floor(this.avgCookies*rand);
                        this.totalSales = this.totalSales + sales;
                        this.avgCusthour.push(sales);
                        //return['At'+workhrs[i+1]+' the number of customers was '+rand+' and the number of burchased cookies '+sales];
                    }
                    console.log(this.avgCusthour);
                
                    
                }, 
                    //this.checkSales(); 
            
                renderResult:function(){
                    for(let x=0; x<workhrs.length;x++){
                        let ulel = document.createElement('ul');
                        let parisList = document.getElementById('paris');
                        parisList.appendChild(ulel);
                        ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;
            
                    }
                    
                    let totalsum = document.createElement('li');
                    paris.appendChild(totalsum);
                    totalsum.textContent = ` Total ${this.totalSales} cookies`;
        
                 }  
            
                }
                parisBranch.checkSales();
                parisBranch.renderResult();




                const limaBranch = {
                    minCustomer:20,
                    maxCustomer:38,
                    avgCookies:2.3,
                    avgCusthour:[],
                    totalSales: 0,
                    checkSales:function(){
                        //let sales = 1;
                        //let total = 0;        
                        for(i=0; i<workhrs.length; i++){
                            let rand = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer);
                            let sales = Math.floor(this.avgCookies*rand);
                            this.totalSales = this.totalSales + sales;
                            this.avgCusthour.push(sales);
                            //return['At'+workhrs[i+1]+' the number of customers was '+rand+' and the number of burchased cookies '+sales];
                        }
                        console.log(this.avgCusthour);
                    
                        
                    }, 
                        //this.checkSales(); 
                
                    renderResult:function(){
                        for(let x=0; x<workhrs.length;x++){
                            let ulel = document.createElement('ul');
                            let limaList = document.getElementById('lima');
                            limaList.appendChild(ulel);
                            ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;
                
                        }
                        let totalsum = document.createElement('li');
                        lima.appendChild(totalsum);
                        totalsum.textContent = ` Total ${this.totalSales} cookies`;
            
                              
                     }  
                
                    }
                    limaBranch.checkSales();
                    limaBranch.renderResult();
                                    

