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
                  control={<Checkbox defaultChecked={item.status} />}
                  label={item.dec}
                />
                <div className="editbuttom">
                  <Fab aria-label="edit">                                                     
                    <EditIcon style={{ color: 'rgb(56, 173, 228)' }} />
                  </Fab>
                  <Fab aria-label="delete">
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
