import React, { useState } from "react";
import List from "./list";



const App = () => {
    const [Inputlist, setList] = useState("");
    const [Items, setItem] = useState([]);
    const InChng = (e) => {
        setList(e.target.value);
    }
    const FixItem = () => {
        setItem((olditem) => {
            return [...olditem, Inputlist];
        });
        setList('');
    }
    const deleteItems = (id) => {
        console.log("clicked");
        setItem((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id;
            })
        })
    }
    return (
        <>
            <div className="main">
                <div className="heading">To-Do-List</div>
                <br />
                <div className="task">
                    <input type="text" placeholder="Enter Your Task" onChange={InChng} value={Inputlist} />
                    <button onClick={FixItem}>+</button>
                </div>
                <br />
                <div className="completed">
                    
                        {/* <li>{Inputlist}</li> */}
                        {Items.map((itemval, index) => {
                            return (
                                <List
                                    key={index}
                                    text={itemval}
                                    id={index}
                                    onSelect={deleteItems} />
                            )
                        })}
                    
                </div>
            </div>
        </>
    )
}
export default App; 