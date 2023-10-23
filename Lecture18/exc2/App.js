class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header/>
                <Navigation/>
                <div class="row">
                    <Sidebar/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
