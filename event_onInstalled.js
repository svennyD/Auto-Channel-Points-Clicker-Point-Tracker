chrome.runtime.onInstalled.addListener(
    function(details) {
        if(details.reason == "install") {
            var pnts_start = 0;
            console.log("Thank you for installing my extension!!! PogChamp");
            chrome.storage.sync.set({'points': pnts_start}, function(){});
            localStorage.setItem('install', 1, function() {})
        }
});