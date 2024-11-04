(async () => {
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
    alert("PokiBlockLite installed")
    })()`
    document.getElementById("blockLite").href = pokiBlockLiteSrc
    document.getElementById("blockLite").classList.remove("disabled")
})()