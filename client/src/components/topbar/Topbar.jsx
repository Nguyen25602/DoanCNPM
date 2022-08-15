import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { logoutCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Dropdown, Menu, Space, Button } from "antd";
import 'antd/dist/antd.css';

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logoutHandler = (e) => {
    e.preventDefault();
    logoutCall(
      user,
      dispatch
    );
    console.log(user)
  };
  const menu = (
    <Menu
      items={[
        {
          label: <a>{user.username}</a>,
          key: '0',
        },
        {
          label: <Link to={`/profile/${user.username}`}>Profile</Link>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <Button type="primary" onClick={logoutHandler}>
            Logout
          </Button>,
          key: '3',
        },
      ]}
    />
  );
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Nhật Ký Online</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Tìm kiếm bạn bè hoặc video."
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Trang Chủ</span>
          <Link to={`/profile/${user.username}`}>
            <span className="topbarLink">Dòng Thời Gian</span>
          </Link>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Link to="/messenger" style={{ textDecoration: "none" }}>
              <Chat className="messagechat" />
              <span className="topbarIconBadge">2</span>
            </Link>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Space direction="vertical">
          <Space wrap>
            <Dropdown overlay={menu} placement="bottomLeft">
              <img src={
                user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.png"
              } alt="" className="topbarImg" />
            </Dropdown>
          </Space>
        </Space>
      </div>
    </div>
  );
}