class Message extends React.Component {
    render() {
        return (
            <div>
            <small>{this.props.user}:</small>
            <p>{this.props.content}</p>
            <hr/>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        return(
            <div class="main">
                <h2>Live chat</h2>
                <h5>Thia is just a demo chats, Oct 31, 2022</h5>
                <Message user="Julio Masengi" content="Hi, how r u bot"/>
                <Message user="Chatbot" content="Hi, human, im okay"/>
                <Message user="Julio Masengi" content="good, are u human?"/>
                <Message user="Chatbot" content="im not human. im your virtual bot"/>
            </div>
        );
    }
}