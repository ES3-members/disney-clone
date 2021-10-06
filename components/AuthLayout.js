import { useFetchUser } from '../lib/user'

export default function AuthLayout({ children }) {
    const { user, loading } = useFetchUser()
    if(!loading && !user){
        window.location.href = '/api/login'
        return(
            <p>Loading...</p>
        )
    }else{
        return (
            <>
              {user && (
                <>
                <main>{children}</main>
                </>
              )}
            </>
        )
    }
}