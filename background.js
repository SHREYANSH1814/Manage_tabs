
chrome.runtime.onMessage.addListener((request,sender,response)=>{
    if(request.type=="gettabs"){
        chrome.tabs.query({},(tabs)=>{
            response(tabs);
        })
    }
    return true;

})