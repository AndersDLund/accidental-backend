
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car_model').del()
    .then(function () {
      // Inserts seed entries
      return knex('car_model').insert([
        // 'Acura' 1
        {make_id: 1, model: 'TLX', image:'https://media.ed.edmunds-media.com/acura/tlx/2018/ot/2018_acura_tlx_LIFE1_ot_522175_1280.jpg'},
        // 'Alfa Romeo' 2
        // 'Aston Martin' 3
        // 'Audi' 4
        {make_id: 4, model: 'A4', image: 'https://media.ed.edmunds-media.com/audi/a4/2018/oem/2018_audi_a4_sedan_20-tfsi-prestige-quattro_fq_oem_1_1280.jpg'},
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
        {make_id: 17, model: 'Civic', image: 'https://media.ed.edmunds-media.com/honda/civic/2016/ot/2016_honda_civic_LIFE1_ot_903165_1280.jpg'},
        {make_id: 17, model: 'Accord', image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2016/06/2017_Honda_Accord_Hybrid___1-626x381.jpg'},
        // 'Hyundai' 18
        // 'Infiniti' 19
        {make_id: 19, model: 'Q50', image: 'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/07/2018-Infiniti-Q50-109.jpg'},
        // 'Jaguar' 20
        // 'Jeep' 21
        // 'KIA' 22
        // 'Lamborghini' 23
        // 'Land Rover' 24
        // 'Lexus' 25
        {make_id: 25, model: 'ES', image: 'https://media.ed.edmunds-media.com/lexus/es-350/2017/oem/2017_lexus_es-350_sedan_base_fq_oem_1_1280.jpg'},
        // 'Maserati' 26
        // 'McLaren' 27
        // 'Mercedes-Benz' 28
        {make_id: 28, model: 'C-Class', image: 'https://www.mercedes-benz.com/wp-content/uploads/sites/3/2014/09/000-Mercedes-Benz-Vehicles-C-Class-Coupe-C-205-1280x636-1280x636.jpg'},
        // 'Mini' 29
        // 'Mitsubishi' 30
        // 'Nissan' 31
        {make_id: 31, model: 'Xterra', image: 'https://www.nissanusa.com/vlp-assets/suvs/xterra/nissan-xterra-suv-red-side-profile.jpg'},
        {make_id: 31, model: 'Altima', image: 'https://media.ed.edmunds-media.com/nissan/altima/2017/oem/2017_nissan_altima_sedan_25-sr_fq_oem_2_1280.jpg'},
        // 'Porsche' 32
        // 'Ram' 33
        // 'Rolls Royce' 34
        // 'Saab' 35
        // 'Subaru' 36
        // 'Tesla' 37
        // 'Toyota' 38
        {make_id: 38, model: 'Camry', image: 'https://media.ed.edmunds-media.com/toyota/camry/2018/ot/2018_toyota_camry_LIFE1_ot_1011175_1280.jpg'}
        // 'Volkswagen' 39
        // 'Volvo' 40
      ]);
    });
};
