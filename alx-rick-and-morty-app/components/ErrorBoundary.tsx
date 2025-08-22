//Create an ErrorBoundary class component. It is stored in the components directory. 
//It is implemented by extending the React.Component

import React, { ReactNode } from "react";
import * as Sentry from '@sentry/react';

interface State {
    hasError: boolean
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends React.Component< ErrorBoundaryProps, State> {
    constructor (props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError : false}
    }

    static getDerivedStateFromError (error : Error) : State {
        return { hasError: true };
    }

    //componentDidCatch is used to catch errors or exceptions generated in descendant components.
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log( error, errorInfo);
        Sentry.captureException(error, { extra: { ...errorInfo } });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>Oops, there is an error!</h2>
                    <button onClick={() => this.setState({hasError : false})}>
                        Try again?
                    </button>
                </div>
            )
        }

        return this.props.children;
    } 
} ;

export default ErrorBoundary;