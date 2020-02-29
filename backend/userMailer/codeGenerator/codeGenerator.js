function coupongenerator() {
    let coupon = "";
    let possible = `abcdefghijklmnopqrstuvwxyz0123456789`;
    for (var i = 0; i < 15; i++) {
        coupon += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return coupon;
}
module.exports = coupongenerator;