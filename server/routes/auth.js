const Router = require('express')
const passport = require('../../plugins/passport')

const router = Router()

router.use(passport.initialize())
router.use(passport.session())

router.get('/slack', passport.authenticate('Slack'))

router.get(
  '/slack/callback',
  passport.authenticate('Slack', {
    successRedirect: '/',
    failureRedirect: '/',
    session: true
  })
)

module.exports = router
