//import Button from "./components/Button/button";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
          
        </section>
        <section className='checksection'>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is walking" />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is eating " />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is sleeping " />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is looking to sky " />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is writting code" />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he is laughing " />
          </div>
          <div className='checkboxstyle'>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Killing Ahmed Alrai while he doing anything " />
          </div>
        </section>




      </section>
    </div>

  );

}
