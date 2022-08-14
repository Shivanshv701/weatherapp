import React, {useContext} from 'react'
import { useNavigate} from "react-router-dom"
import { UserContext } from './App';

function Protected(props) {
    const {state, dispatch} = useContext(UserContext)
    const {Comp} = props;
    const nav=useNavigate();
    
        if(state)
    {
    
     nav('/login');
      
    }
    
    
  return (
    <div>
        {/* <h1>{state}</h1> */}
        <Comp />
    </div>
  )
}

export default Protected