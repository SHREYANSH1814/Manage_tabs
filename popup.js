
const tablist=document.getElementById('tablist');
const btnsp=document.getElementById('special')

window.addEventListener('DOMContentLoaded', async ()=>{



 let response=[];
  
 response=await chrome.runtime.sendMessage({type:"gettabs"});

    response.forEach((element,ind )=> {

        
        const td =document.createElement('div');
        const tp=document.createElement('span')
        const btn=document.createElement('button');
        btn.innerText="remove";
        tp.innerText=ind+1+">"+element.title;
        console.log(element);
        console.log("-------------");
        
        if(element.active==true){
            td.classList.add("active");
        }
        tp.addEventListener('click',()=>{
            chrome.tabs.update(element.id,{active:true});
            window.close();
        })
        btn.addEventListener('click',()=>{
            chrome.tabs.remove(element.id,()=>{
                window.close();
            })
        })
        td.append(tp);
        td.append(btn);

        tablist.append(td);
                  
    });










})

btnsp.addEventListener('click',async ()=>{


    let response=[];
 response=await chrome.tabs.query({});
 console.log(response);
    console.log(response);
    
    response.forEach((element,ind )=> {

        
      chrome.tabs.remove(element.id,()=>{
        window.close();
      })
                  
    });

})