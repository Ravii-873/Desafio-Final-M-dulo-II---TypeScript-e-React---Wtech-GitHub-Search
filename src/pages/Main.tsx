import Form from "../components/Main/Form";
import Header1 from "../components/Main/Header1";

function Main() {
  return (
    <>
      <Header1 />
      <main className="flex w-250 items-center justify-center">
        <Form />
      </main>
    </>
  );
}

export default Main;
