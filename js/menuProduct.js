import { Card } from './components/cardUpdate.js'

window.addEventListener("DOMContentLoaded", () => {
    const sundae = document.getElementById("sundae-item");
    const eskrim = document.getElementById("eskrim");


    console.log(Card('sundae.jpg', 'Sundae', '16.000', 'Soft and delicious Vanilla ice cream cone'));
    sundae.innerHTML += Card('sundae/sundae.jpg', 'Sundae', '16.000', 'Soft and delicious Vanilla ice cream cone');
    sundae.innerHTML += Card('sundae/Boba-Sundae.jpg', 'Boba Sundae', '16.000', 'Soft and delicious Vanilla ice cream cone');
    sundae.innerHTML += Card('sundae/Berry-Bean-Sundae.jpg', 'Berry Bean Sundae', '16.000', 'Ice Cream combined with soft Red Bean and sweet Strawberry jam');
    sundae.innerHTML += Card('sundae/Chocolate-Lucky-Sundae.jpg', 'Chocolate Lucky Sundae', '16.000', 'Ice Cream with Chocolate Sauce and a surprise Topping underneath');
    sundae.innerHTML += Card('sundae/Mango-Sundae.jpg', 'Mango Sundae', '16.000', 'Vanilla Ice Cream with real Mango Slice Topping');
    sundae.innerHTML += Card('sundae/Mixed-Sundae-Vanilla-Strawberry-Mixue.jpg', 'Mixed Sundae V&S', '16.000', 'A delightful blend of creamy Vanilla and luscious Strawberry Ice Cream');
    sundae.innerHTML += Card('sundae/Oreo-Sundae.jpg', 'Mixed Sundae V&S', '16.000', 'A delightful blend of creamy Vanilla and luscious Strawberry Ice Cream');
});