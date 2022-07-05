import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const Menu = () => {
  return (
    <div>
      <p>
        <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Переключить первый элемент</a>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Переключить второй элемент</button>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Переключить оба элемента</button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card card-body">
              Некоторый заполнитель для первого компонента сворачивания в этом примере множественного сворачивания. 
              Эта панель по умолчанию скрыта, но открывается, когда пользователь активирует соответствующий триггер.
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body">
              Некоторое содержимое заполнителя для второго компонента сворачивания в этом примере множественного сворачивания. 
              Эта панель по умолчанию скрыта, но открывается, когда пользователь активирует соответствующий триггер.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;
