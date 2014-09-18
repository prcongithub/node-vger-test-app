
/*
 * GET home page.
 */
var Candidate = require('../resources/candidate');
var Company = require('../resources/company');

exports.index = function(req, res){
  Candidate.fetch(function(candidates){
    Company.fetch(function(companies){
      res.render('index', { title: 'Express', candidates: candidates, companies: companies });
    });
  });
};
