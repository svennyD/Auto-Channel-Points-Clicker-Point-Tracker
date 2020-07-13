function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    console.log('Auto Channel Points Clicker & Point Tracker: Waiting for page to load... then grabbing...');
    await sleep(5000);
    interval_Grabber = setInterval(function() {
        console.log("hello");
        function clickTwitchButton() {
            document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
        }
        try {
            clickTwitchButton();
        } catch(err) {}
    }, 1000);
}    
main();
