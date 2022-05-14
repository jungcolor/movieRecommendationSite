import * as React from "react";
import { Routes, Route } from "react-router-dom";

// sub page
import LandingContainer from "../components/views/landing/LandingContainer";
import LoginContainer from "../components/views/user/login/LoginContainer";
import RegisterContainer from "../components/views/user/register/RegisterContainer";
import CommentContainer from "../components/sections/comment/CommentContainer";


function Router() {
    return (
        <Routes>
            <Route path="*" element={<LandingContainer />} />
            <Route path="/comment" element={<CommentContainer />} />
            <Route path="/user/login" element={<LoginContainer />} />
            <Route path="/user/register" element={<RegisterContainer />} />
        </Routes>
    );
}

export default Router;
