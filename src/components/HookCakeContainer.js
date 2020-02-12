import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

const HookCakeContainer = (props) => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cake - {numOfCakes} *** HOOKS</h1>
      <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}
 
export default HookCakeContainer;