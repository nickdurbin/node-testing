exports.seed = function(knex) {
  return knex('users')
    .then(function () {
      return knex('users').insert([
        {id: 1, username: 'ndurbin', password: "password"},
        {id: 2, username: 'bobbieG', password: "password"},
        {id: 3, username: 'funnyGuy', password: "password"}
      ]);
    });
};