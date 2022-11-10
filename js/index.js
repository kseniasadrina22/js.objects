//Part 1

const firstName = "David";
const lastName = "Abrams";
const email = "david19@gmail.com";
const password = "qwerty";
const telNumber = "+380954131170";
const address = "null";

const customer = {
  firstName: "David",
  lastName: "Abrams",
  email: "david19@gmail.com",
  password: "qwerty",
  telNumber: "+380954131170",
  address: {
    city: "Zaporizhzhia",
    street: "Vasyl Stus",
    numberHouse: "35",
    numberFlat: "79",
  },
};

console.log("customer :>>", customer);
console.log("customer.address :>>", customer.address);
customer.telNumber = "+380674839239";
delete customer.address; //у мене чомусь адресу не видалило(
customer.isMale = true;

//Зробити копії обєкту customer двома різними способами:
//1)
const customer2 = {};

for (const key in customer) {
  customer2[key] = customer[key];
}
console.log("customer2 :>>", customer2);

//2)

const customer3 = customer;
console.log("customer3 :>>", customer3);
//3)

const customer4 = Object.assign({}, customer);
console.log("customer4 :>>", customer4);

//Part 2
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
console.log("cat :>>", cat);

for (const key in cat) {
  alert(key);
  alert(cat[key]);
}

//Part 3

function books() {
  this.author = "Vasyl Simonenko";
  this.nameBooks = "Poems";
  this.numberPublication = "2022";
  this.numberPrice = "250";
  this.publistingHouse = {
    nameHouse: "Young Life",
    nameCity: "Kyiv",
  };
}
//books.this.numberPrice = "300";
console.log("books :>>", books);
books.numberPrice = "300";
