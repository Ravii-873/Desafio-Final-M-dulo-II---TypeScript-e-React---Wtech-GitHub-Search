import wtech from "../../assets/wtech-white-logo.png";

function Header1() {
  return (
    <header className="bg-wtech-blue flex w-full items-center justify-center p-10">
      <img src={wtech} alt="Logotipo wtech" className="w-90" />
    </header>
  );
}

export default Header1;
