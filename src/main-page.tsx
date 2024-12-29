//import Button from "./components/Button/button";
import ListOfTodos from './JSON/defualtvalues.json';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MainPage() {
  // const clickBtn = () => {
  //   console.log("clicked");
  // };

  // const clickBtn2 = () => {
  //   console.log("clicked btn2");
  // };
  // const items = Array.from({ length: defualtvalues.num });
  const items = ListOfTodos;
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
          <h2 className="descfont">Today, Wed 6 july 2023</h2>
        </div>

        <section>
          <section className="addbuttom">
            <Fab aria-label="add">
              <AddIcon />
            </Fab>
          </section>
        </section>

        <section className='checksection'>
          <div>
            {items.map((item, index) => (
              <div key={index} className="checkboxstyle">
                <FormControlLabel
                  control={<Checkbox checked={item.status}/>}
                  label={item.dec}
                />
                <div className="editbuttom">
                  <Fab aria-label="edit">
                    <EditIcon />
                  </Fab>
                  <Fab aria-label="delete">
                    <DeleteIcon />
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
