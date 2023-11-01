const express = require('express');
const app = express();

app.use(express.json());

app.post('/calculateTotal', (req, res) => {
    const { ticketCount, promoCode } = req.body;

    var ticketPrice = 2500;

    if (new Date() < new Date('2023-11-04T00:00:00Z')) {
        ticketPrice = 1800;
    }

    if (promoCode === 'R2KICSC' && ticketCount == 6) {
        ticketPrice = 1500;
    }

    const totalTicketPrice = ticketCount * ticketPrice;

    res.json({ totalTicketPrice });
});

const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server started on port ${port}`) })