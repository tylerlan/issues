const expect = require('chai').expect;

const expectations = require('./expectations');

const expressIssuesData = require('../data/expressIssues');
const Issues = require('../Issues');
const expressIssues = new Issues(expressIssuesData);

describe('Issues class', function() {

  describe('Constructor', function() {
    it('should create an `issues` property', function() {
      expect(expressIssues.issues).to.exist;
    });
  });

  describe('`ids` getter', function() {
    it('should get the id for each issue', function() {
      expect(expressIssues.ids).to.eql(expectations.expressIssuesIds);
    });
  });

  describe('`numberOfIssues` getter', function() {
    it('should get the total number of issues', function() {
      expect(expressIssues.numberOfIssues).to.equal(expectations.numberOfIssues);
    });
  });

  describe('`titles` getter', function() {
    it('should get the title for each issue', function() {
      expect(expressIssues.titles).to.eql(expectations.expressIssuesTitles);
    });
  });

  describe('`users` getter', function() {
    it('should get the unique users who submitted each issue', function() {
      expect(expressIssues.users).to.eql(expectations.expressIssuesUsers);
    });
  });

  describe('`avatars` getter', function() {
    it('should get the avatar url for each unique user who submitted issues', function() {
      expect(expressIssues.avatars).to.eql(expectations.expressIssuesAvatars);
    });
  });

  describe('`withAssignee` getter', function() {
    it('should get the ids for each issue that has an assignee', function() {
      expect(expressIssues.withAssignee).to.eql(expectations.expressIssuesWithAssignees);
    });
  });

  describe('`withPullRequest` getter', function() {
    it('should get the ids for each issue that has an associated pull request', function() {
      expect(expressIssues.withPullRequest).to.eql(expectations.expressIssuesWithPullRequests);
    });
  });

  describe('`totalComments` getter', function() {
    it('should get the total number of comments for all the issues', function() {
      expect(expressIssues.totalComments).to.equal(expectations.expressIssuesTotalComments);
    });
  });

  describe('`mostActiveUser` getter', function() {
    it('should get the user name who has submitted the most issues', function() {
      expect(expressIssues.mostActiveUser).to.equal(expectations.expressIssuesMostActive);
    });
  });
});
