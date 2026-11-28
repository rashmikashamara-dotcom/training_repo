console.log("Start");

// 1. EVENT LOOP

setTimeout(() => {
    console.log("Hello World 1...");
}, 2000);

setTimeout(() => {
    console.log("Hello World 2...");
}, 0);

// 2. PROMISE

Promise.resolve().then(() => {
    console.log("Calling Promise");
});

// 3. OS MODULE

const os = require('os');

// console.log(os.freemem());
// console.log(os.hostname());

// 4. FILE SYSTEM MODULE

const fs = require('fs');

// Create File
fs.writeFile('Data.txt', 'Hello World', (err) => {
    if (err) throw err;
    console.log("File Created");

    // Read File
    fs.readFile('Data.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);

        // Append File
        fs.appendFile('Data.txt', '\nAdding Express js', (err) => {
            if (err) throw err;
            console.log("File Updated");

            // Delete File
            fs.unlink('Data.txt', (err) => {
                if (err) throw err;
                console.log("File Deleted...");
            });
        });
    });
});

// 5. HTTP MODULE

const http = require('http');

const PORT = 5000;

const domain = http.createServer((req, res) => {

    console.log(req.url);

    // HOME PAGE
    if (req.url === '/home') {

        fs.readFile('home.html', 'utf-8', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end("Internal Server Error");
                return;
            }

            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(data);

        });

    }

    // CONTACT PAGE
    else if (req.url === '/contact') {

        fs.readFile('contact.html', 'utf-8', (err, data) => {

            if (err) {
                res.statusCode = 500;
                res.end("Internal Server Error");
                return;
            }

            res.setHeader('Content-Type', 'text/html');
            res.statusCode = 200;
            res.end(data);

        });

    }

    // ABOUT PAGE
    else if (req.url === '/about') {

        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;

        res.end(`
            <h1>Welcome to About Page</h1>
            <p>Learn more about us.</p>
        `);

    }

    // PRODUCT PAGE
    else if (req.url === '/product') {

        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;

        res.end(JSON.stringify({
            "product id": 100,
            "product name": "Laptop",
            "price": 50000,
            "category": "Electronics"
        }));

    }

    // 404 ERROR
    else {

        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;

        res.end("404 Error - Page Not Found");

    }

});

// 6. SERVER LISTEN

domain.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});
