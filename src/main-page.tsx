//import Button from "./components/Button/button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
export default function MainPage() {
  // const clickBtn = () => {
  //   console.log("clicked");
  // };

  // const clickBtn2 = () => {
  //   console.log("clicked btn2");
  // };
  // const items = Array.from({ length: defualtvalues.num });
  //const items = ListOfTodos;
  interface ITodo {
    id: number;
    dec: string;
    status: boolean;
  }
  const [items, setItems] = useState<ITodo[]>([]);

  useEffect(() => {
    const url = `http://localhost:3000/todos`;
    async function fetchData() {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setItems(result);
      } catch (e: any) {
        console.log(e.message);
      }
    }

    fetchData();
  }, []);


  const createNewTodo = async () => {
    const url = `http://localhost:3000/todos`;
    const response  = await fetch(url,{
      method:"POST",
      body:JSON.stringify({
        "dec":"Killing Ahmed Alrai while he is walking",
         "status": false
      })
    });
     if(response.ok) console.log("success")
      
  }

  
  const deleteTodo = async (id: number) => {
    const url = `http://localhost:3000/todos/${id}`;
    const response  = await fetch(url,{
      method:"DELETE",
    });
    if(response.ok) console.log("success")
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-YE', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (

    <div className="maindiv">
      {/* <section>
      <div>Hello world</div>
      <Button title="Click Me" onClick={clickBtn} />
      <Button title="Click Me 2" onClick={clickBtn2} />
    </section> */}

      <section className='todoplace'>
        <div>
          <p className="titlefont">Good Morning, Mohammed! 🖐</p>
          <h3 className="descfont">Today, {formattedDate}</h3>
        </div>

        <section>
          <section className="addbuttom">
            <Fab aria-label="add" onClick={createNewTodo} > 
              <AddIcon />
            </Fab>
          </section>
        </section>

        <section className='checksection'>
          <div>
            {items.map((item, index) => (
              <div key={index} className="checkboxstyle">
                <FormControlLabel
                  control={<Checkbox defaultChecked={item.status} />}
                  label={item.dec}
                />
                <div className="editbuttom">
                  <Fab aria-label="edit">
                    <EditIcon style={{ color: 'rgb(56, 173, 228)' }} />
                  </Fab>
                  <Fab aria-label="delete" onClick={() => deleteTodo(item.id)}>
                    <DeleteIcon style={{ color: 'rgb(224, 75, 75)' }} />
                  </Fab>

                </div>
              </div>
            ))}
          </div>


        </section>




      </section>
    </div>

  );

}
