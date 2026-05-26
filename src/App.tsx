import { useState } from "react";
import "@style/vars.scss";



function App() {
  const [isActive, setActive] = useState(true);
  //REMOVE THIS LINE ONCES YOU ACTUALLY USE IT, OTHERWISE REMOVE IT COMPLETELY
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleToggle = () => {
    if (!isActive) {
      document.body.classList.remove("dark-mode");
      setActive(!isActive);
      return;
    }

    document.body.classList.add("dark-mode");
    setActive(!isActive);
  };


  return (
    <>

    </>
  )
}

export default App;