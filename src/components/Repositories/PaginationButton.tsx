interface PaginationButtonProps {
  direction: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
}

export function PaginationButton({
  direction,
  disabled = false,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`group flex h-6.5 w-6.5 items-center justify-center rounded-[5px] border transition-all duration-80 ${
        disabled
          ? "border-pagination-btn-disabled cursor-default bg-transparent"
          : "border-pagination-btn-enabled hover:bg-pagination-btn-enabled cursor-pointer bg-transparent active:transform-[scale(0.95)]"
      }`}
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={direction === "right" ? "scale-x-[-1]" : ""}
      >
        <path
          d="M12.3518 8.98309L8.61605 12.7188C8.20701 13.1279 8.22931 13.7976 8.66465 14.1785L12.3518 17.4047"
          strokeLinecap="round"
          className={`transition-colors ${
            disabled
              ? "stroke-pagination-btn-disabled"
              : "stroke-pagination-btn-enabled group-hover:stroke-white"
          }`}
        />
        <path
          d="M16.8434 13.4746H8.42175"
          strokeLinecap="round"
          className={`transition-colors ${
            disabled
              ? "stroke-pagination-btn-disabled"
              : "stroke-pagination-btn-enabled group-hover:stroke-white"
          }`}
        />
      </svg>
    </button>
  );
}
