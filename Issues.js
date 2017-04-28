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
    return this.issues.map( (issue) => issue.id )
  }

  // return the total number of issues
  get numberOfIssues() {
    return this.issues.length;
  }

  // return an array containing each issues `title`
  get titles() {
    return this.issues.map ( (issue) => issue.title );
  }

  // return an array containing the `login` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get users() {
    let result = new Set(); // SETS ONLY CONTAIN UNIQUE VALUES
    let withDuplicates = this.issues.map ( (issue) => issue.user.login );
    withDuplicates.forEach( (userLogin) => result.add(userLogin) );

    return [...result]; // USE SPREAD SYNTAX TO DISPLAY SET CONTENTS IN AN ARRAY
  }

  // return an array containing the `avatar_url` property of the
  // `user` property for each issue. The array should not contain
  // any duplicate elements
  get avatars() {
    let result = new Set();
    let withDuplicates = this.issues.map ( (issue) => issue.user.avatar_url );
    withDuplicates.forEach( (avatarId) => result.add(avatarId) );

    return [...result];
  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with an `assignee` property that is not `null`
  get withAssignee() {

    let issuesWithNonNullAssignees = this.issues.filter((issue) => issue.assignee !== null);

    return issuesWithNonNullAssignees.map( (issue) => issue.id );

  }

  // return an array containing all the `id` property of the `assignedIssue`
  // property for each issue with a `pull_request` property that is not `null`
  get withPullRequest() {

    let issuesWithPullRequest = this.issues.filter((issue) => issue.hasOwnProperty('pull_request')); // Need to use hasOwnProperty because in some cases pull_question ISN'T THERE AT ALL, rather than being === null.

    return issuesWithPullRequest.map( (issue) => issue.id );

  }

  // return the total number of comments for all the issues, based on the
  // `comments` property
  get totalComments() {
    let arrayOfCommentsNumber = this.issues.map( issue => issue.comments );

    return arrayOfCommentsNumber.reduce( (total, num) => total + num );
  }

  // Return the `login` property of the `user` property for the `user` that has
  // submitted the most issues
  get mostActiveUser() {
    let userIssuesObj = {};
    // create an object to store user logins and the number of issues for which they are the user
    this.issues.forEach ( (issue) => {
      if (userIssuesObj[issue.user.login] === undefined) {
          userIssuesObj[issue.user.login] = 0;
      } else {
          userIssuesObj[issue.user.login]++;
      }
    })
    // loop through the object and return the key (the USER) with the highest value (most issues)
    return Object.keys(userIssuesObj).reduce( (a, b) => {
      return userIssuesObj[a] > userIssuesObj[b] ? a : b;
    } )

  }
}

module.exports = Issues;
