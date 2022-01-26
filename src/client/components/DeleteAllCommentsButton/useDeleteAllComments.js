import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const useDeleteAllComments = () => {
    const queryClient = useQueryClient();
    const deleteAllComments = () => {
        axios.delete('http://localhost:3001/deleteComments')
        .then(function (response) {
            queryClient.invalidateQueries(['RQ_ALL_COMMENTS']);
        });
    }
    return useMutation('RQ_ALL_COMMENTS', () => deleteAllComments());
}

export default useDeleteAllComments;
