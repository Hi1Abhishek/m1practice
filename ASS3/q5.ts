enum UserRole{
    Admin ="Admin",
    Editor ="Editor",
    Viewer ="Viewer"
}

function printRoleMessage(role: UserRole) :void{
        switch(role){
            case UserRole.Admin:
                console.log("you have full access")
                break;
            case UserRole.Editor:
                console.log("you have Edit access")
                break;
            case UserRole.Viewer:
                console.log("you have view access")
                break;
            default:
                console.log("No role found")
        }
}

printRoleMessage(UserRole.Admin)
printRoleMessage(UserRole.Editor)
printRoleMessage(UserRole.Viewer)