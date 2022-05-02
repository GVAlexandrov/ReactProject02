const validate = {
    merchant(merchant) {
        console.log(merchant);
        if (merchant.length === 0) return 'Merchant is required!';

        return;
    },

    price(price) {
        if (price.length === 0) return 'Price is required!';
        if (price <= 0) return 'Price should be greater than 0!';

        return;
    },
}

export default validate;