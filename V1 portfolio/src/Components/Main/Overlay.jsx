import { NavLink } from "react-router-dom"

export const Overlay = () => {
    return (

      <div id="heading" style={{position: "fixed", top:0, left: 0, pointerEvents:"none", width:"100vw", height:"10vh", display: 'flex', alignItems:'center', justifyContent:"flex-end"}}>
        <div style={{position: "absolute", top:0, left: '50vw', width:"45vw", height:"100%", display: 'flex', alignItems:'center', justifyContent:"space-between", margin: "0 2.5vw"}}>
        <NavLink to='/interactive' style={{ color:"white", fontSize:"16px"}}>Interactive forms</NavLink>
        <NavLink style={{ color:"white", fontSize:"16px"}}>More things</NavLink>
        <NavLink style={{ color:"white", fontSize:"16px"}}>More things</NavLink>
        <NavLink style={{ color:"white", fontSize:"16px"}}>More things</NavLink>
        <NavLink style={{ color:"white", fontSize:"16px"}}>More things</NavLink>
        </div>
        <NavLink to="/" style={{ position:'absolute', width: '32px', height: "32px", display:'flex', justifyContent: "center",  left: '32px', top:'32px'}}>
          <img style={{ position:'absolute', width: '32px', left: 0, top:0}} src="https://static.vecteezy.com/system/resources/previews/022/750/436/non_2x/3d-home-icon-free-png.png" alt=""/>
        </NavLink>
      </div>
    )
    }
    