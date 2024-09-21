import nonveg from "../../imgs/Non_veg_symbol.svg"
import veg from "../../imgs/Veg_symbol.svg"

const VegNonVeg = ({data}) => {
    
    return(
        data===1? <img className="h-5 w-auto" src={veg}/> : <img className="h-5 w-auto" src={nonveg}/>
    );
}

export default VegNonVeg;