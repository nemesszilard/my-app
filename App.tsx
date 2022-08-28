import './App.css';
import {useState, useEffect} from "react";

function App() {
  const theTime = 30;
      const [second, setSecond] = useState(theTime);

      useEffect(() => {
        const timer = setInterval(() => {
          if(second >= 1){
          setSecond(second-1);
          }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
      });

      return (
      <div 
      style={{
        width: "300px",
        height: "48px",
        borderRadius: "5px",
        border: "1px solid #333",
        margin: "1em",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        color: '#fefe',
        background: '#333',
        position: 'relative',
        overflow: "hidden",
      }}
      >
        <div
          style={{
            position: "absolute",
            width: '${(second * 100) / theTime}%',
            right: 0,
            height: "100%",
            background: "#ccc",
            opacity: "30%",
            transition: "all 1s linear",
          }}
          />
        {second !==0 ? 'Loading next episode in ${second}s' : "Please wait..."}
        </div>
      );
  }


export default App;
