// // -- The " never " Type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred', 500);
