import {API} from "../../backend"
//API MEANS  http://localhost:8000/api/

export const signup = async user =>{
    try {
        const response = await fetch(`${API}/signup`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export const signin = async user =>{
    try {
        const response = await fetch(`${API}/signin`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}


export const authenticate = (data,next)=>{
    if(typeof window !== "undefiend"){
        localStorage.setItem('jwt',JSON.stringify(data))
        next();
    }
}
export const signout = async next =>{
    if(typeof window !== "undefiend"){
        localStorage.removeItem('jwt')
        next();
    }
    try {
        const response = await fetch(`${API}/signout`, {
            method: "GET",
        });
        console.log("signout success...");
        console.log(response.json())
    } catch (err) {
        console.log(err);
    }
}

export const isAuthenticated = ()=>{
    if(typeof window === "undefiend"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem('jwt'))
    }else{
        return false;
    }
}