var prod1 = {
    name: 'Czekolada',
    price: 2000,
    weight: 1.5
};

var prod2 = {
    name: 'Jabłko',
    price: 3000,
    weight: 4
};

console.log(prod1);
console.log(prod2);
console.log("Produk numer jeden to: " + prod1.name);
console.log("Produkt numer dwa to: " + prod2.name);
console.log("Produkty kosztują razem: " + (prod1.price + prod2.price));
console.log("Produkty ważą razem: " + (prod1.weight + prod2.weight));


var currentUser = {
    name: "Jan",
    surename: "Kowalski",
    email: "test@gmail.com",
    www: "www.www.pl",
    userType: "Admin",
    show: function() {
        console.log("Imię: " + currentUser.name);
        console.log("Nazwisko: " + currentUser.surename);
        console.log("Email: " + currentUser.email);
        console.log("Strona WWW: " + currentUser.email);
        console.log("Typ użytkownika: " + currentUser.userType);
    }
};

currentUser.show();

var book = {
    title: '21 Lekcji na XXI wiek',
    author: "Yuval Noah Harrari",
    pageCount: "460",
    publisher: "Wydawnictwo Literackie",
    showDetails: function() {
        for(var propt in book){
            if(propt != "showDetails"){
                console.log(propt + ': ' + book[propt]);
            }

        }
    }

}
book.showDetails();