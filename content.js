chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(request)
    if( request.message === "new_tickets" ) {
      alert("New tickets were added!");
      console.log("New tickets were added!")
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": "http://google.com"});
    }
  }
);