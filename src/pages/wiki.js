import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function FileTree({ node, onClick, selectedFile }) {
    if (node.children) {
        return (
            <details className='mdFolder'>
                <summary className='mdLabel'>{node.name}</summary>
                {node.children.map(child => (
                    <FileTree key={child.name} node={child} onClick={onClick} selectedFile={selectedFile} />
                ))}
            </details>
        );
    } else {
        return (
            <button 
                className={`mdFile ${node.path === selectedFile ? 'active' : ''}`} 
                onClick={() => onClick(node.path)}
            >
                {node.name}
            </button>
        );
    }
}

function Wiki() {
    const [markdown, setMarkdown] = useState('');
    const [files, setFiles] = useState([]);
    const [selectedFile, setSelectedFile] = useState('');

    // Load files
    useEffect(() => {
        fetch(`${window.location.origin}/data/docs/index.json`)
            .then(response => response.json())
            .then(json => setFiles(json));
    }, []);

    // Load selected file from URL hash
    useEffect(() => {
        const hash = window.location.hash;
        const match = hash.match(/^#path=(.+)/);
        if (match) {
            setSelectedFile(decodeURIComponent(match[1]));
        } else {
            setSelectedFile('welcome.md');
        }
    }, []);

    // Update URL hash when selected file changes
    useEffect(() => {
        if (selectedFile) {
            window.location.hash = `#path=${encodeURIComponent(selectedFile)}`;
        }
    }, [selectedFile]);

    // Fetch markdown of selected file
    useEffect(() => {
        if (selectedFile) {
            fetch(`${window.location.origin}/data/docs/${selectedFile}`)
                .then(response => response.text())
                .then(text => setMarkdown(text));
        }
    }, [selectedFile]);

    return (
        <div className='wiki-container'>
            <div className='sidebar wiki'>
                {files.map(file => (
                    <FileTree key={file.name} node={file} onClick={setSelectedFile} selectedFile={selectedFile} />
                ))}
            </div>
            <div className='docs wiki'>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}
export default Wiki;