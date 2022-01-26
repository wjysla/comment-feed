import React from 'react';
import styles from './CommentFeedEntry.css';

const CommentFeedEntry = ({id, message, name, created}) => {
    return (
        <div className={styles.commentEntryContainer} key={id}>
            {message}
            <div className={styles.userInfo}>By {name} at {created}</div>
        </div>
    )
}

export default CommentFeedEntry;
