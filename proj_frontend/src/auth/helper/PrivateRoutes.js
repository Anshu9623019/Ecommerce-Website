import React from 'react'
import {Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

// function PrivateRoutes({ component: Component, ...rest}) {
//     return ( 
//     <Route
//       {...rest}
//       exact element={props =>
//         isAuthenticated() ? (
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
// }


function PrivateRoutes({ children, redirectTo }) {
  return isAuthenticated() ? children : <Navigate to={redirectTo} />;
}

export default PrivateRoutes;



