
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------
    var name  = document.getElementById("inputName").value;
    var email  = document.getElementById("inputEmail").value;
    var password  = document.getElementById("inputPassword").value;
    
    var url = '/account/create/' + name +'/'+ email+'/'+ password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });
    console.log('Creating Account: '+ name +', '+ email+', '+ "Secret Password")
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    console.log('Logging In')    
    var email  = document.getElementById("inputEmail").value;
    var password  = document.getElementById("inputPassword").value;
    
    var url = '/account/login/' + email+'/'+ password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    console.log('Depositing')    
    var email  = document.getElementById("inputEmail").value;
    var amount  = document.getElementById("inputAmount").value;
    
    var url = '/account/deposit/' + email+'/'+ amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    console.log('Withdrawing')    
    var email  = document.getElementById("inputEmail").value;
    var amount  = document.getElementById("inputAmount").value;
    
    var url = '/account/withdraw/' + email+'/'+ amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    console.log('Showing Transactions')
    var email  = document.getElementById("inputEmail").value;
    
    var url = '/account/transactions/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });    

}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    console.log('Getting Balance')    
    var email  = document.getElementById("inputEmail").value;
    
    var url = '/account/get/' + email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.text);
            }

        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    console.log('Showing All Data')    
    var url = '/account/all';

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            }
            else{
                console.log(res);
                output.innerHTML = JSON.stringify(res.body);
            }

        });

}

