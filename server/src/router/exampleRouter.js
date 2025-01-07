const { exampleController } = require("../controllers");
const asyncHandler = require('../utils/asyncHandler');

function exampleRouter(app) {
    app.post(
        "/api/example",
        asyncHandler(exampleController.create)
    );

    app.get(
        "/api/example",
        asyncHandler(exampleController.readAll)
    );

    app.put(
        "/api/example/:id",
        asyncHandler(exampleController.update)
    );

    app.get(
        "/api/example/:id",
        asyncHandler(exampleController.read)
    );

    app.delete(
        "/api/example/:id",
        asyncHandler(exampleController.remove)
    );


}

module.exports = exampleRouter;
