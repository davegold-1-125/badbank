// bash installs:
//npm install express
//npm install lowdb
// BUT npm install should install all dependencies in dependencies file

// setup server
// YOUR CODE
var express = require('express');
var app     = express();

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));

// setup data store
// YOUR CODE
//lowdb 
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// required data store structure
// YOUR CODE
db.defaults(
    { 
        accounts:[
            /*{name        : 'Example',
            email       : 'ex@mple.com',
            balance     : 0,
            password    : 'example',
            transactions: []}*/
        ] 
    }
).write();


//Start server--------------- added section
app.listen(3000, function(){
    console.log('Running on port 3000');
});

var current_user=""

function log_transaction(email, trans_type, amount) {
    //track transactions
    var this_transaction =[Date(), trans_type, amount]
    var account = db.get('accounts').find({ "email": email }).value();
    account.transactions.push(this_transaction)
    db.write()
}

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var msg
    var account
    try {
        //Check for duplicates
        account = db.get('accounts').find({ "name": req.params.name }).value();
        if (account!=null){msg = "Name exists"; console.log(msg); res.send(msg); return}
        account = db.get('accounts').find({ "email": req.params.email }).value();
        if (account!=null){msg = "Email exists"; console.log(msg); res.send(msg); return}
        
        var new_account = {
            "name"     : req.params.name,
            "email"    : req.params.email,
            "balance"  : 0,
            "password" : req.params.password,
            "transactions": []
        };
        db.get('accounts').push(new_account).write();
        
        log_transaction(req.params.email, "Account created", 0) //track transactions

        msg = "Success, account added!"
        res.send(msg); console.log(msg)

    } catch (error) {
        msg ='Failure! error detected: '+ error
        res.send(msg); console.log(msg)
    }
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object ??why would we return this?
    // If fail, return null ??returning error message instead
    var msg
    var account
    account = db.get('accounts').find({ "email": req.params.email, "password": req.params.password }).value();
    if (account==null){msg = "Incorrect login credentials"; console.log(msg); res.send(msg); return}
    current_user=req.params.email
    msg = "Login success! Logged in as " + current_user; console.log(msg); res.send(msg); return    
});

app.get('/account/deposit/:email/:amount', function (req, res) {
    
    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var msg
    var account
    
    amount = Number(req.params.amount);
    //errors
    if (current_user!=req.params.email){msg = "Error: You are not logged in as " + req.params.email ; console.log(msg); res.send(msg); return}
    if (isNaN(amount)|amount <=0){msg = "Failure: amount must be a positive number"; console.log(msg); res.send(msg); return}    
    //manipulations
    account = db.get('accounts').find({ "email": req.params.email}).value();
    account.balance += amount
    db.write()

    log_transaction(req.params.email, "Deposit", amount) //track transactions
    
    //success
    msg = "Deposit success! Deposited amount " + amount; console.log(msg); res.send(msg); return    
});

app.get('/account/withdraw/:email/:amount', function (req, res) {
    
    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var msg
    var account
    
    amount = Number(req.params.amount);
    //errors
    if (current_user!=req.params.email){msg = "Error: You are not logged in as " + req.params.email ; console.log(msg); res.send(msg); return}
    if (isNaN(amount)|amount <=0){msg = "Failure: amount must be a positive number"; console.log(msg); res.send(msg); return}    
    //manipulations
    account = db.get('accounts').find({ "email": req.params.email}).value();
    account.balance -= amount
    db.write()

    log_transaction(req.params.email, "Withdrawal", amount) //track transactions

    //success
    msg = "Withdraw success! Withdraw amount " + amount; console.log(msg); res.send(msg); return    
});

app.get('/account/transactions/:email', function (req, res) {
    
    // YOUR CODE
    // Return all transactions for account
    //time, type, ammount
    var msg
    var account
    if (current_user!=req.params.email){msg = "Error: You are not logged in as " + req.params.email ; console.log(msg); res.send(msg); return}
    account = db.get('accounts').find({ "email": req.params.email}).value();
    transactions = account.transactions
    msg = "Transactions for " + req.params.email +" are: "+ transactions; console.log(msg); res.send(msg); return


});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var msg
    var account
    
    //errors
    if (current_user!=req.params.email){msg = "Error: You are not logged in as " + req.params.email ; console.log(msg); res.send(msg); return}

    account = db.get('accounts').find({ "email": req.params.email}).value();
    balance = account.balance

    //success
    msg = "Current balance for "+req.params.email+" is: " + balance; console.log(msg); res.send(msg); return    
});

app.get('/account/all', function (req, res) {
    // YOUR CODE
    // Return data for all accounts
    res.send(db.get('accounts').value());
    console.log('All data sent')
});
