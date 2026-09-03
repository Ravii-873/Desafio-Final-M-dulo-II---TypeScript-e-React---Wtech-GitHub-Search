interface ErrorToastProps {
  setDidNotFound: (value: React.SetStateAction<boolean>) => void;
}

function ErrorToast({ setDidNotFound }: ErrorToastProps) {
  return (
    <div>
      <div className="bg-toast-bg relative flex h-21 w-86.75 flex-col items-center justify-center overflow-visible rounded-[22px]">
        <div className="circle -top-6 left-5.25 flex h-12.5 w-12.5 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth={3}
          >
            <path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"></path>
          </svg>
        </div>
        <div className="circle bottom-7 left-10 h-5 w-5"></div>
        <div className="circle bottom-3.25 left-5.25 h-2.5 w-2.5"></div>
        <div className="circle bottom-9.5 left-2 h-1.5 w-1.5"></div>

        <div className="absolute right-4.5 w-60.75">
          <span className="montserrat block h-7.5 text-[20px] font-bold text-white">
            Ops!
          </span>
          <p className="montserrat h-5.5 text-[12px] text-white">
            Não conseguimos identificar sua conta.
          </p>
        </div>

        <button
          onClick={() => setDidNotFound(false)}
          className="hover:bg-toast-btn-bg absolute top-4 right-4 flex items-center justify-center rounded-full p-2 [transition:all_ease_0.1s] hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
          >
            <path d="M 19.990234 2.9863281 A 1.0001 1.0001 0 0 0 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 A 1.0001 1.0001 0 0 0 3.9902344 2.9902344 A 1.0001 1.0001 0 0 0 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 A 1.0001 1.0001 0 1 0 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 A 1.0001 1.0001 0 1 0 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 A 1.0001 1.0001 0 0 0 19.990234 2.9863281 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ErrorToast;
