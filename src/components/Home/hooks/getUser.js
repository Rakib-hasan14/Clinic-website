import { useContext } from 'react';
import { AuthContext } from './AuthContext';



const useAthentication = () => {
    return useContext(AuthContext);
};

export default useAthentication;