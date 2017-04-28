const fs = require('fs');
const expressIssues = JSON.parse(fs.readFileSync(__dirname + '/express_issues.json', 'utf-8'));

module.exports = expressIssues;
