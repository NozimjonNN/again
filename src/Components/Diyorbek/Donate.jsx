import React from "react";
import './Donate.css'
import img from '../../img/donate.jpg'


const Donate = () => {
    return(
        <div className="all">
             <div className="Diyorbek">

        <div>
            <div className="container">
                <img src={ img } alt="img" className="img" />
                <h2 className="text-xl font-semibold text-center">Привет, если хотите помочь нам то можете <br /> пожертвовать деньги на наш чудесный проект !</h2>


                    <input type="text" placeholder="Введите номер карты" className="custom-class" />
                    <input type="text" placeholder="Введите сумму" className="custom-class" />
                    <div class="divbtn"><button className="btn">вопросы</button><button className="btn">пожертвовать</button></div>

            </div>
        </div>




    </div>
        </div>
    )
}

export default Donate
