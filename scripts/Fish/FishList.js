import {Fish} from "/scripts/Fish/Fish.js"
import {mostHolyFish, nonHolyFish, soldierFish} from "/scripts/Fish/FishDataProvider.js"



const buildFishListHTML = (fishArray, heading) => {
    let fishHTMLRepresentation = `<h3>${heading}</h3>`
    for (const fish of fishArray){
        fishHTMLRepresentation += Fish(fish)
    }
return fishHTMLRepresentation
}

export const fishList = () => {
    const contentElement = document.querySelector(".containerLeft")
    const holyFishArray = mostHolyFish()
    const holyFishHTMLRepresentation = buildFishListHTML(holyFishArray, "Holy Fish")
    const soldierFishArray = soldierFish()
    const soldierFishHTMLRepresentation = buildFishListHTML(soldierFishArray, "Soldier Fish")
    const regularFishArray = nonHolyFish()
    const regularFishHTMLRepresentation = buildFishListHTML(regularFishArray, "Naughty Fish")
    contentElement.innerHTML += `
        <article class="containerLeft__fishList contentArticle">
            ${holyFishHTMLRepresentation}
            ${soldierFishHTMLRepresentation}
            ${regularFishHTMLRepresentation}
        </article>
    `
}









// export const fishList = () => {

//     const contentElement = document.querySelector(".containerLeft__fishList")
//     const allTheFish = useFish()
//     let fishHTMLRepresentations = ""
//     for (const fish of allTheFish) {
//     fishHTMLRepresentations+=Fish(fish)
   
// } 
// contentElement.innerHTML += `
// <article class="fishList">
//     ${fishHTMLRepresentations}
// </article>
// `
// }