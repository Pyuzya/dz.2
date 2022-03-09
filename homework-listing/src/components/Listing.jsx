import React from 'react';
import ListingModel from '../models/ListingModel';
import data from '../etsy.json'
import Item from './Item';

const Listing = () => {
    let array = data.map((item) => new ListingModel(item.listing_id, item.url, item.MainImage, item.title, item.currency_code, item.price, item.quantity))

    if (array.length >= 1) {
        return (
            <div>
                {array.map((item, i) => <Item item={item} key={i} />)}
            </div>
        );
    } else {
        return (
            <div></div>
        )
    };
}

Listing.propTypes = {
    item: PropTypes.instanceOf(ListingModel).isRequired
}

Listing.defaultProps = {
    item: ''
};

export default Listing;
