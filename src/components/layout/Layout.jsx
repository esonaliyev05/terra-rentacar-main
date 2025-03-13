import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./../footer/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-900 h-100vh">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
