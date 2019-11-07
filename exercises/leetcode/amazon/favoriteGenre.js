/**
 * Favorite Genres
 * Given a map Map<String, List<String>> userMap, 
 * where the key is a username and the value is a list of user's songs. 
 * Also given a map Map<String, List<String>> genreMap, where the key is a genre and 
 * the value is a list of songs belonging to this genre. 
 * 
 * The task is to return a map Map<String, List<String>>, 
 * where the key is a username and the value is a list of the user's favorite genres. 
 * Favorite genre is a genre with the most song.
 * 
 * Example :
 * Input: 
 * userMap = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
genreMap = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output:
{  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}

Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.
*/

// find an intersection between user's songs and each genre 
// if intersection array has a length, check the length > current favorite ? 
// if true, store this and remove the old genre 
// if false, do nothing
// if equal push

const favoriteGenre = (userMap, genreMap) => {
    const intersection = (arr1, arr2) => {
        const intersectionArray = [];

        arr1.filter(element => {
            if (arr2.includes(element)) {
                intersectionArray.push(element);
            }
        });

        return intersectionArray;
    }

    const favoriteGenreMap = {};

    for (let user in userMap) {
        let favoriteGenreCount = 0;

        for (genre in genreMap) {
            const intersectionArray = intersection(userMap[user], genreMap[genre]);

            if (intersectionArray.length) {
                if (intersectionArray.length > favoriteGenreCount) {
                    favoriteGenreMap[user] = [genre];
                    favoriteGenreCount = intersectionArray.length;
                } else if (intersectionArray.length === favoriteGenreCount) {
                    favoriteGenreMap[user].push(genre);
                }
            }
        }
    }

    return favoriteGenreMap;
}