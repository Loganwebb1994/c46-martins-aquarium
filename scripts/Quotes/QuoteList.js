import {useQuote} from "/scripts/Quotes/QuoteDataProvider.js"
import {Quote} from "/scripts/Quotes/Quote.js"
export const quoteList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".containerLeft__travelQuotes")
    const quotes = useQuote()
    let quoteHTMLRepresentations = ""
    for (const quote of quotes) {
    // Add to the existing HTML in the content element
    quoteHTMLRepresentations+=Quote(quote)
   
} 
contentElement.innerHTML += `
<article class="quoteList">
    ${quoteHTMLRepresentations}
</article>
`
}