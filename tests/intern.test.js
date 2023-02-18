const intern = requie('../lib/intern')

describe('Intern', () => {
    describe ('Initiate', () => {
        it (`Should initiate an intern object`, () => {
            const obj = new Intern()
            expect(typeof(obj)).toEqual('object')
        });
        it (`Should set intern name`, () => {
            const name = 'name'
            const obj = new Intern(name)
            expect(obj.name).toEqual(name)
        });
        it (`Should set intern ID`, () => {
            const id = 1234
            const obj = new Intern('name', id)
            expect(obj.id).toEqual(id)
        });
        it (`Should set intern email`, () => {
            const email = 'email@email.com'
            const obj = new Intern('name', 1234, email)
            expect(obj.email).toEqual(email)
        });
        it (`Should set intern's school`, () => {
            const school = 'school'
            const obj = new Manager('name', 1234, 'email@email.com', school)
            expect(obj.school).toEqual(school)
        })
    });
    describe(`getName`, () => {
        it (`Should return intern name`, () => {
            const name = 'name'
            const obj = new Intern(name)
            expect(obj.getName()).toEqual(name)
        });
    });
    describe (`getId`, () => {
        it (`Should return intern id`, () => {
            const id = 1234 
            const obj = new Intern('name', id)
            expect(obj.getName()).toEqual(id)
        });
    });
    describe (`getEmail`, () => {
        it (`Should return intern email`, () => {
            const email = 'email@email.com'
            const obj = new Intern ('name', 1234, email)
            expect(obj.getEmail()).toEqual(email)
        });
    });
    describe (`getRole`, () => {
        it (`Should return intern`, () => {
            const role = 'Intern'
            const obj = new Engineer('name', 1234, 'email@email.com')
            expect(obj.getRole()).toEqual(role)
        });
    });
    describe(`getSchool`, () => {
        it (`Should return intern's school name`, () => {
            const school = 'school'
            const obj = new Manager('name', 1234, 'email@email.com', school)
            expect(obj.school).toEqual(school)
        })
    })
})