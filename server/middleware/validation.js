export const checkPasswordLength = (request, response, next) => {
  // I don't like this because we are not doing this validation on the DB
  if (request.password.length < 6) {
    return response.status(400)
      .send({
        success: false,
        message: 'Passwords must be at least 6 characters',
      });
  }
  next();
};

// export const 
