// controllers/authController.js
const UserModel = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// exports.registerUser = async (req, res) => {
//   const { username, email, phNo, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const user = new User({ username, email, phNo, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({ message: 'Signed up successfully', token });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error',error });
//   }
// };



      
// exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     console.log('Login attempt:', { email, password });
  
//     try {
//       if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//       }
  
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(400).json({ message: 'User not found' });
//       }
  
//       // Assuming plaintext password
//       if (user.password !== password) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//       }
  
//       const token = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: '1h',
//       });
  
//       res.status(200).json({ message: 'Login successful', token });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   };
const bcrypt = require('bcryptjs');



module.exports.register = async function (req, res) {
  try {
   const { username, email, phNo, password, profile } = req.body;

    // Check if username already exists
    const userByUsername = await UserModel.findOne({ username }).exec();
    if (userByUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    // Check if email already exists
    const userByEmail = await UserModel.findOne({ email }).exec();
    if (userByEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }
    // Hash the password if provided
    if (password) {
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcrypt.hash(password, salt);
      
      console.log('Hashed Password:', hashedPassword);
      // Create a new user
      const user = new UserModel({
        username,
        password: hashedPassword,
        profile: profile || '',
        email,
        phNo
      });

      // Save the user to the database
      await user.save();
      return res.status(201).send({ msg: "User Registered Successfully" });
    } else {
      return res.status(400).send({ error: "Password is required" });
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};


// module.exports.register = async function (req, res) {
//   try {
//     const { username, email, phNo, password, profile } = req.body;

//     // Check the existing user
//     const existUsername = new Promise((resolve, reject) => {
//           UserModel.findOne({username}, function(err, user){
//             if(err) reject(new Error(err))
//             if(user) reject({error : "Please use Unique username"});
//             resolve();
//           })
//         });
//         // check for existing email
//         const existEmail = new Promise((resolve, reject) => {
//           UserModel.findOne({email}, function(err, email){
//             if(err) reject(new Error(err))
//             if(user) reject({error : "Please use Unique email"});
//             resolve();
//           })
//         });
//     Promise.all([existUsername, existEmail])
//       .then(() => {
//         if (password) {
//           return bcrypt.hash(password, 10)
//             .then(hashedPassword => {
//               const user = new UserModel({
//                 username,
//                 password: hashedPassword,
//                 profile: profile || '',
//                 email,
//                 phNo
//               });

//               return user.save()
//                 .then(result => res.status(201).send({ msg: "User Registered Successfully" }))
//                 .catch(error => res.status(500).send({ error: "Error saving user" }));
//             })
//             .catch(error => res.status(500).send({ error: "Unable to hash password" }));
//         }
//       })
//       .catch(error => res.status(500).send({ error: "Error checking user existence" }));

//   } catch (error) {
//     return res.status(500).send({ error: "Internal Server Error" });
//   }
// };

  



module.exports.login = async function (req, res) {
  console.log('Request Body:', req.body); 
  const { email, password } = req.body;

  try {
    // Find the user by email
    UserModel.findOne({ email })
      .then(user => {
        if (!user) {
          console.log('Email not found'); 
          return res.status(404).send({ error: "Email not found" });
        }

        console.log('User found:', user);
        console.log('Provided Password:', password); // Log provided password for debugging
        console.log('Stored Hashed Password:', user.password);
        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, user.password)
          .then(passwordCheck => {
            if (!passwordCheck) {
              console.log('password mismatch');
              return res.status(400).send({ error: "Incorrect password" });
            }

            // Create a JWT token
            const token = jwt.sign({
              userId: user._id,
              username: user.username
            }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });

            // Send response with the token
            return res.status(200).send({
              msg: "Login Successful!",
              username: user.username,
              token
            });
          })
          .catch(error => {
            console.error("Error comparing passwords:", error);
            return res.status(500).send({ error: "Error comparing passwords" });
          });
      })
      .catch(error => {
        console.error("Error finding user:", error);
        return res.status(500).send({ error: "Error finding user" });
      });
  } catch (error) {
    console.error("Internal server error:", error);
    return res.status(500).send({ error: "Internal server error" });
  }
};






// module.exports.login = async function (req, res) {
//   console.log('Request Body:', req.body); 
//   const { email, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       return res.status(404).send({ error: 'User not found' });
//     }

//     // Compare the provided password with the stored hash
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).send({ error: 'Incorrect password' });
//     }

//     // Create JWT token
//     const token = jwt.sign(
//       { userId: user._id, username: user.username },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: '24h' }
//     );

//     // Respond with success and token
//     res.status(200).send({
//       msg: 'Login Successful',
//       username: user.username,
//       token
//     });
//   } catch (error) {
//     console.error('Unexpected error:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// };

module.exports.getUser = async function (req, res) {
  const { username} = req.params;
 try {
  if(!username) {
    return res.status(501).send({error : "Invalid Username"});

    UserModel.findOne({ username}, function(err, user){
      if(err) return res.status(500).send({err});
      if(!user) return res.status(501).send({ error : "Couldn't Find the user"});

      const {password, ...rest} = Object.assign({}, user.toJSON());
      return res.status(201).send(user);
    })
  } 
 }catch (error) {
  return res.status(404).send({error : "Cannot Find User Data"});
}

   
};
module.exports.updateUser = async function (req, res) {
  res.json('UpdateUser route');
};
module.exports.generateOTP = async function (req, res) {
  res.json('generateOTP route');
};
module.exports.verifyOTP = async function (req, res) {
  res.json('veriftOTP route');
};
module.exports.createResetSession = async function (req, res) {
  res.json('createresetsession route');
};
module.exports.resetPassword = async function (req, res) {
  res.json('resetPassword route');
};


