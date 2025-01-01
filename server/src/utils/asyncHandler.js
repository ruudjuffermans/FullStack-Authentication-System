const asyncHandler = (fn) => {
    // console.log(typeof fn); // Should print 'function' @debug
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

module.exports = asyncHandler;