import React, {useState} from "react";
import Delete from './images/delete.png';
import './App.css';

const Todo = () => {

    const [task, setTask] = useState("");
    const [items, setItems] = useState([]);

    const itemInput = (e) =>{
       setTask(e.target.value);
    }
    const addTask = () =>{
    if((task==="")){
        alert("Please Enter Task");
    }
    else{
        setItems((old)=>{
            return [...old, task];
        });
            setTask('');
        }
    }   

    const deleteTask = (e) =>{
        const updateItems = items.filter((ele, id)=>{
            return id!==e;
        });

        setItems(updateItems);
    }

    return (
        <>
            <div class="container-fluid text-center projects mt-4">
                <h1 class="heading">
                   Todo List
                </h1>
                <div class="search text-center py-1">
                    <input type="text" name="task" id="" onChange={itemInput} value={task} placeholder="Enter the Task..." />
                    <input type="submit" onClick={addTask} value="Add" />
                </div>


                <div className="tasksdiv mt-3 mx-auto">
                    
                    {
                        items.map((ele, ind)=>{
                            return ( 
                            <div className="task" key={ind}>
                                <h4>{ele}</h4>
                                <img src={Delete} className="icon" onClick={(()=>deleteTask(ind))} alt="trash"/>
                            </div> 
                        );
                        })
                    }
                </div>  

            </div>
        </>
    );
};

export default Todo;