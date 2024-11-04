(async () => {
    const n = await fetch("https://raw.githubusercontent.com/amaterasusan/notification/refs/heads/master/notification.js")
    const minify = await fetch(`https://www.toptal.com/developers/javascript-minifier/api/raw?input=${await n.text()}`, {method: "POST"})
    console.log(await minify.text())
    const ncss = await fetch("https://raw.githubusercontent.com/amaterasusan/notification/refs/heads/master/notification.css")
    const pokiBlockLiteSrc = `javascript:(async () => {
    PokiSDK.commercialBreak = async function() {
        return {
            type: "pokiAdsCompleted", 
            rewardsAllowed: true
        };
    };
    PokiSDK.rewardedBreak = async function() {
        return {
            type: "pokiAdsCompleted", 
            rewardsAllowed: true
        };
    };
    eval(\`${await n.text()}\`);
    const ncssTag = document.createElement("style")
    ncssTag.innerHTML = await \`${await ncss.text()}\`
    document.head.children[length - 1].after(ncssTag)

const popup = Notification({
  position: 'top-left',
  duration: 4000,
  isHidePrev: false,
  isHideTitle: false,
  maxOpened: 3,
});

popup.info({
  title: 'pokiBlockLite',
  message: 'Block your Poki Ads',
})
    })()`
    document.getElementById("blockLite").href = pokiBlockLiteSrc
    document.getElementById("blockLite").classList.remove("disabled")
})()