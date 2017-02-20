module.exports = {
  getAccount: function(id, next) {
    Account.find({id: id})
    .exec(function(err, account) {
      if (err) throw err
      next(account)
    })
  },
  getAccounts: function(next) {
    Account.find()
    .exec(function(err, accounts) {
      if (err) throw err
      next(accounts)
    })
  },
  addAccount: function(account, next) {
    Account.create({
      userName: account.userName,
      password: account.password
    })
    .exec(function(err, user) {
      if (err) throw err
      next(user)
    })
  }
}
