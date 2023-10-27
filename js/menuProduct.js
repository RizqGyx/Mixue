import { Card } from './components/cardUpdate.js'

window.addEventListener("DOMContentLoaded", () => {
    const smoothies = document.getElementById("smoothies-item");
    const eskrim = document.getElementById("eskrim-item");
    const sundae = document.getElementById("sundae-item");
    const coffee = document.getElementById("coffee-item");
    const fruit = document.getElementById("fruit-item");
    const milk = document.getElementById("milk-item");
    const tea = document.getElementById("tea-item");

    smoothies.innerHTML += Card('Smoothies/Chocolate-Cookies-Smoothies-with-Ice-Cream-300x300.jpg', 'Chocolate Cookies Smoothies with Ice Cream', '16.000', 'Chocolate and Oreo combined with Vanilla Ice Cream');
    smoothies.innerHTML += Card('Smoothies/Kiwi-Smoothies-mixue.jpg', 'Kiwi Smoothies', '16.000', 'Kiwi Smoothies, a fusion of kiwi fruit wrapped in smooth ice cream');
    smoothies.innerHTML += Card('Smoothies/Mango-Smoothies-With-Ice-Cream.jpg', 'Mango Smoothies With Ice Cream', '16.000', 'Fresh Mango paired with Vanilla Ice Cream');
    smoothies.innerHTML += Card('Smoothies/Strawberry-Smoothies-With-Ice-Cream.jpg', 'Strawberry Smoothies With Ice Cream', '16.000', 'Fresh Strawberry paired with Vanilla Ice Cream');
    smoothies.innerHTML += Card('Smoothies/Coffee-Smoothies.jpg', 'Coffee Smoothies', '16.000', 'Enjoyable Coffee Smoothies with added ice cream for extra delight');
    
    eskrim.innerHTML += Card('Ice Cream/Mixed-ice-cream-Vanilla-Strawberry-Mixue-225x300.jpg', 'Mixed Ice Cream', '8.000', 'Mixed Vanilla and Strawberry Cone Ice Cream, a soft and delightful combination');
    eskrim.innerHTML += Card('Ice Cream/strawberry-ice-cream-mixue.jpg', 'Strawberry Ice Cream', '8.000', 'Strawberry Cone Ice Cream, a soft and delightful treat');
    eskrim.innerHTML += Card('Ice Cream/vanila-ice-cream-mixue.jpg', 'Vanila Ice Cream', '8.000', 'Vanilla Cone Ice Cream, a soft and delightful treat');
    
    sundae.innerHTML += Card('Sundae/sundae.jpg', 'Sundae', '16.000', 'Soft and delicious Vanilla ice cream cone');
    sundae.innerHTML += Card('Sundae/Boba-Sundae.jpg', 'Boba Sundae', '16.000', 'Ice Cream with Brown Sugar Syrup Sauce and Chewy Boba Topping');
    sundae.innerHTML += Card('Sundae/Berry-Bean-Sundae.jpg', 'Berry Bean Sundae', '16.000', 'Ice Cream combined with soft Red Bean and sweet Strawberry jam');
    sundae.innerHTML += Card('Sundae/Chocolate-Lucky-Sundae.jpg', 'Chocolate Lucky Sundae', '16.000', 'Ice Cream with Chocolate Sauce and a surprise Topping underneath');
    sundae.innerHTML += Card('Sundae/Mango-Sundae.jpg', 'Mango Sundae', '16.000', 'Vanilla Ice Cream with real Mango Slice Topping');
    sundae.innerHTML += Card('Sundae/Mixed-Sundae-Vanilla-Strawberry-Mixue.jpg', 'Mixed Sundae V&S', '16.000', 'A delightful blend of creamy Vanilla and luscious Strawberry Ice Cream');
    sundae.innerHTML += Card('Sundae/Oreo-Sundae.jpg', 'Oreo Sundae', '16.000', 'Ice Cream with chocolate and crunchy Oreo sprinkles');
    sundae.innerHTML += Card('Sundae/Strawberry-Lucky-Sundae.jpg', 'Strawberry Lucky Sundae', '16.000', 'Ice Cream with Strawberry sauce, fresh Strawberry chunks, and a surprise topping underneath');
    sundae.innerHTML += Card('Sundae/Strawberry-Sundae-Mixue.jpg', 'Strawberry Sundae', '16.000', 'Smooth and delicious Strawberry ice cream');

    coffee.innerHTML += Card('Coffee/Coffee-Boba-Sundae.jpg', 'Coffee Boba Sundae', '18.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    coffee.innerHTML += Card('Coffee/Coffee-Cookies-Sundae.jpg', 'Coffee Cookies Sundae', '18.000', 'Coffee Cookies Sundae, coffee ice cream enhanced with cookie toppings for added delight');
    coffee.innerHTML += Card('Coffee/Coffee-Ice-Cream.jpg', 'Coffee Ice Cream', '8.000', 'Coffee Ice Cream, a creamy delight infused with delicious coffee flavor');
    coffee.innerHTML += Card('Coffee/Lemon-Coffee.jpg', 'Lemon Coffee', '14.000', 'Lemon Coffee, a new coffee product with a hint of lemon for added freshness');
    coffee.innerHTML += Card('Coffee/Mixue-Americano-Coffee.jpg', 'Americano Coffee', '12.000', 'Delicious Americano Coffee');
    coffee.innerHTML += Card('Coffee/Mocha-Mi-Shake.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    
    fruit.innerHTML += Card('Fruit/Fresh-Squeezed-Lemonade.jpg', 'Fresh Squeezed Lemonade', '10.000', 'Fresh, original lemon juice beverage that is refreshing');
    fruit.innerHTML += Card('Fruit/Hawaian-fruit-Tea.jpg', 'Hawaian fruit Tea', '22.000', 'A refreshing drink with passion fruit pearls, sweet mango topping, and yellow peach jelly');
    fruit.innerHTML += Card('Fruit/kiwi-fruit-tea-mixue.jpg', 'Kiwi Fruit Tea', '15.000', 'Fresh kiwi slices combined with fresh and delightful coconut jelly');
    fruit.innerHTML += Card('Fruit/Lemon-Early-Grey-Tea.jpg', 'Lemon Earl Grey Tea', '12.000', 'Earl Grey Tea mixed with fresh, original lemon juice for a refreshing flavor');
    fruit.innerHTML += Card('Fruit/Lemon-Jasmine-Tea.jpg', 'Lemon Jasmine Tea', '12.000', 'Jasmine Tea paired with fresh, original lemon juice for a refreshing taste');
    fruit.innerHTML += Card('Fruit/Mango-Oats-Jasmine-Tea.jpg', 'Mango Oats Jasmine Tea', '16.000', 'Jasmine tea combined with real mango toppings and oats');
    fruit.innerHTML += Card('Fruit/Passion-fruit-Jasmine-Tea.jpg', 'Passion fruit Jasmine Tea', '20.000', 'Jasmine Tea with real passion fruit pearls, coconut jelly, and chewy boba');
    fruit.innerHTML += Card('Fruit/Peach-Tea-Mixue.jpg', 'Peach Tea Earl Grey Tea', '16.000', 'Fresh peach slices combined with yellow peach jelly and Early Grey Tea');
    
    milk.innerHTML += Card('Milk/Boba-Shake.jpg', 'Boba Shake', '16.000', 'Ice Cream combined with brown sugar and chewy boba toppings');
    milk.innerHTML += Card('Milk/Brown-Sugar-Pearl-Milk-Tea-1.jpg', 'Brown Sugar Pearl Milk Tea', '19.000', 'Milk Tea complemented with brown sugar and chewy boba toppings');
    milk.innerHTML += Card('Milk/Coconut-Jelly-Milk-Tea.jpg', 'Coconut Jelly Milk Tea', '19.000', 'Milk Tea with soft coconut jelly toppings');
    milk.innerHTML += Card('Milk/Creamy-Mango-Boba.jpg', 'Creamy Mango Boba', '22.000', 'Creamy beverage with ice cream, sweet mango, chewy boba, and coconut');
    milk.innerHTML += Card('Milk/Milk-Tea-With-2-Toppings.jpg', 'Milk Tea With 2 Toppings', '19.000', 'Milk Tea with red bean and brown sugar jelly toppings');
    milk.innerHTML += Card('Milk/Oats-Milk-Tea.jpg', 'Oats Milk Tea', '19.000', 'Milk Tea with crunchy oats toppings');
    milk.innerHTML += Card('Milk/Pear-Milk-Tea-1.jpg', 'Pearl Milk Tea', '19.000', 'Milk Tea with chewy boba toppings');
    milk.innerHTML += Card('Milk/Read-Bean-Milk-Tea.jpg', 'Red Bean Milk Tea', '19.000', 'Milk Tea with red bean toppings');
    milk.innerHTML += Card('Milk/Strawberry-Mi-shake.jpg', 'Strawberry Mi-shake', '16.000', 'Ice Cream with a blend of green tea and fresh strawberry slices');
    milk.innerHTML += Card('Milk/Supreme-Mixed-Milk-Tea.jpg', 'Supreme Mixed Milk Tea', '22.000', 'Milk Tea with extra toppings of pearl, coconut jelly, oats, and brown sugar jelly');
    
    tea.innerHTML += Card('tea/Early-Grey-Tea-with-2-Toppings.jpg', 'Earl Grey Tea with 2 Toppings', '13.000', 'Earl Grey Tea with chewy boba and coconut jelly toppings');
    tea.innerHTML += Card('tea/Jasmine-Tea-With-2-Toppings.jpg', 'Jasmine Tea With 2 Toppings', '13.000', 'Jasmine Tea with chewy boba and coconut jelly toppings');
    tea.innerHTML += Card('tea/Original-Earl-Grey-Tea.jpg', 'Original Earl Grey Tea', '10.000', 'Refreshing Black Tea');
    tea.innerHTML += Card('tea/Original-Jasmine-Tea.jpg', 'Original Jasmine Tea', '10.000', 'Refreshing Jasmine Tea');
    tea.innerHTML += Card('tea/ice-cream-earl-grey-tea.jpg', 'Ice Cream Earl Grey Tea', '13.000', 'Earl Grey Tea with ice cream on top');
    tea.innerHTML += Card('tea/Ice-Cream-Jasmine-Tea-Mixue.jpg', 'Ice Cream Jasmine Tea', '13.000', 'Jasmine Tea with ice cream on top');
});