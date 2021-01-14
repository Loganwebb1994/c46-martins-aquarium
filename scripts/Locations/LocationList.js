import {useLocation} from "/scripts/Locations/LocationDataProvider.js"
import {Location} from "/scripts/Locations/Location.js"
export const locationList = () => {
    const contentElement = document.querySelector(".containerLeft__travelLocations")
    const locations = useLocation()
    let locationHTMLRepresentation = ""
    for (const location of locations) {
      locationHTMLRepresentation+=Location(location)  
    }
contentElement.innerHTML += `
<article class="locationList">
    ${locationHTMLRepresentation}
</article>
`
}