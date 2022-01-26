import React, { useState } from 'react';
import usePostComment from './usePostComment';
import styles from './CommentForm.css';

const CommentForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const newComment = usePostComment(name, message,
        () => {
            setName('');
            setMessage('');
        }
    );

    const submitForm = (event) => {
        event.preventDefault();
        newComment.mutate();
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>Please Leave a Comment</div>
            <div className={styles.inputLabel}>Name (Required)</div>
            <input
                className={styles.inputContainer}
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div className={styles.inputLabel}>Comment (Required)</div>
            <textarea
                className={styles.textareaContainer}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className={styles.button}
                onClick={submitForm}
                disabled={name === '' || message === ''}
            >
                Submit Comment
            </button>
        </div>
    )
}

export default CommentForm;
