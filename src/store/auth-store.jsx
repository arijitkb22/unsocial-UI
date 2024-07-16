import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(
);

export function AuthProvider({ children }) {

  
  const [user, setUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    console.log([userData]);
    if(user.length){
      user?.forEach(u=>{
        if(u.userName === userData.userName){
          if(u.password === userData.password){
            setIsLoggedIn(true);
          } else{
            alert("Wrong Password, Try again");
          } 
        }else {
            alert("UserName is not Exists, please register yourself");
        }
      })
    } else{
      alert("Please Register yourself!!");
    }
    
  };

  const register = (payload) =>{
    const users = [...user];
    users.push(payload);
    setUser(users);
    console.log(user)
  }

  return (
    <AuthContext.Provider value={{ user, login, register, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth (){
  return useContext(AuthContext);
};
