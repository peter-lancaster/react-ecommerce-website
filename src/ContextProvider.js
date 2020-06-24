import React, {useState, useEffect} from "react" 
const Context = React.createContext() 

function ContextProvider({children}) {

    const [imageArray, setImageArray] = useState()

    function getImages() {
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(response => response.json())
        .then(data => setImageArray(data))
    }

    useEffect(() => getImages ,[])


    return(
        <Context.Provider value={{imageArray}}>
            {children}
        </Context.Provider>
    )

}

export {Context, ContextProvider} 