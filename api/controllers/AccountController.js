/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAccount: function(req, res) {
		var account = (req.query.id) ? req.query.id : undefined;
    AccountService.getAccount(account, function(success) {
			res.json(success)
		})
  },
	getAccounts: function(req, res) {
    AccountService.getAccounts(function(accounts) {
			res.json(accounts)
		})
  },
	addAccount: function(req, res) {
		var user = (req.query) ? req.query : undefined;
		AccountService.addAccount(user, function(success) {
			res.json(success)
		})
	}
};
