

export const roleRedirect=(history,role)=>{


// const {role}=authState
switch(role){
    case "admin":return history.push("/admin/dashboard");
    case "customer":return history.push("/dashboard");
    default:break
}
}