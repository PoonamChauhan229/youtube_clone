
import { useDispatch } from "react-redux";
import{categorysearchResults} from "../utilis/categorySearchSlice";

const Button = ({btnText}) => {
  const dispatch = useDispatch(); 
  //const [categorysearchQuery, setCategorysearchQuery] = useState("");
  const getButton=(btnText)=>{
    console.log(btnText)
   // setCategorysearchQuery(btnText)
   dispatch(categorysearchResults(btnText))
    
  }
  return (
    <div>
      <button className='px-6 m-2 py-1 bg-gray-200 rounded-lg hover:bg-gray-400'
      onClick={()=>getButton(btnText)}>{btnText}</button>
    </div>
  )
}

export default Button