import "../../styles/Login.styles.css";
import { Button, Form, Input } from "antd";
import cart from "../../assets/cart-logo.svg";
import { useNavigate } from "react-router-dom";

export const AuthLayout = ({ message, setUser }: any): JSX.Element => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    if(values.username==='1' && values.password==='1'){
      const userCurrent = {
        email: values.username,
        token: "adjshdia7ey12ikejmashi8yawuhkdjsm"
      }
      setUser(userCurrent);
      navigate('main');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return <div className="layout-container">
          <div className="logo-wrapper">
            <img src={cart} />
          </div>
          <div className="form-wrapper">
            <div className="form-container">
              <h1>Iniciar sesión</h1>
              <Form
                name="login"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <span className="input-label">Usuario:</span>
                <Form.Item
                  // label="Username"
                  name="username"
                  rules={[{ required: true, message: "Ingresa tu nombre o correo" }]}
                >
                  <Input />
                </Form.Item>
                <span className="input-label">Password:</span>
                <Form.Item
                  // label="Password"
                  name="password"
                  rules={[{ required: true, message: "Ingresa tu contraseña" }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button type="primary" style={{ width: "100%" }} htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
}
