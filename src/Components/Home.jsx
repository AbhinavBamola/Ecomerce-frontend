
import { useSelector } from "react-redux";

export default function Home(){

  const user=useSelector(state=>state.user);

return(<>
  
<h1>Hello {user?user.name+" "+user.role:"Guest"}</h1>
</>)
}