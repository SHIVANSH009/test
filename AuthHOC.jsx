const withAuth = (Component) => {
    return (props) => {
        console.log('hoc props', props);
        const loginErrorMessage = (
            <div>Please login in order to view this part of the application.</div>
        );
        return (
            <div>
                { props.isauthenticated ? <Component {...props} /> : loginErrorMessage }
            </div>
        )
    }
}

export default withAuth;
