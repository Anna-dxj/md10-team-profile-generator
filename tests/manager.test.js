const manager = requie('../lib/manager')

describe('manager', () => {
    describe ('Initiate', () => {
        it (`Should initiate an manager object`, () => {
            const obj = new Manager()
            expect(typeof(obj)).toEqual('object')
        });
        it (`Should set manager name`, () => {
            const name = 'name'
            const obj = new Manager(name)
            expect(obj.name).toEqual(name)
        });
        it (`Should set manager ID`, () => {
            const id = 1234
            const obj = new Manager('name', id)
            expect(obj.id).toEqual(id)
        });
        it (`Should set manager email`, () => {
            const email = 'email@email.com'
            const obj = new Manager ('name', 1234, email)
            expect(obj.email).toEqual(email)
        });
        it (`Should set office number`, () => {
            const office = 2345
            const obj = new Manager('name', 1234, 'email@email.com', office)
            expect(obj.office).toEqual(office)
        })
    });
    describe(`getName`, () => {
        it (`Should return manager name`, () => {
            const name = 'name'
            const obj = new Manager(name)
            expect(obj.getName()).toEqual(name)
        });
    });
    describe (`getId`, () => {
        it (`Should return manager id`, () => {
            const id = 1234
            const obj = new Manager('name', id)
            expect(obj.getId()).toEqual(id)
        });
    });
    describe (`getEmail`, () => {
        it (`Should return manager email`, () => {
            const email = 'email@email.com'
            const obj = new Manager('name', 1234, email)
            expect(obj.getEmail()).toEqual(email)
        });
    });
    describe (`getRole`, () => {
        it (`Should return manager`, () => {
            const role = 'Manager'
            const obj = new Manager('name', 1234, 'email@email.com')
            expect(obj.getRole()).toEqual(role)
        });
    });
    describe (`getOffice`, () => {
        it (`Should return office number`, () => {
            const office = 2345
            const obj = new Manager('name', 1234, 'email@email.com', office)
            expect(obj.getOffice()).toEqual(office)
        })
    })
})