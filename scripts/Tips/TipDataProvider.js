const tipCollection = [
    {
        header: "Tank Tip",
        text: "Clean tank weekly",
    },
    {
        header: "Tank Tip",
        text: "Feed fish daily"
    },
    {
        header: "Tank Tip",
        text: "Dont try and pet them"
    }
]
export const useTip = () => {
    return tipCollection.slice()
}