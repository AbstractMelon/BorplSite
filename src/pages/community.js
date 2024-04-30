import React, { useState } from 'react';

function Community() {
    const [posts, setPosts] = useState([]);
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [showPostForm, setShowPostForm] = useState(false);
    const [newComment, setNewComment] = useState('');

    const handleTitleChange = (e) => {
        setNewPostTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setNewPostContent(e.target.value);
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const addPost = () => {
        const newPost = {
            id: posts.length + 1, 
            title: newPostTitle,
            content: newPostContent,
            comments: [], 
        };
        setPosts([...posts, newPost]); 
        setNewPostTitle('');
        setNewPostContent('');
        setShowPostForm(false); 
    };


    const addComment = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, newComment],
                };
            }
            return post;
        });
        setPosts(updatedPosts);
        setNewComment(''); 
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
                    <div key={post.id}>
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
                            <button onClick={() => addComment(post.id)}>Post</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Community;
