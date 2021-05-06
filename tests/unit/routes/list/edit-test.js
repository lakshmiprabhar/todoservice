import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list/edit');
    assert.ok(route);
  });
});
