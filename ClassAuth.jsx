import { Component } from 'react';

const withClassAuth = (WrappedComponent) => {
    return class extends Component {
        render() {
            console.log('Class component style HOC props', this.props);
            const loginErrorMessage = (
                <div>Please login in order to view this part of the application.</div>
            );
            return (
                <div>
                    { !this.props.isauthenticated ? <WrappedComponent {...this.props} /> : loginErrorMessage }
                </div>
            )
        }
    }
}

export default withClassAuth;
