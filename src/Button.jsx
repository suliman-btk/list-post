import './Button.css'
function Buttons({children}){

    console.log(children)
    return(
        <button>{children}</button>      
    )
}
export default Buttons;


