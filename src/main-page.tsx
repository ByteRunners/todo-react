import Button from "./components/Button/button";

export default function MainPage() {
  const clickBtn = () => {
    console.log("clicked");
  };

  const clickBtn2 = () => {
    console.log("clicked btn2");
  };

  return (
    <section>
      <div>Hello world</div>
      <Button title="Click Me" onClick={clickBtn} />
      <Button title="Click Me 2" onClick={clickBtn2} />
    </section>
  );
}
