import React,{useState} from "react"

const ThemeChanger = () =>{
    const [theme, setTheme] = useState("olive")
    return(
        <div className="w-full h-screen duration-200 "
            style={{backgroundColor: theme}}
        >
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
                <div className="flex flex-wrap justify-center shadow-lg gap-2 bg-white px-3 py-2 rounded-3xl">
                    
                    <button onClick={() => setTheme("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "red"}}
                    >
                        Red
                    </button>
                    <button onClick={()=>setTheme("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "blue"}}
                    >
                        Blue
                    </button>
                    <button onClick={() => setTheme("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "green"}}
                    >
                        Green
                    </button>
                    <button onClick={() => setTheme("violet")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "violet"}}
                    >
                        Violet
                    </button>

                    <button onClick={() => setTheme("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "indigo"}}
                    >
                        Indigo
                    </button>
                    
                    <button onClick={() => setTheme("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "yellow"}}
                    >
                        Yellow
                    </button>

                    <button onClick={() => setTheme("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "orange"}}
                    >
                        Orange
                    </button>

                    <button onClick={() => setTheme("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                     style={{backgroundColor: "cyan"}}
                    >
                        Cyan
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ThemeChanger;