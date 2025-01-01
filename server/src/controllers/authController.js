const { authHandler } = require('../handlers');
const jwt = require('jsonwebtoken');
const { verifyPassword, hashPassword } = require('../utils/password');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const user = await authHandler.findUserByEmail(email);
        if (!user) {
            return res.status(401).json({ error: 'Invalid email' });
        }

        // Check if the password matches
        const isPasswordValid = await verifyPassword(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the user account is activated
        if (!user.is_active) {
            return res.status(403).json({ error: 'Account not activated. Please activate your account.' });
        }

        // Generate a JWT
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET, // Use a secure secret key
            { expiresIn: '1h' } // Token expiration time
        );


        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user.id,
                email: user.email,
                firstname: user.firstname,
                lastname: user.lastname,
                role: user.role,
                isActive: user.is_active
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const enrollAdminUser = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    try {
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        if (!firstname || !lastname) {
            return res.status(400).json({ error: 'Firstname and lastname are required' });
        }

        // Check if the user already exists
        const existingUser = await authHandler.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }


        const hashedPassword = await hashPassword(password);

        // Create the new user
        const newUser = await authHandler.createAdminUser(email, hashedPassword, firstname, lastname);

        // Respond with success
        res.status(200).json({
            message: 'Adminuser registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname
            }
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const register = async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    try {
        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        if (!firstname || !lastname) {
            return res.status(400).json({ error: 'Firstname and lastname are required' });
        }

        // Check if the user already exists
        const existingUser = await authHandler.findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }


        const hashedPassword = await hashPassword(password);

        // Create the new user
        const newUser = await authHandler.createUser(email, hashedPassword, firstname, lastname);

        // Respond with success
        res.status(200).json({
            message: 'User registered successfully',
            user: {
                id: newUser.id,
                email: newUser.email,
                firstname: newUser.firstname,
                lastname: newUser.lastname
            }
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await authHandler.findUserByEmail(email);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Generate a password reset token (placeholder logic)
        const resetToken = '123456';
        console.log(`Send reset token ${resetToken} to email ${email}`);

        res.status(200).json({ message: 'Password reset token sent' });
    } catch (error) {
        console.error('Error during forgot password:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const activateAccount = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await authHandler.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'User doesn\'t exist' });
        }

        if (user.is_active) {
            return res.status(400).json({ error: 'User is already activated' });
        }

        await authHandler.activateUser(user.id);

        res.status(200).json({ message: 'Account activated successfully' });
    } catch (error) {
        console.error('Error during account activation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  try {
    // Validate input
    if (!refreshToken) {
      return res.status(400).json({ error: 'Refresh token is required' });
    }

    // Verify the refresh token
    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        console.log(decoded)
      if (err) {
        return res.status(403).json({ error: 'Invalid or expired refresh token' });
      }

      // Generate a new access token
      const newAccessToken = jwt.sign(
        { userId: decoded.userId, email: decoded.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(200).json({ accessToken: newAccessToken });
    });
  } catch (error) {
    console.error('Error during refresh token:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
    login,
    register,
    forgotPassword,
    activateAccount,
    refreshToken,
    enrollAdminUser
};
