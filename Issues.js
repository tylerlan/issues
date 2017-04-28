const fs = require('fs');

// An array created by parsing JSON data for GitHub issues
// submitted to the ExpressJS repo
let issues = require('./data/expressIssues');

class Issues {
  constructor (issues) {
    this.issues = issues;
  }

  // return an array containing each issues `id`
  get ids() {
    return issues.map(issue => issue.id);
  }

  // return the total number of issues
  get numberOfIssues() {
    return this.issues.length;
  }

  // return an array containing each issues `title`
  get titles() {
    return issues.map(issue => issue.title);
  }

  // return an array containing the `login` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get users() {
    return this._unique(issues.map(issue => issue.user.login));
  }

  // return an array containing the `avatar_url` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get avatars() {
    return this._unique(issues.map(issue => issue.user.avatar_url));
  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with an `assignee` property that is not `null`
  get withAssignee() {
    return issues
      .filter(issue => issue.assignee)
      .map(assignedIssue => assignedIssue.id);
  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with a `pull_request` property that is not `null`
  get withPullRequest() {
    return issues
      .filter(issue => issue.pull_request)
      .map(assignedIssue => assignedIssue.id);
  }

  // return the total number of comments for all the issues, based on the
  // `comments` property
  get totalComments() {
    return issues
      .map(issue => issue.comments)
      .reduce((total, number) => total + number);
  }

  // Return the `login` property of the `user` property for the `user` that has
  // submitted the most issues
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

module.exports = Issues;
