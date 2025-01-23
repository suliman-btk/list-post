import Button from './Button';
import './ListOfButtons.css'

// the best to make a style for react in to insert the code of css into html

function ListOfButtons(){
    let buttons=[
        {children:[
            <h1>hello world</h1>,
            <img src='../public/logo512.png'></img>
            ]
        },{children:[
            <p>is this</p>,
            <img src='../public/logo512.png'></img>
            ]
        },{children:[
            <p>i love react</p>,
            <img src='../public/logo512.png'></img>
            ]
        }

    ]

    let ArrayOfButton=buttons.map((button)=>{
        return <Button>{button.children}</Button>
    })
return(
    <div className="list-buttons-border">
       {ArrayOfButton}
    </div>
)
}


export default ListOfButtons;