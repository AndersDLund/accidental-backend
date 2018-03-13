
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_make').del()
    .then(function () {
      // Inserts seed entries
      return knex('car_make').insert([
        {id: 1, make: 'Acura'},
        {id: 2, make: 'Alfa Romeo'},
        {id: 3, make: 'Aston Martin'},
        {id: 4, make: 'Audi'},
        {id: 5, make: 'Bentley'},
        {id: 6, make: 'BMW'},
        {id: 7, make: 'Bugatti'},
        {id: 8, make: 'Buick'},
        {id: 9, make: 'Cadillac'},
        {id: 10, make: 'Chevrolet'},
        {id: 11, make: 'Chrysler'},
        {id: 12, make: 'Dodge'},
        {id: 13, make: 'Ferrari'},
        {id: 14, make: 'Fiat'},
        {id: 15, make: 'Ford'},
        {id: 16, make: 'GMC'},
        {id: 17, make: 'Honda'},
        {id: 18, make: 'Hyundai'},
        {id: 19, make: 'Infiniti'},
        {id: 20, make: 'Jaguar'},
        {id: 21, make: 'Jeep'},
        {id: 22, make: 'KIA'},
        {id: 23, make: 'Lamborghini'},
        {id: 24, make: 'Land Rover'},
        {id: 25, make: 'Lexus'},
        {id: 26, make: 'Maserati'},
        {id: 27, make: 'McLaren'},
        {id: 28, make: 'Mercedes-Benz'},
        {id: 29, make: 'Mini'},
        {id: 30, make: 'Mitsubishi'},
        {id: 31, make: 'Nissan'},
        {id: 32, make: 'Porsche'},
        {id: 33, make: 'Ram'},
        {id: 34, make: 'Rolls Royce'},
        {id: 35, make: 'Saab'},
        {id: 36, make: 'Subaru'},
        {id: 37, make: 'Tesla'},
        {id: 38, make: 'Toyota'},
        {id: 39, make: 'Volkswagen'},
        {id: 40, make: 'Volvo'},
      ]);
    });
};
