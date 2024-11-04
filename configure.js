document.getElementById("blockDelay").addEventListener("change", function (event) {
    const blockDelay = document.getElementById("blockDelay").value * 1000
    const rewardsAllowed = document.getElementById("rewardAllowed").checked
    let pokiBlockAdvSrc = `javascript:(() => {PokiSDK.commercialBreak = async function() {await new Promise((resolve) => setTimeout(resolve, ${blockDelay}));return {type: "pokiAdsCompleted", rewardsAllowed: ${rewardsAllowed}}};PokiSDK.rewardedBreak = async function() {await new Promise((resolve) => setTimeout(resolve, ${blockDelay}));return {type: "pokiAdsCompleted", rewardsAllowed: ${rewardsAllowed}}}})()`
    document.getElementById("save").href = pokiBlockAdvSrc
    document.getElementById("save").classList.remove("disabled")
});

document.getElementById("rewardAllowed").addEventListener("change", function (event) {
    const blockDelay = document.getElementById("blockDelay").value * 1000
    const rewardsAllowed = document.getElementById("rewardAllowed").checked
    let pokiBlockAdvSrc = `javascript:(() => {PokiSDK.commercialBreak = async function() {await new Promise((resolve) => setTimeout(resolve, ${blockDelay}));return {type: "pokiAdsCompleted", rewardsAllowed: ${rewardsAllowed}}};PokiSDK.rewardedBreak = async function() {await new Promise((resolve) => setTimeout(resolve, ${blockDelay}));return {type: "pokiAdsCompleted", rewardsAllowed: ${rewardsAllowed}}}})()`
    document.getElementById("save").href = pokiBlockAdvSrc
    document.getElementById("save").classList.remove("disabled")
});