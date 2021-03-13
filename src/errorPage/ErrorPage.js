import React from 'react'
import './ErrorPage.css';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
    return (
            <div className="errorPage">
                <div className="errorPage_content">
                    <h1>404</h1>
                    <h4>Oops! Page Not Found</h4>
                    <p>Sorry, the page you were looking for doesn't exist. If you think something is wrong, try again.</p>
                    <button className="button"><Link to="/">Go to Home </Link></button>
                </div>
            </div>
    )
}


