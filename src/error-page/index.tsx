import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import './index.css';
import { FaExclamation } from 'react-icons/fa'
import { MdOutlineArrowBack } from 'react-icons/md'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.error?.message || error.statusText;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    } else if (typeof error === 'string') {
        errorMessage = error;
    } else {
        errorMessage = 'Erro desconhecido';
    }

    return (
        <div id="error-page">
            <h1><FaExclamation color="orange" /> Oops</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i className="text-muted">{errorMessage}</i>
            </p>
            <Link to={"/"} className="voltar"><MdOutlineArrowBack className="arrow-move"/>Voltar ao inicio</Link>
        </div>
    );
}