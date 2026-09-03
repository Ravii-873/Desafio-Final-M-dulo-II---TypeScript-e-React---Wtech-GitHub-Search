interface ModalCloseButtonProps {
  handleClose: () => void;
}

function ModalCloseButton({ handleClose }: ModalCloseButtonProps) {
  return (
    <button
      onClick={handleClose}
      className="rounded-full p-3 [transition:all_ease_0.1s] hover:cursor-pointer hover:bg-gray-100 active:transform-[scale(0.99)]"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L12.5 12.5"
          stroke="#BDBDBD"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M12.5 1L1 12.5"
          stroke="#BDBDBD"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </button>
  );
}

export default ModalCloseButton;
