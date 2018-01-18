
const INITIAL_STATE ={
                    name:"",
                    email:""
                    };
export default function(state=INITIAL_STATE,action){
    switch(action.type)
    {
        case "USER_LOGIN_2":
            console.log("Meme action",action.payload.user);
            return action.payload.user;
            break;
            
    }
    return state;
}

