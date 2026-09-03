import spinner from "../../assets/spinner.png";

function Spinner() {
  return (
    <div role="status" className="flex flex-col items-center gap-10.75">
      <div className="border-spinner-color box-border flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-solid">
        <img
          src={spinner}
          alt="Ícone de carregamento"
          className="h-11.5 w-11.5 animate-spin"
        />
      </div>
      <span className="montserrat text-loading-span h-12.5 text-[30px] font-bold">
        Carregando...
      </span>
    </div>
  );
}

export default Spinner;
