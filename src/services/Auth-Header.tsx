export const AuthHeader = () => {
    const userString = localStorage.getItem("user")
    const user = userString ? JSON.parse(userString) : null

    if(user && user.token){
        return {Authorization : `Bearer ${user.token}`}
    }else{
       return {}
    }
}