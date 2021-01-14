import {useTip} from "/scripts/Tips/TipDataProvider.js"
import {Tip} from "/scripts/Tips/Tip.js"
export const tipList = () => {
    const contentElement = document.querySelector(".containerRight")
    const tips = useTip()
    let tipHTMLRepresentations = ""
    for (const tip of tips) {
     tipHTMLRepresentations+=Tip(tip)   
    }
contentElement.innerHTML += `
<article class="tipList">
    ${tipHTMLRepresentations}
</article>
`
}
