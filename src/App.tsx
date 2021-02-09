import * as React from "react";
import MainPage from "./page/mainpage";

interface Hello{
    appTitle : string
}

export class App extends React.Component<Hello, {}> {
    render(){
        return(
                <MainPage/>
            );
    }
}

export default App;