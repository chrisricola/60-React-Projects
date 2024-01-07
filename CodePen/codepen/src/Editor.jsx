import React, { useEffect, useState } from "react";
import img from "./codepen_logo.png";
import "./index.css";
import useLocalStorage from "./storage";

const Editor = () => {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [codepenCode, setCodepenCode] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCodepenCode(`
                <html>
                    <style>${css}</style>
                    <script>${js}</script>
                    <body>${html}</body> 
                </html>
            `)
        }, 200)

        return () => clearTimeout(timeout)
    }, [html, css, js])

    return (
        <div className="wrapper">
            <div className="header">
                <img src={img} alt="" />
                <span>CodePen</span>
            </div>
            <div className="input-cover">
                <textarea value={html} placeholder="HTML" type="text" className="input" onChange={(e) => {
                    setHtml(e.target.value)
                }} />
                <div className="width"></div>
                <textarea value={css} placeholder="CSS" type="text" className="input" onChange={(e) => {
                    setCss(e.target.value)
                }} />
                <div className="width"></div>
                <textarea value={js} placeholder="JS" type="text" className="input" onChange={(e) => {
                    setJs(e.target.value)
                }} />
            </div>
            <div className="output">
                <iframe 
                    srcDoc={codepenCode}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
        
    )
}

export default Editor;