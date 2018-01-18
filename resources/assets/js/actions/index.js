export const userLogin = (user)=>{
  console.log("Login Submit : ",user);
  
  return{
        type: "USER_LOGIN_2",
        payload: {user:user}
      }
};