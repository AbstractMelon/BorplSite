const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Load posts from JSON file
let posts = [];
try {
    const data = fs.readFileSync('posts.json');
    posts = JSON.parse(data);
} catch (error) {
    console.error('Error reading posts file:', error);
}

// Save posts to JSON file
const savePosts = () => {
    fs.writeFileSync('posts.json', JSON.stringify(posts, null, 2));
};

// Get all posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Create a new post
app.post('/api/posts', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        comments: [],
    };
    posts.push(newPost);
    savePosts();
    res.json(newPost);
});

// Add a comment to a post
app.post('/api/posts/:postId/comments', (req, res) => {
    const postId = parseInt(req.params.postId);
    const { comment } = req.body;
    const post = posts.find(post => post.id === postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    post.comments.push(comment);
    savePosts();
    res.json(comment);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
