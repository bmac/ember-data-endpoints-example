import DS from 'ember-data';

export default DS.Model.extend({
  imageableId: DS.attr(),
  imageableType: DS.attr(),
  title: DS.attr(),
  uri: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  imageable: DS.hasMany('author'),
});
