import { useCallback, useEffect } from "react";

import type { IUserRepos } from "../../pages/User";
import ModalCloseButton from "./ModalCloseButton";

interface RepoModalProps {
  openRepo: IUserRepos | null;
  setOpenRepo: React.Dispatch<React.SetStateAction<IUserRepos | null>>;
}

const dictionary: Record<string, string> = {
  public: "Público",
  private: "Privado",
  internal: "Interno",
};

function RepoModal({ openRepo, setOpenRepo }: RepoModalProps) {
  const handleClose = useCallback(() => {
    setOpenRepo(null);
  }, [setOpenRepo]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  if (!openRepo) return <></>;

  return (
    <div className="montserrat shadow-shdw/70 flex h-full w-full max-w-171.5 min-w-112.5 flex-col rounded-[10px] bg-white pt-4 shadow-[0_0_16px]">
      <div className="flex h-19.25 items-center justify-between px-12.25">
        <span className="text-repo-li-content inline-block max-w-full font-bold">
          {openRepo.name}
        </span>
        <ModalCloseButton handleClose={handleClose} />
      </div>
      <div className="border-modal-stroke w-[92%] self-center border border-solid"></div>
      <div className="flex h-max flex-col items-start justify-between gap-6.25 px-[10%] pt-6.25 pb-11">
        <div className="bg-repo-li-bg text-pagination-count flex h-14 w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Link
          <a
            target="_blank"
            className="hover:text-wtech-blue text-repo-li-content inline-block h-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap underline"
            href={openRepo.html_url}
          >
            {openRepo.html_url}
          </a>
        </div>
        <div className="bg-repo-li-bg text-pagination-count flex h-14 w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Privacidade
          <span className="text-repo-li-content inline-block h-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {dictionary[openRepo.visibility]}
          </span>
        </div>
        <div className="bg-repo-li-bg text-pagination-count flex h-14 w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Linguagem
          <span className="text-repo-li-content inline-block h-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {openRepo.language ? openRepo.language : "Indefinida"}
          </span>
        </div>
        <div className="bg-repo-li-bg text-pagination-count flex h-max w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Descrição
          <p className="text-repo-li-content max-w-full">
            {openRepo.description ? openRepo.description : `Sem descrição`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RepoModal;
