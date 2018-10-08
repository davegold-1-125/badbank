var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#"> <img src="Btc-sans.png" width="30" height="30" alt="" onclick="defaultModule()"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#" onclick="defaultModule()">BadBank</a>
        <a class="nav-item nav-link "href="#" onclick="loadCreateAccount()">CreateAccount</a>
        <a class="nav-item nav-link "href="#" onclick="loadLogin()">Login</a>
        <a class="nav-item nav-link "href="#" onclick="loadDeposit()">Deposit</a>
        <a class="nav-item nav-link "href="#" onclick="loadWithdraw()">Withdraw</a>
        <a class="nav-item nav-link "href="#" onclick="loadTransactions()">Transactions</a>
        <a class="nav-item nav-link "href="#" onclick="loadBalance()">Balance</a>
        <!-- <a class="nav-item nav-link "href="#" onclick="defaultModule()">defaultModule</a> -->
        <a class="nav-item nav-link "href="#" onclick="loadAllData()">AllData</a>
        
      </div>
    </div>

  </nav> 
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- -->
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">Create Account</div>
        <div class="card-body">
            <p>
                <h6 class="card-title">Name:</h6>
                <input type="input" id=inputName placeholder="Enter name">
            </p>
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <p>
            <h6 class="card-title">Password:</h6>
            <input type="password" id=inputPassword placeholder="Enter password">
            </p>
            <button type="button" class="btn btn-light" onclick="create()">Create Account</button>
            <div id="output"></div>
        </div>
    </div>

`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- -->
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">Login</div>
        <div class="card-body">
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <p>
            <h6 class="card-title">Password:</h6>
            <input type="password" id=inputPassword placeholder="Enter password">
            </p>
            <button type="button" class="btn btn-light" onclick="login()">Submit</button>
            <div id="output"></div>
        </div>
    </div>

`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- -->
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
        <div class="card-header">Deposit</div>
        <div class="card-body">
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <p>
            <h6 class="card-title">Amount:</h6>
            <input type="input" id=inputAmount placeholder="Enter Amount">
            </p>
            <button type="button" class="btn btn-light" onclick="deposit()">Submit</button>
            <div id="output"></div>
        </div>
    </div> 
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- -->
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header">Withdraw</div>
        <div class="card-body">
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <p>
            <h6 class="card-title">Amount:</h6>
            <input type="input" id=inputAmount placeholder="Enter Amount">
            </p>
            <button type="button" class="btn btn-light" onclick="withdraw()">Submit</button>
            <div id="output"></div>
        </div>
    </div>
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- -->
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
        <div class="card-header">Transactions</div>
        <div class="card-body">
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <button type="button" class="btn btn-light" onclick="transactions()">Submit</button>
            <div id="output"></div>
        </div>
    </div>
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- -->
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">Balance</div>
        <div class="card-body">
            <p>
            <h6 class="card-title">Email Adress:</h6>
            <input type="input" id=inputEmail placeholder="Enter email">
            </p>
            <button type="button" class="btn btn-light" onclick="balance()">Submit</button>
            <div id="output"></div>
        </div>
    </div> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- -->
    <div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header">BadBank Landing Module</div>
        <div class="card-body">
            <h5 class="card-title">Welcome to the Bank</h5>
            <p class="card-text">You can move around using the navigation bar.</p>
            <img src="bank.png" width="150" height="150" alt="">
        </div>
    </div>
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- -->
    <h6> All Data in Store</h6>
    <button type="button" class="btn btn-dark" onclick="allData()">Show All Data</button>
    <div id="output"></div> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
