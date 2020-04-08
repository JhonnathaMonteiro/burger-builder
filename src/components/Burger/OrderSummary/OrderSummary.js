import React, {useEffect} from 'react'

import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

  useEffect(()=>{
    console.log('UseEffectPuro');
  })

  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{ igKey }</span>: {props.ingredients[igKey]}
      </li>);
    });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ ingredientSummary }</ul>
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
    </React.Fragment>
  )
}

export default OrderSummary;