import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
export default function Index() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname === "/"){
      navigate("/home?scene_id=rukou");
    }
  },[location.pathname]);

  return (
    <div>
        <React.Suspense>
            <Outlet />
        </React.Suspense>
    </div>
  )
}
