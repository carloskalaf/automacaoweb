
import './';
import image from 'next/image'

function home(){
    return  (

        <div className='login'>
        <img src='.\logo-profarma.png' ></img>
        <h1>Automação Web teste</h1>
        <div className='buttons'>
            
                <input type="text"  name="login"/>
                <input type="password" name="password"/>
                <input type="submit" name="acao" value="logar"/>
            
            </div>
    <div class='video-container'>
        <video  autoPlay loop muted>
            
        </video>
    </div>

    </div>
    
    
    )

}

export default home