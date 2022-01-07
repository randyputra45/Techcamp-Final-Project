import { Redirect, Route } from "react-router-dom";
import { UserContext } from '../context/userContext';
import { useContext } from "react";
import Loading from "../components/Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isLoading } = useContext(UserContext); 
  console.log(user, isLoading);

  if(isLoading) {
    return <Loading/>
  }

  if(user){
    return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
  } else {
    return <Redirect to='/login'/> 
  }
};

export default PrivateRoute;