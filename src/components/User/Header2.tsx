import wtech from "../../assets/wtech-blue-logo.png";

function Header2() {
  return (
    <header className="absolute top-0 left-0 flex h-22 w-dvw items-center bg-white pl-[4.45%]">
      <img src={wtech} alt="Logotipo wtech" className="h-6.75" />
    </header>
  );
}

export default Header2;
