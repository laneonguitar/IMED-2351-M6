                        // Creating an Object using My Truck as example
var vehicle = {
    make: "Dodge Ram",
    model: "1500 Tradesman ",
    year: "2016",
    mileage: "49800",
    fullName: function() {
        return this.make + " " + this.model;
    }
};

// console properties of the object
console.log("Make:", vehicle.make); // Output: Dodge Ram
console.log("Model:", vehicle["model"]); // Output: 1500 Tradesman
console.log("Year:", vehicle.year); // Output: 2016
console.log("Year:", vehicle.mileage); // Output: 49800
console.log("Full Name:", vehicle.fullName()); // Output: Dodge Ram 1500 Tradesman





                             // Dodge Ram 1500 Tradesman object with a method
var dodgeRam1500Tradesman = {
    // Properties
    make: "Dodge",
    model: "Ram 1500 Tradesman",
    year: 2016,
    color: "Gray",
    mileage: 49800,

    // start the engine method
    startEngine: function() {
        return "Engine started. Ready to go!";
    },

    // drive the truck method
    drive: function(distance) {
        this.mileage += distance;
        return "Drove " + distance + " miles. Mileage now: " + this.mileage + " miles.";
    },

    // stop engine
    stopEngine: function() {
        return "Returned home. Engine stopped. Car parked.";
    }
};

// Using the methods of the Dodge Ram 1500 Tradesman object
console.log("Make:", dodgeRam1500Tradesman.make);
console.log("Model:", dodgeRam1500Tradesman.model);
console.log("Year:", dodgeRam1500Tradesman.year);
console.log("Color:", dodgeRam1500Tradesman.color);
console.log("Mileage:", dodgeRam1500Tradesman.mileage);
console.log(dodgeRam1500Tradesman.startEngine());
console.log(dodgeRam1500Tradesman.drive(50));
console.log(dodgeRam1500Tradesman.drive(25));
console.log(dodgeRam1500Tradesman.stopEngine());



                                   // An Array of guitar makes and models
                              
const guitars = [
    { make: 'Gibson', model: 'Les Paul Standard' },
    { make: 'Gibson', model: 'SG Standard' },
    { make: 'Gibson', model: 'Flying V' },
    { make: 'Fender', model: 'Stratocaster' },
    { make: 'Fender', model: 'Telecaster' },
    { make: 'Fender', model: 'Jazzmaster' },
    { make: 'Reverend', model: 'Sensei' },
    { make: 'Reverend', model: 'Double Agent' },
    { make: 'Reverend', model: 'Jetstream' },
    { make: 'Ibanez', model: 'RG550' },
    { make: 'Ibanez', model: 'JEM7V' },
    { make: 'Ibanez', model: 'Artcore AS73' }
  ];
  
  // Printing the list of guitars
  guitars.forEach(guitar => {
      console.log(`${guitar.make} ${guitar.model}`);
      
  });


                                              // An Array of guitar makes and models with method
                                                  
  

