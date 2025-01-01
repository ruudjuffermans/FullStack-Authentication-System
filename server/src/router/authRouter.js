const { authController } = require("../controllers");
const asyncHandler = require("../utils/asyncHandler");

function exampleRouter(app) {
    app.post(
        "/api/register",
        asyncHandler(authController.register)
    );

    app.post(
        "/api/login",
        asyncHandler(authController.login)
    );

    app.post(
        "/api/refresh-token",
        asyncHandler(authController.refreshToken)
    );

    app.post(
        "/api/activate-account",
        asyncHandler(authController.activateAccount)
    );

    app.post(
        "/api/enroll-admin",
        asyncHandler(authController.enrollAdminUser)
    );
}

module.exports = exampleRouter;
