let db;

// create a new db request for a 'StateDB' database
const request = window.indexedDB.open('StateDB', 1);

request.onsuccess = function (e) {
    db = e.target.result;

    if (navigator.online) {
        checkDatabase();
    }
};

request.onerror = function (e) {
    console.log(e.errorCode);
};