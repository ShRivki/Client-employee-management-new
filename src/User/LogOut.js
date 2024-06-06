import { useEffect } from 'react'
import { logOut } from '../services/userService'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const LogOut= () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        dispatch(logOut(navigate))
    }, []);
    return null;
}
export default LogOut
