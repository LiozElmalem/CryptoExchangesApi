import React from 'react';

class ErrorBoundary extends React.Component {

    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        })
    }

    render() {
        return (
            <h1>{this.state.hasError ? this.state.errorMessage : this.props.children}</h1>
        );
    }
}

export default ErrorBoundary;