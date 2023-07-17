import React from 'react';
import './styling/App.css';
import Numpad from './Numpad';
function App() {
  const [str, setStr] = React.useState(""); 
  const [theme,setTheme] = React.useState("theme1");
  const [pos, setPos] = React.useState({left:"0px"});
  function HandleClick(event){
    const {id} = event.target; 
    if(id === "RESET")
    {
      setStr("");
    }
    else if(id === "=")
    {
      try{
        setStr(eval(str).toString());  
      }
      catch(e){
        if(e instanceof SyntaxError)
          {
            setStr("Syntax Error");
          }
      }
    }
    else if(id === "DEL")
    {
      setStr((prev)=>{return prev.slice(0,str.length-1)});
    }
    else{
      setStr((prev)=>{return prev+[id]});
    }
    if(str === "Syntax Error" || str === "Infinity")
    {
      setStr("");
    }
    console.log(str);
    
  }
  function ThemeChanger(){
    if(theme === "theme3"){
      setPos({left:"0px"});
      setTheme("theme1");
    }
    else if(theme === "theme1")
    {
      setPos({left:"50%",transform:" translate(-50%,-50%)"});
      setTheme("theme2");
    }
    else{
      setPos({right:"0px",left:"initial"});
      setTheme("theme3");
    }
  }
  return (
    <div className={`App ${theme}`}>
      <div className="calc">
        
        <div className="header"style={theme === "theme1"?{color:  "var(--func_key_val)"}: {color: "var(--key_val)"}}>
          <span className="head">calc</span>
          <div className="container-box">
            <span>Theme</span>
            <div className="theme-box">
              <div id="1">1</div>
              <div id="2">2</div>
              <div id="3">3</div>
              <div className="box">
                <div id="pointer" onClick={ThemeChanger} style = {pos}></div></div>
            </div>
          </div>
        </div>
        <div className="display" style={theme === "theme1"?{color:  "var(--func_key_val)"}: {color: "var(--key_val)"}}>
          {str?str: "0"}
        </div>
        <Numpad func = {HandleClick} theme = {theme}/>
      </div>
    </div>
  );
}
export default App;
