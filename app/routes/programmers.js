import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Paul Irish', 'Douglas Crockford', 'Addy Osmani'];
  }
});
