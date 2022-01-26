import axios from 'axios';
import { useQuery } from 'react-query';

const useGetComments = () => {
    const getComments = () => {
        return axios.get('http://localhost:3001/getComments');
    }
    return useQuery('RQ_ALL_COMMENTS', () => getComments());
}

export default useGetComments;
