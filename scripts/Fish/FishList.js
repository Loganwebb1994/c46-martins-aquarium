import {useFish} from "/scripts/Fish/FishDataProvider.js"
import {Fish} from "/scripts/Fish/Fish.js"
export const fishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__fishList")
    const allTheFish = useFish()
    let fishHTMLRepresentations = ""
    for (const fish of allTheFish) {
    // Add to the existing HTML in the content element
    fishHTMLRepresentations+=Fish(fish)
   
} 
contentElement.innerHTML += `
<article class="fishList">
    ${fishHTMLRepresentations}
</article>
`
}