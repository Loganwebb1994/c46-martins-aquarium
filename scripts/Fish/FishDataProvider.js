const fishCollection =[
    {
        image: "Bream.jpg",
        name: "Billy",
        species: "bream",
        location: "Lake Martin, Al",
        length: "10 inches",
        diet: "seafood"

    },
    
    {
        image: "LargeMouthBass.jpg",
        name: "Bobert",
        species: "largemouth bass",
        location: "Lake Laveda, Al",
        length: "16 inches",
        diet: "Billy & Karl"
    },
    {
        image: "crappie.gif",
        name: "Karl",
        species: "crappie",
        location: "Alabama River",
        length: "8 inches",
        diet: "minnows"
    }
]
export const useFish = () => {
    return fishCollection.slice()
}    
