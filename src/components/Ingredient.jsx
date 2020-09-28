import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { deleteIngredient, editFood } from '../redux/CalcReducer';

function Ingredient({ ingredient }) {
  const dispatch = useDispatch();
  const onSubmit = value => {
    dispatch(editFood(value));
  };

  const deleteIng = id => {
    dispatch(deleteIngredient(id));
  };

  //Зарефакторить функцию
  const sumCalories = () =>
    Math.round(
      (((ingredient.protein * 4.1 + ingredient.carbohydrate * 4.1 + ingredient.fat * 9.29) *
        ingredient.weight) /
        100) *
        100,
    ) / 100;

  return (
    <div className="food">
      <Formik onSubmit={value => onSubmit(value)} initialValues={ingredient}>
        <Form className="food_form">
          <div className="food_control">
            <button className="button button_square button_outline">+</button>
            <button
              onClick={() => deleteIng(ingredient.id)}
              className="button button_square button_outline"
            >
              &#215;
            </button>
          </div>
          <div className="food_name">
            <label>Название</label>
            <Field className="input" onBlur={e => sumCalories(e)} name="name" type="input" />
          </div>
          <div className="food_nutrient">
            <div className="food_nutrient_item">
              <label>Белки</label>
              <Field className="input" name="protein" type="input" />
            </div>
            <div className="food_nutrient_item">
              <label>Углеводы</label>
              <Field className="input" name="carbohydrate" type="input" />
            </div>
            <div className="food_nutrient_item">
              <label>Жиры</label>
              <Field className="input" name="fat" type="input" />
            </div>
            <div className="food_nutrient_item">
              <label>Масса</label>
              <Field className="input" name="weight" type="input" />
            </div>
          </div>
          <button className="button" type="submit">
            Готово
          </button>
        </Form>
      </Formik>
      <p className="food_result">{sumCalories()} Ккал</p>
    </div>
  );
}

export default Ingredient;
