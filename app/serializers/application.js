import DS from 'ember-data';
import Ember from 'ember';
import { underscore } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return rawKey;
  }
});
