//import Button from "./components/Button/button";
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
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is walking" />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
            
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is eating " />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is sleeping " />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is looking to sky " />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is writting code" />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is laughing " />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he doing anything " />
            <div className='editbuttom'>
            <Fab aria-label="edit">
              <EditIcon sx={{
                ml:-3,
              }} />
              <Fab aria-label="delete">
              <DeleteIcon/>
            </Fab>
            </Fab>
            </div>
          </div>
        </section>




      </section>
    </div>

  );

}
