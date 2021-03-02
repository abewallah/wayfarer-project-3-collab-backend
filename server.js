const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
// const routes = require('./routes');

const passport = require('passport');
const userRoutes = require('./routes/users');
const cityRoutes = require('./routes/cities');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use(passport.initialize());
require('./config/passport')(passport);

app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/api/cities', cityRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
