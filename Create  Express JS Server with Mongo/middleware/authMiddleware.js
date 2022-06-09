// auth check

const authCheck = ( req, res, next ) => {
    console.log('User is okay!');
    next();
}


module.exports = {
    authCheck
}
