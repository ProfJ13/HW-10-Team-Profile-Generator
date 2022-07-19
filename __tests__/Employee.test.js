const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should instatiate an employee instance", () => {
            // Arrange
            const employee = new Employee()
            // Act

            // Assert
            expect(typeof (employee)).toBe("object");
        });

        it("should set name via constructor arguments", () => {
            // Arrange
            const name = "Alice";
            // Act
            const employee = new Employee(name);
            // Assert
            expect(employee.name).toBe(name);
        });

        it("should set id via constructor arguments", () => {
            // Arrange
            const id = "100";
            // Act
            const employee = new Employee("Alice", id);
            // Assert
            expect(employee.id).toBe(id);
        });

        it("should set email via constructor arguments", () => {
            // Arrange
            const email = "test@test.com";
            // Act
            const employee = new Employee("Alice", 100, email);
            // Assert
            expect(employee.email).toBe(email);
        });

    });

    describe("Getter methods", () => {

        it("should get name via getName()", () => {
            // Arrange
            const name = "Alice";
            // Act
            const employee = new Employee(name, 100, "test@test.com");
            const employeeName = employee.getName()
            // Assert
            expect(employeeName).toBe(name);
        });

        it("should get id via getId()", () => {
            // Arrange
            const name = 100;
            // Act
            const employee = new Employee("Alice", id, "test@test.com");
            const employeeId = employee.getId()
            // Assert
            expect(employeeId).toBe(id);
        });

        it("should get email via getEmail()", () => {
            // Arrange
            const name = "test@test.com";
            // Act
            const employee = new Employee("Alice", 100, email);
            const employeeEmail = employee.getEmail()
            // Assert
            expect(employeeEmail).toBe(email);
        });

        it("should get role via getRole()", () => {
            // Arrange
            const role = "Employee";
            // Act
            const employee = new Employee("Alice", 100, "test@test.com");
            const employeeRole = employee.getRole()
            // Assert
            expect(employeeRole).toBe(role);
        });
    });
});