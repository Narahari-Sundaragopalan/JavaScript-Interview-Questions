const topNCompetitors = (numCompetitors, topN, competitors, numReviews, reviews) => {
    const map = {};

    for (let competitor of competitors) {
        let competitorReview = reviews.filter(
            review => review.toLowerCase()
                        .includes(competitor)
                        );
        map[competitor] = competitorReview.length || 0;
    }

    const sortedComp = Object.keys(map).sort((a, b) => map[b] - map[a]);

    return sortedComp.slice(0, topN);
}

/**
 * const reviews = ['newshop is providing good services in the city', 
 * 'best services by newshop', 'fashionbeats has great services in the city', 
 * 'I am proud to have fashionbeats', 'mymarket has awesome services', 
 * 'thanks NewShop for great delivery']

 const competitors = ['newshop', 'shopnow', 'afashion', 'fashionbeats', 'mymarket', 'tcellular'];

console.log(topNCompetitors(6, 2, competitors, 6, reviews));
 */