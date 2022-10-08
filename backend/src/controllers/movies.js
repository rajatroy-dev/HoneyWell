const moviesList = [
    {
        id: "1",
        name: "Fullmetal Alchemist: The Revenge of Scar",
        image: "https://m.media-amazon.com/images/M/MV5BZTAxMzU4NzktYmVhZC00NTc3LTg5ODktNjEyZDg2ZDY3NzQyXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg",
        description: "When a mysterious figure starts to target State Alchemists for their sins against God, Alchemist Edward Elric and his brother Alphonse are at their most vulnerable, meanwhile the homunculi begin to unveil themselves once again.",
        director: "Fumihiko Sori",
        writers: "Hiromu Arakawa(manga) Fumihiko Sori(screenplay) Takeshi Miyamoto(screenplay)",
        stars: "Ryôsuke Yamada Tsubasa Honda Dean Fujioka"
    },
    {
        id: "2",
        name: "Pushpa: The Rise - Part 1",
        image: "https://m.media-amazon.com/images/M/MV5BMmI5OWQ3NGQtMjdlMy00MWVmLThlYWUtODZiMzgzYWI0MTEyXkEyXkFqcGdeQXVyODEyNjEwMDk@._V1_.jpg",
        description: "A labourer rises through ranks of a smuggling syndicate, infuriating some powerful forces in the process.",
        director: "Sukumar",
        writers: "Sukumar(story) Srikanth Vissa(dialogue) Hussain Sha Kiran(additional screenplay)",
        stars: "Allu Arjun Fahadh Faasil Rashmika Mandanna"
    },
    {
        id: "3",
        name: "The Northman",
        image: "https://m.media-amazon.com/images/M/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
        description: "A young Viking prince is on a quest to avenge his father's murder.",
        director: "Robert Eggers",
        writers: "SjónRobert Eggers",
        stars: "Alexander Skarsgård Nicole Kidman Claes Bang"
    }
];

const movies = (req, res, next) => {
    const result = moviesList.map(item => {
        return {
            id: item.id,
            name: item.name,
            image: item.image,
            description: item.description
        }
    });
    return res.status(200).json(result);
}

const movieDetails = (req, res, next) => {
    const id = req.params.id;
    const result = moviesList.filter(item => item.id === id);

    if (result) {
        return res.status(200).json(result[0]);
    }
    return res.status(404).json({ "message": "Movie not found!" });
}

exports.movies = movies;
exports.movieDetails = movieDetails;