const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('./index');
test('server can be started', async () => { await new Promise(r => app.listen(0, r)); assert.ok(app.address().port > 0); app.close(); });
