import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Steps, Divider} from 'antd';
import {Link} from 'react-router-dom';
import Content from "./components/Content";
import ContentBlank from "./components/ContentBlank";
import ContentActive from "./components/ContentActive";

class App extends React.Component {
    state = {
        current: 0,
    };

    onChange = e => {
        this.setState({current: e});
    }

    render() {
        const {Step} = Steps;
        const {current} = this.state;

        return (
            <>
                <BrowserRouter>
                    <Divider/>
                    <Steps current={current} onChange={this.onChange}>
                        <Step title="First" description="I always come first.">
                            <Link to='/blank' />
                        </Step>
                        <Step title="Second" description="I always come second.">
                            <Link to='/' />
                        </Step>
                        <Step title="Third" description="I always come third.">
                            <Link to='/shiny' />
                        </Step>
                    </Steps>

                    <Route exact path='/' component={Content} />
                    <Route path='/blank' component={ContentBlank} />
                    <Route exact path='/shiny' component={ContentActive} />

                </BrowserRouter>

            </>
        );
    }
}

export default App;
