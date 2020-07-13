var pts_5s_delay;
var addToPoints;
var difference;
document.onreadystatechange = function () {
    if(document.readyState === "complete") {
        interval_5s = setInterval(function() {
            pts_5s_delay = grab_points();
        }, 4000);
        // Wait a bit for interval_5s to pick up its points value.
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function main() {
            console.log('Auto Channel Points & Point Tracker: Waiting for page to load.');
            await sleep(4000);
            interval_1s = setInterval(function() {
                difference = grab_points() - pts_5s_delay;
                if (difference == 50 || difference == 60 || difference == 70 || difference == 100) {
                    console.log("Auto Channel Points & Point Tracker: points changed by -" + difference + "." + " Adding " + difference + " to your total points grabbed.");
                }
                if (difference == null) {
                    difference == 0;
                }
                switch(difference) {
                    case 50: // tier 0 sub
                        chrome.storage.sync.get(['points'], function(result) {
                            addToPoints = result.points + 50;
                            chrome.storage.sync.set({'points': addToPoints}, function() {});
                        })
                        break;
                    case 60: // tier 1 sub
                        chrome.storage.sync.get(['points'], function(result) {
                            addToPoints = result.points + 60;
                            chrome.storage.sync.set({'points': addToPoints}, function() {});
                        }) 
                        break;
                    case 70: // tier 2 sub
                        chrome.storage.sync.get(['points'], function(result) {
                            addToPoints = result.points + 70;
                            chrome.storage.sync.set({'points': addToPoints}, function() {});
                        }) 
                        break;
                    case 100: // tier 3 sub
                        chrome.storage.sync.get(['points'], function(result) {
                            addToPoints = result.points + 100;
                            chrome.storage.sync.set({'points': addToPoints}, function(){});
                        })
                        break;
                    default: // No points, default.
                        chrome.storage.sync.get(['points'], function(result){addToPoints = result.points});
                };
                if (difference >= 1) {
                    pts_5s_delay = grab_points();
                };
            }, 1000);
        };
        main();
    };
};    

function grab_points() {
    var points_element = document.getElementsByClassName("tw-tooltip tw-tooltip--align-center tw-tooltip--right");
        for (var i = 0; i < points_element.length; i++) {
            var innertext_points = points_element[i].innerText;
            replaced_points = innertext_points.replace(/\D/g,'');
            var points = parseInt(replaced_points);
            return points;
    };
};
