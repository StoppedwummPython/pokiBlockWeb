(async () => {
    const n = await fetch("https://raw.githubusercontent.com/amaterasusan/notification/refs/heads/master/notification.js")
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
    })()`
    document.getElementById("blockLite").href = pokiBlockLiteSrc
    document.getElementById("blockLite").classList.remove("disabled")
})()