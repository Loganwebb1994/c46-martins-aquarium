const locationCollection = [
    {
        landmark:"./images/download.jpeg",
        city:"Tuscaloosa, Al",
        country:"USA",
        waterBody:"Lake Martin",
    },
    {
        landmark:"./images/LakeLaveda.jpg",
        city:"Butler, Al",
        country:"USA",
        waterBody:"Lake Laveda",
    },
    {
        landmark:"./images/AlabamaRiver.jpg",
        city:"Montgomery, Al",
        country:"USA",
        waterBody:"Alabama River",
    },
]
export const useLocation = () => {
    return locationCollection.slice()
}