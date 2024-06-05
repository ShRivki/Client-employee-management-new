
import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/authService';

const LogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logoutUser());
        navigate('/login');
    }, [dispatch, navigate]);

    return null;
};

export default LogOut;
