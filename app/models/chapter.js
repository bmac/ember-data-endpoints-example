import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  ordering: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  book: DS.belongsTo('book', { inverse: 'chapters' }),
});
