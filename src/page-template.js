function renderManager(manager) {
    const markup = manager.map((manager => {
        return `
        `
    }))}
function renderEngineers(engineers) {
    const markup = engineers.map((engineer => {
        return `
        `
    }))
}

function renderInterns(interns) {
    const markup = intenrs.map((intern => {
        return `
        `
    }))}

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