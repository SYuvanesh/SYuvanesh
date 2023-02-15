const Incre = (value) => {
    return {
      type: "Increament",
      payload: value,
    };
  };

const UserID=(value)=>{
  return{
    type:'User_ID',
    payload:value,
  }
} 

const currUser=(value)=>{
  return{
    type:'Curr_User',
    payload:value,
  }
} 
  
const Prod_List=(value)=>{
  return{
    type:'Prod_List',
    payload:value,
  }
} 

const Sel_Index=(value)=>{
  return{
    type:'Sel_Index',
    payload:value,
  }
} 

  
  export {
    Incre,
    UserID,
    currUser,
    Prod_List,
    Sel_Index
  }