import { Link, useNavigate } from 'react-router-dom';
import errorPage from '../..//assets/banner/glitch-error-404-page-background_23-2148091214.jpg'
const ErrorPage = () => {
    const navLink = useNavigate();
    return (
        <div>
            <div className='min-h-screen max-w-7xl mx-auto'>
                <img src={errorPage} alt="" />
            </div>
            <Link className='text-4xl font-bold text-green-300' to={"/"}>HOME</Link>
        </div>
    );
};

export default ErrorPage;