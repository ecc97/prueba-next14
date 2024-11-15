import LoginForm from "../../organisms/auth/LoginForm"
import './auth.scss'

export const LoginTemplate = () => {
    return (
        <div className="min-h-screen flex items-center justify-center auth bg-gray-100">
            <div className="w-full max-w-lg  p-6 bg-white rounded-lg shadow-md text-black">
                <LoginForm />
            </div>
        </div>
    )
}