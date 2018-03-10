import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  dateOfBirth: DS.attr(),
  dateOfDeath: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  books: DS.hasMany('book'),
  photos: DS.hasMany('photo'),
});
