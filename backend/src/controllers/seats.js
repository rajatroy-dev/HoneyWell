const seatsList = [
    {
        id: "1",
        seats: {
            "silver": {
                "A": [1, 0, 0, 0],
                "B": [0, 1, 0, 0],
                "C": [0, 0, 1, 0]
            },
            "premium": {
                "D": [0, 0, 0, 0],
                "E": [0, 0, 0, 0],
                "F": [0, 0, 0, 0]
            },
            "executive": {
                "G": [0, 0, 0, 0],
                "H": [0, 0, 0, 0],
                "I": [0, 0, 0, 0]
            }
        },
        price: {
            "silver": 200,
            "premium": 300,
            "executive": 400
        }
    },
    {
        id: "2",
        seats: {
            "silver": {
                "A": [0, 0, 0, 0],
                "B": [0, 0, 0, 0],
                "C": [0, 0, 0, 0]
            },
            "premium": {
                "D": [0, 0, 0, 0],
                "E": [0, 0, 0, 0],
                "F": [0, 0, 0, 0]
            },
            "executive": {
                "G": [0, 0, 0, 0],
                "H": [0, 0, 0, 0],
                "I": [0, 0, 0, 0]
            }
        },
        price: {
            "silver": 200,
            "premium": 300,
            "executive": 400
        }
    },
    {
        id: "3",
        seats: {
            "silver": {
                "A": [0, 0, 0, 0],
                "B": [0, 0, 0, 0],
                "C": [0, 0, 0, 0]
            },
            "premium": {
                "D": [0, 0, 0, 0],
                "E": [0, 0, 0, 0],
                "F": [0, 0, 0, 0]
            },
            "executive": {
                "G": [0, 0, 0, 0],
                "H": [0, 0, 0, 0],
                "I": [0, 0, 0, 0]
            }
        },
        price: {
            "silver": 200,
            "premium": 300,
            "executive": 400
        }
    },
];

const seatStatus = (req, res, next) => {
    const id = req.params.id;

    const result = seatsList.filter(item => item.id === id);

    if (result) {
        return res.status(200).json(result[0]);
    }
    return res.status(404).json({ "message": "Movie not found!" });
}

exports.seatStatus = seatStatus;