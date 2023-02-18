const Employee = requie('../lib/employee')

describe('Employee', () => {
    describe ('Initiate', () => {
        it (`Should initiate an employee object`, () => {
            const obj = new Employee(); 
            expect(typeof(obj)).toEqual('object');
        });
        it (`Should set employee name`, () => {
            const name = 'name'
            const obj = new Employee(name); 
            expect(obj.name).toEqual(name);
        });
        it (`Should set employee ID`, () => {
            const id = 1234
            const obj = new Employee('name', id);
            expect(obj.id).toEqual(id);
        });
        it (`Should set employee email`, () => {
            const email = 'email@email.com'
            const obj = new Employee('name', 1234, email);
            expect(obj.email).toEqual(email)
        });
    });
    describe(`getName`, () => {
        it (`Should return employee name`, () => {
            const name = 'name'
            const obj = new Employee(name)
            expect(obj.getName()).toEqual(name)
        });
    });
    describe (`getId`, () => {
        it (`Should return employee id`, () => {
            const id = 1234
            const obj = new Employee('name', id)
            expect(obj.getId()).toEqual(id)
        });
    });
    describe (`getEmail`, () => {
        it (`Should return employee email`, () => {
            const email = 'email@email.com'
            const obj = new Employee('name', 1234, email)
            expect(obj.getEmail()).toEqual(email)
        });
    });
    describe (`getRole`, () => {
        it (`Should return employee`, () => {
            const role = 'Employee'
            const obj = new Employee('name', 1234, 'email@email.com')
            expect(obj.getRole()).toEqual(role)
        });
    });
})