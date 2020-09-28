import React from 'react';
import Ingredient from './Ingredient';
import { useDispatch, useSelector } from 'react-redux';
import { addFood } from '../redux/CalcReducer';

function Calculator() {
  const state = useSelector(({ calc }) => ({
    ingredients: calc.ingredients,
  }));

  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(addFood());
  };

  const sumCalories = (protein, carbohydrate, fat, weight) =>
    Math.round((((protein * 4.1 + carbohydrate * 4.1 + fat * 9.29) * weight) / 100) * 100) / 100;

  const totalCount = ingredients =>
    ingredients
      .map(({ protein, carbohydrate, fat, weight }) =>
        sumCalories(protein, carbohydrate, fat, weight),
      )
      .reduce((r, kcal) => r + kcal, 0);

  return (
    <div className="calculator">
      <div className="calculator_container">
        {state.ingredients.map(item => (
          <Ingredient ingredient={item} key={item.id} />
        ))}
        <button className="food button button_circle" onClick={onSubmit}>
          +
        </button>
      </div>
      <div className="calculator_result">
        <div>
          Общее количество: <span>{totalCount(state.ingredients)} Ккал</span>
        </div>
        <button className="button">Добавить блюдо</button>
      </div>
    </div>
  );
}

export default Calculator;
