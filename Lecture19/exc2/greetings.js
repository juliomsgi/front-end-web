function UserGreeting(props) {
    return <h1>Welcome Back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}