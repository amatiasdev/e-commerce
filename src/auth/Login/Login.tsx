import React, { Fragment } from "react";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = ({ message, setUser }: any): JSX.Element => 
    <div>
        <AuthLayout setUser={setUser} />
    </div>;
