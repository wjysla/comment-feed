import React from 'react';
import useDeleteAllComments from '../../hooks/useDeleteAllComments';
import styles from './DeleteAllCommentsButton.css';

const DeleteAllCommentsButton = () => {
    const newComment = useDeleteAllComments();

    const deleteComments = (event) => {
        event.preventDefault();
        newComment.mutate();
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                onClick={deleteComments}
            >
                Delete All Comments
            </button>
        </div>
    )
}

export default DeleteAllCommentsButton;
