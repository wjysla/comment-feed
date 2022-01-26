import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const usePostComment = (name, message, successOptions) => {
    const queryClient = useQueryClient();
    const postComment = () => {
        axios.post('http://localhost:3001/createComment', {
            name,
            message
        })
        .then(function (response) {
            queryClient.invalidateQueries(['RQ_ALL_COMMENTS']);
        })
    }
    return useMutation('RQ_SINGLE_COMMENT', () => postComment(), {
        onSuccess: successOptions
    });
}

export default usePostComment;
