function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity > 100 && ticketQuantity <= 200) {

        moreThan100 = ticketQuantity - 100;
        // first100tickets=ticketQuantity-m
        const price = 100 * first100Rate + moreThan100 * second100Rate;
        return price;
    }
    else if (ticketQuantity > 200) {
        const price = ticketQuantity * restTicketRate;
        return price;
    }
}

console.log(ticketPrice(210));