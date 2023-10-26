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
    
    fruit.innerHTML += Card('Fruit/Fresh-Squeezed-Lemonade.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Hawaian-fruit-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/kiwi-fruit-tea-mixue.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Lemon-Early-Grey-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Lemon-Jasmine-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Mango-Oats-Jasmine-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Passion-fruit-Jasmine-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    fruit.innerHTML += Card('Fruit/Peach-Tea-Mixue.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    
    milk.innerHTML += Card('Milk/Boba-Shake.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Brown-Sugar-Pearl-Milk-Tea-1.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Coconut-Jelly-Milk-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Creamy-Mango-Boba.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Milk-Tea-With-2-Toppings.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Oats-Milk-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Pear-Milk-Tea-1.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Read-Bean-Milk-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Strawberry-Mi-shake.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    milk.innerHTML += Card('Milk/Supreme-Mixed-Milk-Tea.jpg', 'Mocha Mi Shake', '16.000', 'Refreshing and delightful Mocha Mi-Shake');
    
    tea.innerHTML += Card('tea/Early-Grey-Tea-with-2-Toppings.jpg', 'Earl Grey Tea with 2 Toppings', '13.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    tea.innerHTML += Card('tea/Jasmine-Tea-With-2-Toppings.jpg', 'Jasmine Tea With 2 Toppings', '13.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    tea.innerHTML += Card('tea/Original-Earl-Grey-Tea.jpg', 'Original Earl Grey Tea', '10.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    tea.innerHTML += Card('tea/Original-Jasmine-Tea.jpg', 'Original Jasmine Tea', '10.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    tea.innerHTML += Card('tea/ice-cream-earl-grey-tea.jpg', 'Ice Cream Earl Grey Tea', '13.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
    tea.innerHTML += Card('tea/Original-Jasmine-Tea.jpg', 'Ice Cream Jasmine Tea', '13.000', 'Coffee Boba Sundae, coffee ice cream enhanced with chewy boba toppings for added indulgence');
});