const bcrypt = require('bcrypt');

// Example password and hash
const password = 'examplePassword';
const storedHash = '$2b$10$QYi7L6t8.ZtWT3Nv6WDXLeVS27xW3bmoZJLSHtAKj3juqKbLMLnZ2'; // Replace with the hash you have



bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});
// Hash the password
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  console.log('Hashed Password:', hashedPassword);

  // Now compare the password with the stored hash
  bcrypt.compare(password, storedHash, (err, result) => {
    if (err) {
      console.error('Error comparing password:', err);
      return;
    }

    console.log('Password matches:', result); // true if the password matches, false otherwise
  });
});



