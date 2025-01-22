const users = {
    Sridhar: { balance: 100 },
};

function ValidUser(username, callback) {
    console.log(`Authenticating User: ${username}`);
    const uservalid = users[username] !== undefined;
    if (uservalid) {
        callback(null, username);
    } else {
        callback('Invalid user', null);
    }
}

function processPayment(username, amt, callback) {
    console.log(`Processing Payment for User: ${username}`);
    const process = true; 
    if (process) {
        callback(null, username, amt);
    } else {
        callback("Process Payment Failed", null);
    }
}

function updateBal(username, amt, callback) {
    console.log(`Updating Balance of User: ${username}`);
    users[username].balance -= amt;
    callback(null, users[username].balance);
}

function notifyUser(username, balance, callback) {
    console.log(`Notifying User: ${username} of new balance: $${balance}`);
    callback(null, `Notification sent to ${username}. Current balance: $${balance}`);
}

function Demo(username, amt) {
    ValidUser(username, (userErr, user) => {
        if (userErr) {
            console.error(userErr);
            return;
        }
        processPayment(user, amt, (paymentErr, processedUser, amount) => {
            if (paymentErr) {
                console.error(paymentErr);
                return;
            }
            updateBal(processedUser, amount, (updateErr, newBalance) => {
                if (updateErr) {
                    console.error(updateErr);
                    return;
                }
                notifyUser(processedUser, newBalance, (notifyErr, notification) => {
                    if (notifyErr) {
                        console.error(notifyErr);
                        return;
                    }
                    console.log(notification);
                });
            });
        });
    });
}
Demo('Sridhar', 20);
