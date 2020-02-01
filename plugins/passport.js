const passport = require('passport')
const SlackStrategy = require('passport-slack-oauth2').Strategy

const { SLACK_CLIENT_ID, SLACK_CLIENT_SECRET, SLACK_TEAM_ID } = process.env

passport.use(
  new SlackStrategy(
    {
      clientID: SLACK_CLIENT_ID,
      clientSecret: SLACK_CLIENT_SECRET,
      team: SLACK_TEAM_ID
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile)
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

module.exports = passport
