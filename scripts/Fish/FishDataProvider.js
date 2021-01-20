const fishCollection =[
    {
        image: "Bream.jpg",
        name: "Billy",
        species: "bream",
        location: "Lake Martin, Al",
        length: 10,
        diet: "seafood"

    },
    
    {
        image: "LargeMouthBass.jpg",
        name: "Bobert",
        species: "largemouth bass",
        location: "Lake Laveda, Al",
        length: 18,
        diet: "Billy & Karl"
    },
    {
        image: "Humpback_anglerfish.png",
        name: "Rex",
        species: "Naughty Fish",
        location: "Hell",
        length: 7,
        diet: "Nothing"
    },
    {
        image: "crappie.gif",
        name: "Karl",
        species: "crappie",
        location: "Alabama River",
        length: 6,
        diet: "minnows"
    },
]
export const useFish = () => {
    return fishCollection.slice()
}    

export const mostHolyFish = () => {
    const holyFish = []

    for (const fish of fishCollection){
        if (fish.length % 3 === 0){
            holyFish.push(fish)
        }
    }
return holyFish

}

export const soldierFish = () => {
    const soldiers = []
    for  (const fish of fishCollection){
        if (fish.length % 5 === 0){
            soldiers.push(fish)
        }
    }
return soldiers
}

export const nonHolyFish = () => {
    const regularFish =[]
    for (const fish of fishCollection){
        if(fish.length % 5 !== 0 && fish.length % 3 !== 0){
            regularFish.push(fish)
        }
    }
    return regularFish
}