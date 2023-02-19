const Engineer = require('../lib/engineer')

describe('Engineer', () => {
    describe ('Initiate', () => {
        it (`Should initiate an engineer object`, () => {
            const obj = new Engineer()
            expect(typeof(obj)).toEqual('object')
        });
        it (`Should set engineer name`, () => {
            const name = 'name'
            const obj = new Engineer(name)
            expect(obj.name).toEqual(name)
        });
        it (`Should set engineer ID`, () => {
            const id = 1234
            const obj = new Engineer('name', id); 
            expect(obj.id).toEqual(id);
        });
        it (`Should set engineer email`, () => {
            const email = 'email@email.com'
            const obj = new Engineer('name', 1234, email)
            expect(obj.email).toEqual(email)
        });
        it (`Should set engineer GitHub`, () => {
            const github = 'github'
            const obj = new Engineer('name', 1234, 'email@email.com', github)
            expect(obj.github).toEqual(github)
        })
    });
    describe(`getName`, () => {
        it (`Should return engineer name`, () => {
            const name = 'name'
            const obj = new Engineer(name)
            expect(obj.getName()).toEqual(name)
        });
    });
    describe (`getId`, () => {
        it (`Should return engineer id`, () => {
            const id = 1234
            const obj = new Engineer('name', id)
            expect(obj.getId()).toEqual(id)
        });
    });
    describe (`getEmail`, () => {
        it (`Should return engineer email`, () => {
            const email = 'email@email.com'
            const obj = new Engineer('name', 1234, email)
            expect(obj.getEmail()).toEqual(email)
        });
    });
    describe (`getRole`, () => {
        it (`Should return engineer`, () => {
            const role = 'Engineer'
            const obj = new Engineer('name', 1234, 'email@email.com')
            expect(obj.getRole()).toEqual(role)
        });
    });
    describe(`getGithub`, () => {
        it (`Should return engineer GitHub`, () => {
            const github = 'github'
            const obj = new Engineer('name', 1234, 'email@email.com', github)
            expect(obj.github).toEqual(github)
        })
    })
})