import React from 'react';
import ListingModel from '../models/ListingModel';
import data from '../etsy.json'
import Item from './Item';

const Listing = () => {
    let array = data.map((item) => new ListingModel(item.listing_id, item.url, item.MainImage, item.title, item.currency_code, item.price, item.quantity))

    return (
        <div>
            {array.map((item, i) => <Item item={item} key={i} />)}
        </div>
    );
}

export default Listing;
