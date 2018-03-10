import DS from 'ember-data';

export default DS.Model.extend({
  datePublished: DS.attr(),
  title: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr(),

  chapters: DS.hasMany('chapter'),
  firstChapter: DS.belongsTo('chapter'),

  series: DS.belongsTo('series'),
  author: DS.belongsTo('author'),
  stores: DS.hasMany('store'),
  photos: DS.hasMany('photo'),
});
