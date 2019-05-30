/*

Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in a list called stock_prices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stock_prices[60] = 500.

Write an efficient function that takes stock_prices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  stock_prices = [10, 7, 5, 8, 11, 9]

get_max_profit(stock_prices)
# Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

//O(n^2)
const getMax = (list) => {
    //two loops -- one at i and one at j.
    // using nested loop, find difference between i and all the j's
    //set an initial max_profit to $0. 
    //if difference betweeb i and j is > max_profit, that difference is the new max_profit. 

    let max_profit = -Infinity;
    if(list.length < 2) {
        return {Error: "Getting a profit requires at least 2 prices"};
    }
    for(let i = 0; i < list.length; i++) {
        for(j = i + 1; j < list.length; j++) {
            let difference = list[j] - list[i];
            if(difference > max_profit) {
                max_profit = difference;
            }

            console.log("max", max_profit, list[i], list[j], difference);
        }
    }
    if(max_profit > 0) {
        return max_profit;
    } else {
        return 0;
    }
}

//O(n) time and O(1) space
const getMaxGreedy = (list) => { //notes on what being greedy means in Notes.md
    if(list.length < 2) {
        return {Error: "Getting a profit requires at least 2 prices"};
    }

    let min_price = list[0];
    let max_profit = list[1] - list[0];

    for (let i = 1; i < list.length; i++) {
        let current_price = list[i];
        let potential_profit = current_price - min_price;

        max_profit = Math.max(max_profit, potential_profit);

        min_price = Math.min(min_price, current_price);
    }
    return max_profit;
}

let stock_prices = [10, 5, 23, 89, 56, 34, 99];
console.log(getMaxGreedy(stock_prices));