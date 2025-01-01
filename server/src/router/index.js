const exampleRouter = require("./exampleRouter");
const authRouter = require("./authRouter");

function router(app) {
  exampleRouter(app);
  authRouter(app);
}

module.exports = router;
