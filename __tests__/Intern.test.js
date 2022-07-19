const Employee = require('../lib/Intern')

describe("Intern", () => {
    describe("Initialization", () => {
            it("should set school via constructor arguments", () => {
            // Arrange
            const school = "georgiatech";
            // Act
            const intern = new Intern("Alice", 1, "test@test.com", school);
            // Assert
            expect(intern.school).toBe(school);
        });
    });

    describe("Getter methods", () => {

        it("should get school via getSchool()", () => {
                   // Arrange
                   const school = "georgiatech";
                   // Act
                   const intern = new Intern("Alice", 1, "test@test.com", school);
                   const internSchool = intern.getSchool();
                   // Assert
                   expect(internSchool).toBe(school);
        });

        it("should get role via getRole()", () => {
            // Arrange
            const role = "Intern";
            // Act
            const intern = new Intern("Alice", 100, "test@test.com", "roncrawford");
            const internRole = intern.getRole()
            // Assert
            expect(internRole).toBe(role);
        });
    });
});