import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const apiKey = 'a4ca982edd305cd88cd875c1';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    const amt = (amount * rate).toFixed(2);
    // console.log("Test log", amt);
    return amt;
}

https.get(url, (response) => {
    let data = "";
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;
        rl.question(chalk.redBright`Enter the amount in USD : `, (amount) => {
            rl.question(chalk.magenta`Enter the target currency (e.g., INR EUR ...) : `, (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    let curr = [currency.toUpperCase()];
                    console.log(`${amount} USD is approximately : ${convertCurrency(amount, rate)} ${curr}`);
                } else {
                    console.log('Invalid Currency Code');
                }
                rl.close();
            })
        })
    })
})