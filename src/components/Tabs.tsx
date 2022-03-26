import { useLocation, useNavigate } from "react-router-dom";

export default function Tabs() {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;

    return (
        <>
            <div className="wrapper z-20">
                <div className="navbar">
                    <div className={`navbar__item -blue ${path.includes('/home') ? 'active' : ''}`} onClick={() => navigate('/home')}>
                        <span className="navbar__icon">
                            <svg className="icon">
                                <use xlinkHref="#icon-home"></use>
                            </svg>
                        </span>
                    </div>
                    <div className={`navbar__item -orange ${path.includes('/categories') ? 'active' : ''}`} onClick={() => navigate('/categories')}>
                        <span className="navbar__icon">
                            <svg className="icon">
                                <use xlinkHref="#icon-cup"></use>
                            </svg>
                        </span>
                    </div>
                    <div className={`navbar__item -navy-blue ${path.includes('/discover') ? 'active' : ''}`} onClick={() => navigate('/discover')}>
                        <span className="navbar__icon">
                            <svg className="icon">
                                <use xlinkHref="#icon-search"></use>
                            </svg>
                        </span>
                    </div>
                    <div className={`navbar__item -yellow ${path.includes('/add') ? 'active' : ''}`} onClick={() => navigate('/add')}>
                        <span className="navbar__icon">
                            <svg className="icon">
                                <use xlinkHref="#icon-plus"></use>
                            </svg>
                        </span>
                    </div>
                    <div className={`navbar__item -purple ${path.includes('/results') ? 'active' : ''}`} onClick={() => navigate('/results')}>
                        <span className="navbar__icon">
                            <svg className="icon">
                                <use xlinkHref="#icon-user"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <svg style={{ 'display': 'none' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <defs>
                    <symbol id="icon-plus" viewBox="0 0 32 32">
                        <title>plus</title>
                        <path d="M32 14.4v3.2c0 0.8-0.64 1.44-1.44 1.44h-11.68v11.52c0 0.8-0.64 1.44-1.44 1.44h-3.040c-0.8 0-1.44-0.64-1.44-1.44v-11.52h-11.52c-0.8 0-1.44-0.64-1.44-1.44v-3.2c0-0.8 0.64-1.44 1.44-1.44h11.68v-11.52c-0.16-0.8 0.48-1.44 1.28-1.44h3.2c0.8 0 1.44 0.64 1.44 1.44v11.68h11.68c0.64-0.16 1.28 0.48 1.28 1.28z"></path>
                    </symbol>
                    <symbol id="icon-search" viewBox="0 0 32 32">
                        <title>search</title>
                        <path d="M30.56 28.64l-5.76-5.76c2.24-2.4 3.52-5.6 3.52-9.12 0-7.52-6.24-13.76-13.76-13.76s-13.76 6.24-13.76 13.76 6.24 13.76 13.76 13.76c2.72 0 5.12-0.8 7.36-2.080l6.080 6.080c0.32 0.32 0.8 0.48 1.28 0.48s0.96-0.16 1.28-0.48c0.8-0.8 0.8-2.080 0-2.88zM4.64 13.76c0-5.44 4.48-9.92 9.92-9.92s9.92 4.48 9.92 9.92-4.48 9.92-9.92 9.92-9.92-4.48-9.92-9.92z"></path>
                    </symbol>
                    <symbol id="icon-user" viewBox="0 0 32 32">
                        <title>user</title>
                        <path d="M16 0.64c4.16 0 7.52 3.36 7.52 7.36 0 4.16-3.36 7.52-7.52 7.52s-7.36-3.36-7.36-7.52c-0.16-4 3.2-7.36 7.36-7.36zM16 2.56c-3.2 0-5.6 2.56-5.6 5.6s2.4 5.6 5.6 5.6 5.76-2.56 5.76-5.76-2.56-5.44-5.76-5.44z"></path>
                        <path d="M16 16.32c-2.24 0-4.16-0.8-5.76-2.4s-2.4-3.68-2.4-5.76c0-2.24 0.8-4.16 2.4-5.76s3.52-2.4 5.76-2.4c4.48 0 8.16 3.68 8.16 8.16s-3.68 8.16-8.16 8.16zM16 1.44c-1.76 0-3.52 0.64-4.8 1.92s-1.92 3.040-1.92 4.8c0 1.76 0.64 3.52 1.92 4.8s2.88 1.92 4.8 1.92c3.84 0 6.72-3.040 6.72-6.72s-3.040-6.72-6.72-6.72zM16 14.56c-3.52 0-6.4-2.88-6.4-6.4 0-1.76 0.64-3.36 1.92-4.48s2.72-1.92 4.48-1.92c3.68 0 6.4 2.72 6.4 6.4 0 1.76-0.64 3.36-1.92 4.48-1.28 1.28-2.88 1.92-4.48 1.92zM16 3.2c-1.44 0-2.56 0.48-3.52 1.44s-1.44 2.080-1.44 3.52c0 2.72 2.24 4.96 4.96 4.96 1.28 0 2.56-0.48 3.52-1.44s1.44-2.24 1.44-3.52c0-2.72-2.24-4.96-4.96-4.96z"></path>
                        <path d="M3.68 30.4c0 1.12-1.76 1.12-1.76 0v-3.68c0-4.64 3.84-8.48 8.48-8.48h11.36c4.64 0 8.48 3.84 8.48 8.48v3.68c0 1.12-1.76 1.12-1.76 0v-3.68c0-3.68-3.040-6.72-6.72-6.72h-11.36c-3.68 0-6.72 3.040-6.72 6.72v3.68z"></path>
                        <path d="M29.28 32c-0.96 0-1.6-0.64-1.6-1.6v-3.68c0-1.6-0.64-3.040-1.76-4.16s-2.56-1.76-4.16-1.76h-11.36c-1.6 0-3.040 0.64-4.16 1.76s-1.76 2.56-1.76 4.16v3.68c0 0.96-0.64 1.6-1.6 1.6s-1.6-0.64-1.6-1.6v-3.68c0-2.4 0.96-4.8 2.72-6.56 1.6-1.6 3.84-2.56 6.4-2.56h11.36c2.4 0 4.8 0.96 6.56 2.72s2.72 4 2.72 6.56v3.52c-0.16 0.96-0.8 1.6-1.76 1.6zM10.4 19.36h11.36c1.92 0 3.84 0.8 5.28 2.24s2.24 3.2 2.24 5.28v3.52c0 0 0 0.16 0.16 0.16s0.16-0.16 0.16-0.16v-3.68c0-2.080-0.8-4-2.24-5.44s-3.36-2.24-5.44-2.24h-11.52c-2.080 0-4 0.8-5.44 2.24s-2.24 3.36-2.24 5.44v3.68c0 0 0 0.16 0.16 0.16s0-0.16 0-0.16v-3.68c0-1.92 0.8-3.84 2.24-5.28 1.44-1.28 3.2-2.080 5.28-2.080z"></path>
                    </symbol>
                    <symbol id="icon-cup" viewBox="0 0 122.88 122.54">
                        <title>cup</title>
                        <path d="M4.69,0H46.22a4.71,4.71,0,0,1,4.69,4.69V46a4.69,4.69,0,0,1-4.69,4.69H4.69a4.65,4.65,0,0,1-3.31-1.38l-.09-.09A4.67,4.67,0,0,1,0,46V4.69A4.71,4.71,0,0,1,4.69,0ZM89.44,61.94a26.56,26.56,0,0,1,10.18,2l.07,0a26.61,26.61,0,0,1,15.25,32.16,26.18,26.18,0,0,1-2.7,6.11l10.3,11.24a1.27,1.27,0,0,1-.07,1.8l-7.57,6.9a1.27,1.27,0,0,1-1.79-.07l-9.86-10.85a26.36,26.36,0,0,1-6.1,2.74,26.87,26.87,0,0,1-7.71,1.13,26.51,26.51,0,0,1-10.17-2l-.07,0A26.64,26.64,0,0,1,64.85,78.37l0-.07A26.6,26.6,0,0,1,89.44,61.94Zm15,11.59a21.38,21.38,0,0,0-6.89-4.61l-.06,0a21.22,21.22,0,0,0-23.07,4.64l-.07.07a21.25,21.25,0,0,0-4.54,6.83l0,.06a21.32,21.32,0,0,0-1.58,8.06,21.26,21.26,0,0,0,29.35,19.62,21.54,21.54,0,0,0,6.89-4.61l.07-.07a21.09,21.09,0,0,0,4.54-6.83l0-.06a21.35,21.35,0,0,0,0-16.17,21.34,21.34,0,0,0-4.62-6.9ZM4.69,63.2H46.22a4.71,4.71,0,0,1,4.69,4.7v41.34a4.68,4.68,0,0,1-4.69,4.69H4.69A4.69,4.69,0,0,1,0,109.24V67.9a4.71,4.71,0,0,1,4.69-4.7ZM68.78,0h41.53A4.71,4.71,0,0,1,115,4.69V46a4.71,4.71,0,0,1-4.69,4.69H68.78A4.71,4.71,0,0,1,64.09,46V4.69a4.69,4.69,0,0,1,1.37-3.31l.1-.09A4.67,4.67,0,0,1,68.78,0Z" />
                    </symbol>
                    <symbol id="icon-home" viewBox="0 0 111.1 122.9">
                        <title>home</title>
                        <path d="M45,28.7c-10.1,0-13.2,0.1-23.4,0.1c-1.2,0-2.3,0.1-3.3,0.3c-1.1,0.2-2.1,0.5-3,0.9c-1,0.4-1.9,0.9-2.8,1.5 c-0.9,0.6-1.7,1.3-2.5,2.1c-0.8,0.8-1.5,1.6-2.1,2.5c-0.6,0.9-1.1,1.8-1.5,2.8c-0.4,1-0.7,2-0.9,3c-0.2,1.1-0.3,2.2-0.3,3.3v33.3 c0,1.2,0.1,2.3,0.3,3.3c0.2,1.1,0.5,2.1,0.9,3c0.4,1,0.9,1.9,1.5,2.8c0.6,0.9,1.3,1.7,2.1,2.5l0,0c0.8,0.8,1.7,1.5,2.6,2.1 c0.9,0.6,1.8,1.1,2.8,1.5c1,0.4,2,0.7,3,0.9c1.1,0.2,2.2,0.3,3.3,0.3h12.6c0.4,0,0.8,0.1,1.1,0.3c0.3,0.2,0.6,0.4,0.9,0.7l0,0 c1,1.3,2,2.6,3.1,3.8c1.1,1.2,2.2,2.4,3.5,3.5c1.2,1.1,2.4,2.2,3.8,3.2c1.3,1,2.7,2,4,2.9c1.3,0.9,2.7,1.7,4.2,2.5 c1.4,0.8,2.9,1.5,4.4,2.2c0.2,0.1,0.4,0.1,0.5,0c0.3-0.2,0.4-0.5,0.2-0.8c-0.3-0.5-0.5-0.9-0.8-1.4c-0.2-0.5-0.5-0.9-0.7-1.4l0,0 c-0.4-1-0.8-1.9-1.2-2.9c-0.4-1-0.8-2-1.1-3.1c-0.3-1-0.7-2-1-3c-0.3-1-0.6-2-0.9-3.1c-0.1-0.3-0.1-0.6-0.1-0.9 c0-0.7,0.3-1.3,0.7-1.8l0,0c0.5-0.5,1.1-0.8,1.8-0.8h14.7c1.2,0,2.3-0.1,3.3-0.3c1-0.2,2-0.5,3-0.9l0,0c0.9-0.4,1.9-0.9,2.7-1.5 c0.9-0.6,1.8-1.3,2.6-2.2l0,0c0.8-0.8,1.5-1.6,2.1-2.5c0.6-0.9,1.1-1.8,1.5-2.8c0.4-1,0.7-2,0.9-3c0.2-1.1,0.3-2.2,0.3-3.3v-6.8 c0-3.4,4.4-3.4,5.2-1v7.8c0,1.5-0.1,2.9-0.4,4.3c-0.3,1.4-0.7,2.7-1.2,4.1c-0.5,1.3-1.2,2.5-2,3.7c-0.8,1.2-1.7,2.3-2.8,3.3 c-1,1.1-2.2,2-3.3,2.8c-1.2,0.8-2.4,1.4-3.6,2l0,0c-1.3,0.5-2.7,0.9-4,1.2c-1.4,0.3-2.8,0.4-4.3,0.4H61c-0.1,0-0.1,0-0.2,0 c-0.3,0.1-0.5,0.4-0.4,0.7l0,0c0.2,0.6,0.4,1.3,0.6,2l0,0c0.3,0.9,0.7,1.9,1.1,2.8c0.4,0.9,0.7,1.8,1.1,2.6c0,0,0,0.1,0,0.1 c0.4,0.9,0.8,1.7,1.3,2.6c0.5,0.8,1.1,1.7,1.7,2.5c0.6,0.8,1.3,1.6,2.1,2.5l0,0c0.8,0.8,1.6,1.7,2.6,2.4c0.5,0.5,0.8,1.1,0.9,1.8 c0,0.6-0.2,1.3-0.6,1.8c-0.3,0.4-0.7,0.6-1.2,0.7c-0.4,0.1-0.9,0.1-1.4,0c-1.9-0.5-3.8-1.1-5.6-1.7c-1.8-0.6-3.6-1.3-5.3-2.1 c-1.7-0.7-3.4-1.6-5-2.4c-1.6-0.9-3.2-1.8-4.7-2.8l0,0c-1.5-1-3-2-4.4-3.1c-1.4-1.1-2.8-2.3-4.1-3.5l0,0c-1.1-1-2.2-2.1-3.2-3.3 c-1-1.1-2.1-2.3-3-3.5c-0.1-0.2-0.3-0.3-0.5-0.3H21.6c-1.5,0-2.9-0.1-4.3-0.4c-1.4-0.3-2.7-0.7-4-1.2l0,0c-1.3-0.5-2.5-1.2-3.7-2 c-1.2-0.8-2.3-1.7-3.3-2.7c-1.1-1.1-2-2.2-2.8-3.3c-0.8-1.2-1.5-2.4-2-3.7c-0.5-1.3-0.9-2.6-1.2-4C0.1,81.4,0,80,0,78.5V45 c0-1.5,0.1-2.9,0.4-4.3c0.3-1.4,0.7-2.7,1.2-4c0.5-1.3,1.2-2.5,2-3.7c0.8-1.2,1.7-2.3,2.8-3.3c1.1-1.1,2.2-2,3.3-2.8 c1.2-0.8,2.4-1.4,3.6-2l0,0c1.3-0.5,2.7-0.9,4.1-1.2c1.4-0.3,2.8-0.4,4.3-0.4c10.5,0,14,0,24.5,0C48.7,24,48.8,28.7,45,28.7 L45,28.7L45,28.7z M58.1,33.9c-0.5,1-0.6,2.4-0.5,3.7c0.1,0.6,0.2,1.2,0.3,1.8c0.2,0.6,0.4,1.3,0.6,1.9c0.3,0.6,0.6,1.2,0.9,1.8 c0.3,0.5,0.7,1.1,1.1,1.5c1,1.1,2.1,2,3.4,2.3c2.3,0.7,6.3-1.3,8.4-2l0,0c0.4-0.1,0.9-0.1,1.2,0.1c0.4,0.2,0.7,0.5,0.9,0.9 c0,0.1,0,0.1,0.1,0.2c0.1,0.4,0.3,0.8,0.4,1.2c1,3,1.9,5.9,3,8.2c0.1,0.2,0.2,0.5,0.3,0.7l0,0.1c0.3,0.7,0.7,1.4,1.1,2.1 c0.4,0.7,0.7,1.2,1.1,1.6c0.2,0.2,0.5,0.4,0.8,0.4c0.3,0,0.7-0.2,1.3-0.7c0.2-0.3,0.5-0.5,0.8-0.8l0,0c0.2-0.2,0.5-0.5,0.9-0.9 c1.1-1,2.7-2.5,3.3-3.3l-0.3-0.1c-3.4-1.1-3.2-2.9-3-4.5l0,0c0.1-0.5,0.1-1,0-1.3l0,0c0-0.1-0.1,0-0.3-0.2 c-0.1-0.1-0.2-0.1-0.3-0.2c-0.5-0.4-0.8-0.8-1.1-1.3c-0.3-0.6-0.4-1.2-0.5-1.8c-0.1-0.6,0-1.3,0.1-1.9c0.1-0.8,0.3-1.5,0.5-2.1l0,0 c0.1-0.3,0.2-0.5,0.4-0.7c0.2-0.2,0.5-0.3,0.8-0.4l0,0c7-1.6,10.6-0.3,14,0.9c0.5,0.2,1.1,0.4,1.6,0.6c-1.5-1.5-2.8-3.2-4.1-5.1 c-2.1-3-3.9-6.3-5.4-9.7c-1.6-3.4-2.8-6.9-3.7-10.2c-0.6-2.3-1.1-4.6-1.3-6.6c-1.5,2.6-3.6,5.7-6.6,8.9 C75.5,21.6,59.2,31.4,58.1,33.9L58.1,33.9z M99.9,26.2c0.1,1.3-0.3,3.1-1,4.6c-0.5,1.1-1.1,2-1.7,2.5c1.3,2,2.8,3.9,4.3,5.5 c1.5,1.6,3,2.9,4.6,3.9l0.1,0c0,0,0.1,0,0.2,0l0,0c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2-0.1,0.2-0.1c0.3-0.3,0.5-0.7,0.6-1.2 c0.2-0.6,0.3-1.2,0.3-1.9c0.1-2.2-0.3-4.9-1.1-7.9c-0.9-3.3-2.3-6.9-3.9-10.4c-1.6-3.4-3.5-6.8-5.4-9.6c-1.8-2.7-3.7-5-5.4-6.5 c-0.6-0.6-1.3-1-1.8-1.3c-0.5-0.3-0.9-0.4-1.3-0.4l-0.1,0c-0.1,0.1-0.2,0.2-0.3,0.4l0,0c-0.6,1.5-0.6,3.9-0.2,6.8 c0.4,2.9,1.3,6.2,2.5,9.6c0.3-0.1,0.5-0.1,0.9-0.1c1.1-0.1,2.5,0,3.9,0.5c1.4,0.5,2.8,1.4,3.6,2.9C99.5,24.1,99.8,25,99.9,26.2 L99.9,26.2z M106,46.1c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1l-0.5-0.1c-1.2-0.1-2.5-0.4-3.8-0.6l-0.1,0 c-1.4-0.3-2.6-0.7-3.8-1.2c-2.8-1.1-5.8-2.3-11.5-1.1c-0.1,0.3-0.1,0.5-0.1,0.8c0,0.3-0.1,0.7,0,1c0,0.2,0.1,0.4,0.1,0.6 c0,0.1,0.1,0.2,0.1,0.2l0.1,0.1c0.8,0.6,1.2,0.9,1.5,1.7c0.3,0.7,0.2,1.4,0.2,2.1c-0.1,0.7-0.1,1.4,0.7,1.7l0,0c1,0.3,2,0.7,2.6,2 c0.1,0.1,0.1,0.3,0.2,0.4l0,0c0,0.1,0,0.3,0,0.4l0,0c-0.2,1.9-3,4.6-4.6,6.1c-0.3,0.3-0.6,0.6-0.8,0.8l-0.1,0.1 c-0.2,0.2-0.4,0.4-0.6,0.6L84.8,62c-1.3,1.3-2.6,1.8-3.7,1.8c-1.2,0-2.2-0.6-3.1-1.5c-0.6-0.6-1.1-1.4-1.6-2.2 c-0.4-0.8-0.8-1.6-1.2-2.5c-0.1-0.2-0.2-0.5-0.3-0.7c-1.1-2.4-2.1-5.2-3-8.2c-2.9,1.2-5.6,2.5-8.9,1.5c-1.9-0.6-3.5-1.8-4.9-3.3 l0,0c-0.5-0.6-1-1.3-1.4-2c-0.4-0.7-0.8-1.4-1.1-2.2c-0.3-0.8-0.6-1.5-0.8-2.3c-0.2-0.8-0.4-1.6-0.4-2.4c-0.2-2,0-3.9,0.7-5.5 c2.1-4.6,15.9-10.6,21.3-16.6c3.6-4.1,5.7-7.9,7.2-10.7l0-0.1c0.9-1.6,1.6-2.9,2.3-3.8c0.2-0.2,0.4-0.4,0.6-0.6 c0.2-0.2,0.4-0.3,0.7-0.5C87.5,0.2,87.7,0.1,88,0c0.3,0,0.6,0,0.9,0c0.8,0.1,1.6,0.3,2.5,0.7c0.9,0.4,1.7,1,2.6,1.8 c1.9,1.7,4,4.1,6,7c2.1,3,4,6.5,5.7,10.1c1.7,3.7,3.2,7.5,4.2,11.1c0.9,3.3,1.3,6.3,1.2,8.8l0,0c-0.1,1.1-0.3,2-0.6,2.9 c-0.3,0.9-0.7,1.6-1.3,2.3l-0.1,0.1L109,45c-0.4,0.3-0.8,0.5-1.2,0.7l0,0c-0.4,0.2-0.8,0.3-1.1,0.3l0,0c-0.1,0-0.3,0-0.4,0 L106,46.1L106,46.1z M65.7,80.1c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4l-25.7-0.4l-4.9-0.3c-1.3-0.1-2.5,0.9-2.6,2.3 c-0.1,1.3,0.9,2.5,2.3,2.6l4.9,0.3C39.8,79.7,63.5,80,65.7,80.1L65.7,80.1L65.7,80.1z M58,64.9c1.3,0,2.4-1.1,2.4-2.4 c0-1.3-1.1-2.4-2.4-2.4H23.3c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4H58L58,64.9L58,64.9z M47.2,50.4c1.3,0,2.4-1.1,2.4-2.4 s-1.1-2.4-2.4-2.4H23.3c-1.3,0-2.4,1.1-2.4,2.4c0,1.3,1.1,2.4,2.4,2.4H47.2L47.2,50.4L47.2,50.4z" />
                    </symbol>
                </defs>
            </svg>
        </>
    );
}