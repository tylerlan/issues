const fs = require('fs');
let issues = JSON.parse(fs.readFileSync('./express_issues.json', 'utf-8'));


class Issues {
  constructor (issues) {
    this.issues = issues;
  }

  get ids() {
    return issues.map(issue => issue.id);
  }

  get numberOfIssues() {
    return this.issues.length;
  }

  get titles() {
    return issues.map(issue => issue.title);
  }

  get users() {
    return this._unique(issues.map(issue => issue.user.login));
  }

  get avatars() {
    return this._unique(issues.map(issue => issue.user.avatar_url));
  }

  get withAssignee() {
    return issues
      .filter(issue => issue.assignee)
      .map(assignedIssue => assignedIssue.id);
  }

  get withPullRequest() {
    return issues
      .filter(issue => issue.pull_request)
      .map(assignedIssue => assignedIssue.id);
  }

  get mostComments() {
    return issues
      .map(issue => issue.comments)
      .reduce((total, number) => total + number);
  }

  get mostActiveUser() {
    let userToIssues = this.issues
      .map(issue => issue.user.login)
      .reduce((mapping, user) => {
        mapping.hasOwnProperty(user) ? mapping[user]++ : mapping[user] = 1;
        return mapping;
      }, {});

    return Object.keys(userToIssues)
      .reduce((most, user) => userToIssues[user] > userToIssues[most] ? user : most)
  }

  _unique(collection) {
    return [...new Set(collection)];
  }
}

// let userSrcs = unique(issues.map(issue => issue.user.avatar_url));

// console.log(userSrcs);

let expressIssues = new Issues(issues);
// console.log(expressIssues.ids);
// console.log(expressIssues.numberOfIssues);
// console.log(expressIssues.titles);
// console.log(expressIssues.users);
// console.log(expressIssues.avatars);
// console.log(expressIssues.withAssignee);
// console.log(expressIssues.withPullRequest);
// console.log(expressIssues.mostComments);
// console.log(expressIssues.mostActiveUser);
