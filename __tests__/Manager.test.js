const Employee = require('../lib/Manager')

describe("Manager", () => {
    describe("Initialization", () => {
            it("should set office Number via constructor arguments", () => {
            // Arrange
            const officeNumber = 100;
            // Act
            const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
            // Assert
            expect(manager.officeNumber).toBe(officeNumber);
        });
    });

    describe("Getter methods", () => {

        it("should get office Number via getOffice()", () => {
                   // Arrange
                   const officeNumber = 100;
                   // Act
                   const manager = new Manager("Alice", 1, "test@test.com", officeNumber);
                   const managerOfficeNumber = manager.getOffice();
                   // Assert
                   expect(managerofficeNumber).toBe(officeNumber);
        });

        it("should get role via getRole()", () => {
            // Arrange
            const role = "Employee";
            // Act
            const manager = new Manager("Alice", 100, "test@test.com", 100);
            const managerRole = manager.getRole()
            // Assert
            expect(managerRole).toBe(role);
        });
    });
});