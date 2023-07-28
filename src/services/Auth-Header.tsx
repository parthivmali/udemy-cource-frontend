export const AuthHeader = () => {
    const userString = localStorage.getItem("user")
    const user = userString ? JSON.parse(userString) : null 
    console.log("user =>",user);
    
    if(user){
        return {Authorization : `Bearer ${user}`}
    }else{
       return {}
    }
}