
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_make').del()
    .then(function () {
      // Inserts seed entries
      return knex('car_make').insert([
        {make: 'Acura'},
        {make: 'Alfa Romeo'},
        {make: 'Aston Martin'},
        {make: 'Audi'},
        {make: 'Bentley'},
        {make: 'BMW'},
        {make: 'Bugatti'},
        {make: 'Buick'},
        {make: 'Cadillac'},
        {make: 'Chevrolet'},
        {make: 'Chrysler'},
        {make: 'Dodge'},
        {make: 'Ferrari'},
        {make: 'Fiat'},
        {make: 'Ford'},
        {make: 'GMC'},
        {make: 'Honda'},
        {make: 'Hyundai'},
        {make: 'Infiniti'},
        {make: 'Jaguar'},
        {make: 'Jeep'},
        {make: 'KIA'},
        {make: 'Lamborghini'},
        {make: 'Land Rover'},
        {make: 'Lexus'},
        {make: 'Maserati'},
        {make: 'McLaren'},
        {make: 'Mercedes-Benz'},
        {make: 'Mini'},
        {make: 'Mitsubishi'},
        {make: 'Nissan'},
        {make: 'Porsche'},
        {make: 'Ram'},
        {make: 'Rolls Royce'},
        {make: 'Saab'},
        {make: 'Subaru'},
        {make: 'Tesla'},
        {make: 'Toyota'},
        {make: 'Volkswagen'},
        {make: 'Volvo'},
      ]);
    });
};
