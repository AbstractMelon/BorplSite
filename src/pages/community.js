import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Community() {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [showPostForm, setShowPostForm] = useState(false);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('localhost:3001/api/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleTitleChange = (e) => {
        setNewPostTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setNewPostContent(e.target.value);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const addPost = async () => {
        try {
            const response = await axios.post('localhost:3001/api/posts', {
                title: newPostTitle,
                content: newPostContent,
            });
            setPosts([...posts, response.data]);
            setNewPostTitle('');
            setNewPostContent('');
            setShowPostForm(false);
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const addComment = async (postId) => {
        try {
            const response = await axios.post(`localhost:3001/api/posts/${postId}/comments`, {
                comment: newComment,
            });
            const updatedPosts = posts.map(post => {
                if (post._id === postId) {
                    return {
                        ...post,
                        comments: [...post.comments, response.data],
                    };
                }
                return post;
            });
            setPosts(updatedPosts);
            setNewComment('');
        } catch (error) {
            console.error('Error adding comment:', error);
        }
    };

    return (
        <div>
            <h1>Community News/Forum</h1>
            {!showPostForm && (
                <button onClick={() => setShowPostForm(true)}>Make a post</button>
            )}
            {showPostForm && (
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter post title" 
                        value={newPostTitle} 
                        onChange={handleTitleChange} 
                    />
                    <textarea 
                        placeholder="Enter post content" 
                        value={newPostContent} 
                        onChange={handleContentChange} 
                    />
                    <button onClick={addPost}>Post</button>
                </div>
            )}
            <div>
                {posts.map(post => (
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <h3>Comments:</h3>
                        <ul>
                            {post.comments.map((comment, index) => (
                                <li key={index}>{comment}</li>
                            ))}
                        </ul>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter your comment" 
                                value={newComment} 
                                onChange={handleCommentChange} 
                            />
                            <button onClick={() => addComment(post._id)}>Post</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Community;
