const {createSecretHolder} = require('../../../main/clojures/six/KeepASecret');

test('', () => {
    let holder = createSecretHolder(5);
   expect(holder.getSecret()).toEqual(5);
   holder.setSecret(8);
   expect(holder.getSecret()).toEqual(8);
});