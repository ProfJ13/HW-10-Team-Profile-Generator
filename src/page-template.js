function renderManager(manager) {
    return `manager`;
}
function renderEngineers(engineers) {
    return `engineer`;
}
function renderInterns(interns) {
    return `intern`;
}

function generateTeam(teamMembers) {
    return `
        ${renderManager(teamMembers.manager)}
        ${renderEngineers(teamMembers.engineers)}
        ${renderInterns(teamMembers.interns)}

    `
}

function render(teamMembers) {
    return "";
}

module.exports = render;