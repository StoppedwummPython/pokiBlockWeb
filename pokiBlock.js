(async () => {
    const n = await fetch("https://raw.githubusercontent.com/amaterasusan/notification/refs/heads/master/notification.js")
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
    eval(\`${await n.text()}\`)
    })()`
    document.getElementById("blockLite").href = pokiBlockLiteSrc
    document.getElementById("blockLite").classList.remove("disabled")
})()