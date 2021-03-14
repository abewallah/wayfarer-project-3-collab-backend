const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const cityRoutes = require('./routes/cities');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Test');
});

app.use('/cities', cityRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
