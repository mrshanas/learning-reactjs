import React from "react";
import { useSignOut } from "react-auth-kit";

const Shop: React.FC = () => {
  const signout = useSignOut();
  const logout = () => signout();

  return (
    <div>
      Welcome to your shop <button onClick={logout}>Sign Out</button>
    </div>
  );
};

export default Shop;
