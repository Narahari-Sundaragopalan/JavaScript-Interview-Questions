/**
 * Implement a function to return product suggestions using products from a product repository 
 * after each character is typed by the customer in the search bar.
 * If there are more than THREE acceptable products, return the product name that is first 
 * in the alphabetical order.
 * Only return product suggestions after the customer has entered two characters.
 * Product suggestions must start with the characters already typed.
 * Both the repository and the customer query should be compared in a CASE-INSENSITIVE way.
 * 
 * Input:
 * The input to the method/function consist of three arguments:
numProducts, an integer representing the number of various products in Amazon's product repository;
repository, a list of unique strings representing the various products in Amazon's product repository;
customerQuery, a string representing the full search query of the customer.

Output:
Return a list of a list of strings, where each list represents the product 
suggestions made by the system as the customer types each character of the customerQuery. 
Assume the customer types characters in order without deleting/removing any characters.

Example:
Input:
numProducts = 5
repository = ["mobile", "mouse", "moneypot", "monitor", "mousepad"]
customerQuery = "mouse"

Output:
[["mobile", "moneypot", "monitor"],
["mouse", "mousepad"],
["mouse", "mousepad"],
["mouse", "mousepad"]]

Explanation:
The chain of words that will generate in the search box will be mo, mou, mous and mouse, and each
line from output shows the suggestions of "mo", "mou", "mous" and "mouse", respectively in each line.
For the suggestions that are generated for "mo", the matches that will be generated are:
["mobile", "mouse", "moneypot", "monitor", "mousepad"]. Alphabetically, they will be reordered to
["mobile", "moneypot", "monitor", "mouse", "mousepad"]. Thus, the suggestions are ["mobile", "moneypot", "monitor"]
 */

const productSuggestions = (numProducts, repository, customerQuery) => {
    if (numProducts === 0 || !repository) {
        return [];
    }

    if (customerQuery === '') {
        return [];
    }

    const output = [];
    let typedQuery = customerQuery.substring(0, 2);
    const productSuggestion = repository.filter(product => product.startsWith(typedQuery));

    if (productSuggestion) {
        output.push(productSuggestion.sort().slice(0, 3));
    }

    for (let i = 2; i < customerQuery.length; i++) {
        typedQuery += customerQuery[i];
        let suggestions = repository.filter(product => product.startsWith(typedQuery));

        if (suggestions) {
            output.push(suggestions.sort().slice(0, 3));
        }
    }

    return output;
}