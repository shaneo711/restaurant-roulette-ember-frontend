import { module, test } from 'qunit';
import { setupTest } from 'restaurant-roulette-ember-frontend/tests/helpers';

module('Unit | Route | restaurants', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:restaurants');
    assert.ok(route);
  });
});
