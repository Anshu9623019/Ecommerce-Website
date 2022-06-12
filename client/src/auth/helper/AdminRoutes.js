import React from 'react'
import {Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

// function AdminRoutes({ component: Component, ...rest }) {
    
//     return (
//         <div>
//     <Route
//       {...rest}
//       exact element={props =>
//         isAuthenticated() && isAuthenticated().user.role===1? (
//           <Component {...props} />
//         ) : (
//           <Navigate
//             to={{
//               pathname: "/signin",
//               state: { from: props.location }
//             }}
//           />
              
//         )
//       }
//     />
//   );
//         </div>
//     )
// }

function AdminRoutes({ children, redirectTo }) {
  return  isAuthenticated() && isAuthenticated().user.role===1 ? children : <Navigate to={redirectTo} />;
}

export default AdminRoutes
