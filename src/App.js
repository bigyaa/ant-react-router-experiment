import React, {Fragment, useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Steps, Divider, Row, Col} from 'antd';
import {Link} from 'react-router-dom';
import WrappedLoginForm from "./components/LoginForm";
import ContentBlank from "./components/ContentBlank";
import ContentActive from "./components/ContentActive";

function App() {
    const [current, setCurrent] = useState(0);
    const onChange = e => {
        setCurrent(e);
    };
    const {Step} = Steps;

    return (
        <Fragment>
            <BrowserRouter>
                <Steps current={current} onChange={e => {
                    onChange(e)
                }}>
                    <Step title="First Link" description="I always come first.">
                    </Step>
                    <Step title="Second Link" description="I always come second.">
                    </Step>
                    <Step title="Third Link" description="I always come third.">
                    </Step>
                </Steps>

                <Divider/>
                <Row style={{textAlign:"center"}}>
                    <Col span={8}>
                        <Link to={'/'} onClick={() => {
                            setCurrent(0);
                        }}> Link 1 </Link>
                    </Col>
                    <Col span={8}>
                        <Link to={'/shiny'} onClick={() => {
                            setCurrent(1);
                        }}> Link 2 </Link>
                    </Col>
                    <Col span={8}>
                        <Link to={'/blank'} onClick={() => {
                            setCurrent(2);
                        }}> Link 3 </Link>
                    </Col>
                </Row>
                <Divider/>

                <Route exact path='/' component={WrappedLoginForm}/>
                <Route path='/blank' component={ContentBlank}/>
                <Route exact path='/shiny' component={ContentActive}/>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
