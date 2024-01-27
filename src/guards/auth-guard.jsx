import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function AuthGuard() {
    const loginStore = useSelector(store => store.user);
    return loginStore.profile ? <Outlet /> : <Navigate replace to={'/'}></Navigate>
}

export default AuthGuard;