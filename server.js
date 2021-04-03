const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservation =[];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/reservation', (req, res) => res.json(reservation));

app.post("/api/reservation", (req, res) => {
    const newReservation = req.body;
    toLowercase();
    reservation.push(newReservation.customerID);
    res.json(newReservation);
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));