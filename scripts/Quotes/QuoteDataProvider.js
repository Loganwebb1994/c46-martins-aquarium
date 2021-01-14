const quoteCollection = [
    {
        text: "If the beaches are Alabama's front porch, then Lake Martin is its living room",
        author: "-Sweet Home Alabama",
        date: "Jun 1, 2018",
    },
    {
        text: "Don't leave fish to find fish",
        author: "-Bill Dance",
        date: "Aug 10, 2005",
    },
    {
        text: "My greatest fear is, after I die, my wife will sell all of my fishing equipment for what I told her I gave for it",
        author: "-Dorf",
        date: "Feb 14, 1994",
    }
]
export const useQuote = () => {
    return quoteCollection.slice()
}    
