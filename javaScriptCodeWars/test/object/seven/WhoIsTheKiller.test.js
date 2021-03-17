const {killer} = require('../../../main/object/seven/WhoIsTheKiller');

test('Should return the name of the killer', () => {
    expect(killer({'James': ['Jacob', 'Bill', 'Lucas'],
                      'Johnny': ['David', 'Kyle', 'Lucas'],
                      'Peter': ['Lucy', 'Kyle']},
                  ['Lucas', 'Bill'])).toEqual('James');
    expect(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben'])).toEqual('Megan');
});