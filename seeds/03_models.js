
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_model').del()
    .then(function () {
      // Inserts seed entries
      return knex('car_model').insert([
        // 'Acura' 1
        {make_id: 1, model: 'TLX'},
        // 'Alfa Romeo' 2
        // 'Aston Martin' 3
        // 'Audi' 4
        {make_id: 4, model: 'A4'},
        // 'Bentley' 5
        // 'BMW' 6
        // 'Bugatti' 7
        // 'Buick' 8
        // 'Cadillac' 9
        // 'Chevrolet' 10
        // 'Chrysler' 11
        // 'Dodge' 12
        // 'Ferrari' 13
        // 'Fiat' 14
        // 'Ford' 15
        // 'GMC' 16
        // 'Honda' 17
        {make_id: 17, model: 'Civic'},
        {make_id: 17, model: 'Accord'},
        // 'Hyundai' 18
        // 'Infiniti' 19
        {make_id: 19, model: 'Q50'},
        // 'Jaguar' 20
        // 'Jeep' 21
        // 'KIA' 22
        // 'Lamborghini' 23
        // 'Land Rover' 24
        // 'Lexus' 25
        {make_id: 25, model: 'ES'},
        // 'Maserati' 26
        // 'McLaren' 27
        // 'Mercedes-Benz' 28
        {make_id: 3, model: 'C-Class'},
        // 'Mini' 29
        // 'Mitsubishi' 30
        // 'Nissan' 31
        {make_id: 31, model: 'Xterra'},
        {make_id: 31, model: 'Altima'},
        // 'Porsche' 32
        // 'Ram' 33
        // 'Rolls Royce' 34
        // 'Saab' 35
        // 'Subaru' 36
        // 'Tesla' 37
        // 'Toyota' 38
        {make_id: 38, model: 'Camry'}
        // 'Volkswagen' 39
        // 'Volvo' 40
      ]);
    });
};
