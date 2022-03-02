import React from 'react';


class Listingmodel {

    constructor(listing_id, url, MainImage, title, currency_code, price, quantity) {
        switch (currency_code) {
            case 'USD':
                price = `$${price}`
                break;

            case 'EUR':
                price = `€${price}`
                break;

            default:
                price = `${price} ${currency_code}`

        }
        this.id = listing_id;
        this.url = url;
        this.imageUrl = MainImage?.url_570xN;
        this.title = title;
        this.currency_code = currency_code;
        this.price = price;
        this.quantity = quantity;
    }
}

export default Listingmodel;
