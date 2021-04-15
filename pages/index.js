
import './';
import image from 'next/image'

function home(){
    return  (
        <div>
            <video autoPlay loop muted>
    <source src='https://ri.profarma.com.br/wp-content/themes/mziq_profarma_ri/video/Profarma.mp4' type='video/mp4'></source>
    </video>
        <div className='login'>
            <div className='logo'>
                <img src='https://www.profarma.com.br/sites/default/files/arquivos/logo_profarma.png' alt='logo-profarma' width="220"></img>
            </div>
        <h1>Automação</h1>
        <div className='buttons'>
            
                <div className='txtLogin'><input type="text"  name="login"/></div>
                <div className='txtPass'><input type="password" name="password"/></div>
                <div className='BtnSubmit'><input type="submit" name="acao" value="LOGIN"/></div>
            
            </div>
            
    
    </div>
        </div>
        

    

    
    )

}

export default home