"use strict";

class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <header><Header/></header>
                <section>
                    <nav><Sidebar/></nav>
                    <article><Content/></article>
                </section>
                <footer><Footer/></footer>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));