import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';

function LoginForm(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                alert(`Received values of form:${"\n"}Username= ${values.username}${"\n"}Password= ${values.password}`);
            }
        });
    };

    const {getFieldDecorator} = props.form;
    return (
        <Form onSubmit={handleSubmit} style={{textAlign: "center", width: "50%", margin: "0 auto"}}>
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'},
                        {min: 3, message: 'Too Short!'}],
                })(
                    <Input
                        prefix={<Icon type="user"/>}
                        placeholder="Username"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                })(
                    <Input
                        prefix={<Icon type="lock"/>}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <br/>
                <Button type="primary" htmlType="submit">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
}

const WrappedLoginForm = Form.create({name: 'normal_login'})(LoginForm);

export default WrappedLoginForm;
