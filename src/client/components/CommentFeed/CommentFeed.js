import React from 'react';
import useGetComments from './useGetComments';
import CommentFeedEntry from './CommentFeedEntry';
import styles from './CommentFeed.css';

const CommentFeed = () => {
    const {data, isError, isFetching} = useGetComments();

    return (
        <div className={styles.container}>
            <div className={styles.title}>Comment Feed</div>
            {isFetching && <div>Fetching comments...</div>}
            {isError && <div>Error retrieving comments</div>}
            {data?.data.reverse().map((comment) => {
                return (
                    <CommentFeedEntry
                        id={`comment=${comment.id}`}
                        name={comment.name}
                        message={comment.message}
                        created={comment.created}
                    />
                )
            })}
        </div>
    )
}

export default CommentFeed;
