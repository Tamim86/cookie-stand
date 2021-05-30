let workhrs = ['06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00', 'Total']

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
            let seattleList = document.getElementById('seattle');
            seattleList.appendChild(ulel);
            ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;

        }
        
              
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
                let tokyoList = document.getElementById('Tokyo');
                tokyoList.appendChild(ulel);
                ulel.textContent = `${workhrs[x]}: ${this.avgCusthour[x]} cookies`;
    
            }
            
                  
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
                        
                              
                     }  
                
                    }
                    limaBranch.checkSales();
                    limaBranch.renderResult();
                                    

