//Backend
// eslint-disable-next-line import/no-anonymous-default-export 
export default function (req, res) {
    return res.status(200).json({
        users: [
            {
                id: 1,
                name: 'Swamy Portllo',
            },
            {
                id: 2,
                name: 'Nancy Jewell',
            },
        ]
    })               
}

