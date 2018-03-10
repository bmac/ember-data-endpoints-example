import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  photoId: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  books: DS.hasMany('book'),
  photos: DS.hasMany('photo'),
});
