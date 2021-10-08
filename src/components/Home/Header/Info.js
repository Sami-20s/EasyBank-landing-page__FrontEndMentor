import React from "react";

const Info = ({ children }) => {
    return (
        <div className="header__wrapper__info padding-for-desktop padding-sections">
            <h1>Next generation digital banking</h1>
            <p>
                Take your financial life online. Your Easybank account will be a
                one-stop-shop for spending, saving, budgeting, investing, and
                much more.
            </p>
            {children}
        </div>
    );
};

export default Info;
