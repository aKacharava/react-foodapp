import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = function(props) {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const convertedAmount = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      convertedAmount < 1 ||
      convertedAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.onAddToCart(convertedAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isAmountValid && <p>Please enter a valid amount between 1-5.</p>}
    </form>
  );
}

export default MealItemForm