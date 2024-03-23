import React from "react";
import { Link } from "react-router-dom";
// được sứ dụng thay thẻ tag a  được sử dụng để tạo các liên kết giữa các thành phần trong ứng dụng React mà không gây tải lại trang hoặc chuyển hướng trình duyệt.
import "./Header.css";
const Header = () => {
  return (
   <header>
     <div className="flex gap-5 justify-between px-5 py-4 w-full text-sm bg-blue-600 max-md:flex-wrap max-md:max-w-full">
     <Link to="/">
     <img
        src="./images/logo.png"
        className="shrink-0 max-w-full aspect-[8.33] w-[330px]"
        alt=""
      />
     </Link>
      <div className="flex gap-5 my-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-5 my-auto font-medium text-white leading-[155%] max-md:flex-wrap">
          <div className="grow leading-[153.6%]">
            <Link className="" to="/order-management">
              Quản lý đơn hàng
            </Link>
          </div>
          <div className="flex-auto">
            <Link className="" to="/ticket-sales">
              Mở bán vé trên Vexere
            </Link>
          </div>
          <div className="flex-auto">
            <Link className="" to="/become-partner">
              Trở thành đối tác
            </Link>
          </div>
        </div>
        <div className="flex flex-auto gap-4 font-semibold text-blue-950">
          <div className="justify-center items-start px-9 py-3 bg-white rounded-md border border-solid border-neutral-200 leading-[143%] max-md:pl-5">
            Hotline 24/7
          </div>
          <div className="justify-center px-5 py-3 text-center bg-white rounded-md border border-solid shadow-sm border-neutral-200 leading-[146%]">
            Đăng nhập
          </div>
        </div>
      </div>
    </div>
   </header>
  );
};

export default Header;
