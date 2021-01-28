module.exports = (req, res, next) => {
    // if (req.user) {
    //     next();
    // } else {
    //     console.log(`🛑 You can't be here!`);
    //     res.redirect('/');
    // }
    if (!req.user) {
        console.log(`🛑 You can't be here`);
       // req.flash('error, you must be logged in to access that page');
        res.redirect('/auth/login');
    } else {
        console.log(req.user);
        next();
    }
}