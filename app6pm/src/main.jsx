
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import MyContext from './MyContext.jsx'
import LoginContext from './LoginContext.jsx'

createRoot(document.getElementById('root')).render(
//     <MyContext>
//  <App />
//     </MyContext>

<LoginContext>
    <App/>
</LoginContext>
 
   
  
)
