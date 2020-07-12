function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function main() {
    console.log('Channel Points Grabber: Waiting for page to load.');
    await sleep(6000);
    console.log("Channel Points Grabber: Looking for channel points now. PogChamp")
    interval_Grabber = setInterval(function() {
        function clickTwitchButton() {
            document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
        }
        try {
            clickTwitchButton();
        } catch(err) {}
    }, 1000);
}    
main();