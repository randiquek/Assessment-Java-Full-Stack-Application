export const sortingUtility = (games, criteria) => {
    let sortedArray = [...games];

    if (criteria === "genre") {
        sortedArray.sort((a, b) => a.genre.localeCompare(b.genre));
    } else if (criteria === "title") {
        sortedArray.sort((a, b) => a.title.localeCompare(b.title));
    } else if (criteria === "releaseDate") {
        sortedArray.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    }

    return sortedArray;

};