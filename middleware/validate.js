module.exports = {

  contactValidator(req, res, next) {
    req.assert('email', 'A valid email is required.').isEmail();

    req.sanitizeBody('title').escape();
    req.sanitizeBody('text').escape();

    req.getValidationResult().then((result) => {
      let errors = result.mapped();

      if (!result.isEmpty()) {
        let data = {
          errors,
          title: req.body.title,
          body: req.body.text
        };
        res.render('contact', { data });
      } else {
        next();
      }
    });
  }

}
