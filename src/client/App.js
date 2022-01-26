import React from 'react'
import {QueryClientProvider, QueryClient} from 'react-query';
import CommentForm from './components/CommentForm';
import CommentFeed from './components/CommentFeed';
import DeleteAllCommentsButton from './components/DeleteAllCommentsButton';
import styles from './app.css';

const queryClient = new QueryClient

const App = () => {
    return(
        <QueryClientProvider client={queryClient}>
            <div className={styles.wrapper}>
                <CommentForm />
                <CommentFeed />
                <DeleteAllCommentsButton /> {/* for convenience */}
            </div>
        </QueryClientProvider>
    );
}

export default App;
