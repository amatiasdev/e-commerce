import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Typography } from "antd";
import logo from "../assets/aldos_logo_w.png";
import "../styles/Navbar.styles.css";

const { Text } = Typography;

export const Navbar = ({ message }: any): JSX.Element => (
  <div className="navbar-container">
    <div className="navbar-items">
      <div className="left-icons">
        <MenuOutlined style={{ fontSize: "35px", marginRight: "50px" }} />
        <img src={logo} alt="" />
      </div>
      <div className="right-icons">
        <Badge style={{ marginBottom: "20px" }} count={2}>
          <Avatar
            style={{ marginBottom: "20px" }}
            size="large"
            icon={<UserOutlined />}
          />
        </Badge>
        <Text style={{ color: "#ffffff", margin: "0 0 20px 15px", fontSize: "1.2rem" }}>Mi cuenta</Text>
        <Badge style={{ marginTop: "15px" }} count={5}>
          <ShoppingCartOutlined
            style={{
              color: "#ffffff",
              fontSize: "40px",
              marginLeft: "50px",
              marginTop: "15px",
            }}
          />
        </Badge>
      </div>
    </div>
  </div>
);
