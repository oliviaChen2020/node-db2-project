exports.seed = function (knex) {
  // Truncate the db to reset those ids
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          id: 1,
          VIN: '41C11B',
          make: 'Toyota',
          model: 'Camry',
          mileage: '10322',
        },
        {
          id: 2,
          VIN: '21A54A',
          make: 'Honda',
          model: 'Accord',
          mileage: '12001',
        },
        {
          id: 3,
          VIN: '12C23B',
          make: 'Cadillac',
          model: 'CTS',
          mileage: '9877',
        },
      ]);
    });
};
