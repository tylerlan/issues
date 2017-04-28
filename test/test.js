const expect = require('chai').expect;

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

      const expressIssuesIds = [224879206, 224878968, 224862240, 224861882, 224472273, 224161522, 220660015, 219728186, 219727942, 218140539, 217697363, 217105395, 216971708, 215892151, 210340728, 209405536, 209036137, 209006038, 208959369, 208939332, 206974798, 205161214, 198824547, 198051519, 191884789, 191743020, 190165483, 187235703, 185733156, 185513110];

      expect(expressIssues.ids).to.eql(expressIssuesIds);
    });
  });

  describe('`numberOfIssues` getter', function() {
    it('should get the total number of issues', function() {
      expect(expressIssues.numberOfIssues).to.equal(30);
    });
  });

  describe('`titles` getter', function() {
    it('should get the title for each issue', function() {

      const expressIssuesTitles = ['res.location back test', 'Missing res.location(\'back\') tests', 'location: back override option + tests', 'Option to turn off built in \'back\' functionality in res.location(\'back\')', 'Problem starting this in docker', 'Update debug module version', 'Add Marko to wiki::Home.md ## Template Engines', 'Add \'json escape\' option to unicode escape <, >, and &', 'Option to unicode escape <, >, and & in JSON output', 'Express Router Returns Controllers Used in the Other Router  Ask', 'Express Typings Broken in TS 2.2.x (VS Code, WebStorm, pretty much everything)', 'Moves compileQueryParser to separate module', 'Promise created in handler warning', 'test: Made unit test passing with node-chakracore', 'check http.IncomingMessage and http.ServerResponse prototypes', 'Add middleware benchmarks', 'Settings functionality moved out of core', 'Call callback once on listen error', 'Moves req/res out of the repo', 'Remove direct http dependency', '[REQUEST] callback handler for methods', 'express.static - add support for cache-control: immutable', 'ETag header does not change with header mutation', 'View engine view path results to default after set manually', 'Gracefully handle invalid status codes', 'How to generate ETags for safe HTTP methods only', 'Issue warnings when Express used in "unexpected" ways', 'Middleware usage with extra arguments', 'Options for Engines', 'Throw TypeError if argument passed to res.status is null or undefined'];

      expect(expressIssues.titles).to.eql(expressIssuesTitles);

    });
  });

  describe('`users` getter', function() {
    it('should get the unique users who submitted each issue', function() {

      const expressIssuesUsers = ['WORMSS', 'danncoba', 'LucianBuzzo', 'noformnocontent', 'g-k', 'golkir', 'joefallon', 'wesleytodd', 'nstuyvesant', 'kunalspathak', 'gxela', 'allevo', 'zecar', 'ra-hardy', 'domfarolino', 'akotulu', 'nickclaw', 'mickaeltr', 'adamreisnz', 'isikfsc', 'CanisLupusXenonis', 'Shastel'];

      expect(expressIssues.users).to.eql(expressIssuesUsers);

    });
  });

  describe('`avatars` getter', function() {
    it('should get the avatar url for each unique user who submitted issues', function() {

      const expressIssuesAvatars = ['https://avatars1.githubusercontent.com/u/1384537?v=3', 'https://avatars0.githubusercontent.com/u/1384537?v=3', 'https://avatars2.githubusercontent.com/u/2931774?v=3', 'https://avatars3.githubusercontent.com/u/15064535?v=3', 'https://avatars1.githubusercontent.com/u/23745012?v=3', 'https://avatars2.githubusercontent.com/u/226605?v=3', 'https://avatars3.githubusercontent.com/u/4704602?v=3', 'https://avatars2.githubusercontent.com/u/4212989?v=3', 'https://avatars1.githubusercontent.com/u/1027776?v=3', 'https://avatars2.githubusercontent.com/u/5770938?v=3', 'https://avatars3.githubusercontent.com/u/12488060?v=3', 'https://avatars3.githubusercontent.com/u/982267?v=3', 'https://avatars2.githubusercontent.com/u/1054125?v=3', 'https://avatars2.githubusercontent.com/u/8117818?v=3', 'https://avatars3.githubusercontent.com/u/12749172?v=3', 'https://avatars2.githubusercontent.com/u/9669289?v=3', 'https://avatars0.githubusercontent.com/u/1204475?v=3', 'https://avatars3.githubusercontent.com/u/2576091?v=3', 'https://avatars1.githubusercontent.com/u/378910?v=3', 'https://avatars3.githubusercontent.com/u/490562?v=3', 'https://avatars3.githubusercontent.com/u/5363259?v=3', 'https://avatars2.githubusercontent.com/u/5897046?v=3', 'https://avatars3.githubusercontent.com/u/6017041?v=3'];

      expect(expressIssues.avatars).to.eql(expressIssuesAvatars);

    });
  });

  describe('`withAssignee` getter', function() {
    it('should get the ids for each issue that has an assignee', function() {

      const expressIssuesWithAssignees = [224161522, 220660015, 215892151, 210340728, 209006038, 205161214, 191884789, 185513110];

      expect(expressIssues.withAssignee).to.eql(expressIssuesWithAssignees);

    });
  });

  describe('`withPullRequest` getter', function() {
    it('should get the ids for each issue that has an associated pull request', function() {

      const expressIssuesWithPullRequests = [224879206, 224862240, 224161522, 219728186, 217105395, 215892151, 210340728, 209405536, 209036137, 209006038, 208959369, 208939332, 191884789, 185733156, 185513110];

      expect(expressIssues.withPullRequest).to.eql(expressIssuesWithPullRequests);

    });
  });

  describe('`totalComments` getter', function() {
    it('should get the total number of comments for all the issues', function() {

      const expressIssuesTotalComments = 110;

      expect(expressIssues.totalComments).to.equal(expressIssuesTotalComments);

    });
  });

  describe('`mostActiveUser` getter', function() {
    it('should get the user name who has submitted the most issues', function() {

      const expressIssuesMostActive = 'wesleytodd';

      expect(expressIssues.mostActiveUser).to.equal(expressIssuesMostActive);

    });
  });

});
