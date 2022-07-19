const Employee = require('../lib/Engineer')

describe("Engineer", () => {
    describe("Initialization", () => {
            it("should set GitHub via constructor arguments", () => {
            // Arrange
            const gitHub = "roncrawford";
            // Act
            const engineer = new Engineer("Alice", 1, "test@test.com", gitHub);
            // Assert
            expect(engineer.gitHub).toBe(gitHub);
        });
    });

    describe("Getter methods", () => {

        it("should get github via getGitHub()", () => {
                   // Arrange
                   const gitHub = "roncrawford";
                   // Act
                   const engineer = new Engineer("Alice", 1, "test@test.com", gitHub);
                   const engineerGitHub = engineer.getGitHub();
                   // Assert
                   expect(engineerGitHub).toBe(gitHub);
        });

        it("should get role via getRole()", () => {
            // Arrange
            const role = "Engineer";
            // Act
            const engineer = new Engineer("Alice", 100, "test@test.com", "roncrawford");
            const managerRole = engineer.getRole()
            // Assert
            expect(engineerRole).toBe(role);
        });
    });
});