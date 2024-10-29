import React from "react";
import './Donate.css'



const Donate = () => {
    return(
        <div>
             <div className="Diyorbek">
        
        <div>
            <div className="container">
                <h2 className="text-xl font-semibold text-center">Привет, если хочешь помочь нам то можешь пожертвовать любую сумму!</h2>
                
                    <input type="text" placeholder="Введите номер карты" className="custom-class" />
                    <input type="text" placeholder="Введите сумму" className="custom-class" />
                    <div class="divbtn"><button className="btn">Потвердить пожертвование!</button></div>
                
            </div>
        </div>

        

        
    </div>
        </div>
    )
}

export default Donate