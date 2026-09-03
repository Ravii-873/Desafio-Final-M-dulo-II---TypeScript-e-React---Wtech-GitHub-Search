import type { IUserRepos } from "../../pages/User";

interface RepoCardProps {
  repo: IUserRepos;
  setOpenRepo: React.Dispatch<React.SetStateAction<IUserRepos | null>>;
}

function RepoCard({ repo, setOpenRepo }: RepoCardProps) {
  return (
    <div
      role="button"
      onClick={() => setOpenRepo(repo)}
      className="montserrat shadow-shdw/80 flex h-73.25 flex-col rounded-[10px] bg-white shadow-[0_0_16px] hover:transform-[scale(1.004)] hover:cursor-pointer active:transform-[scale(0.99)]"
    >
      <div className="flex h-19.25 items-center px-12.25">
        <span className="inline-block max-w-full overflow-hidden font-bold text-ellipsis whitespace-nowrap">
          {repo.name}
        </span>
      </div>
      <div className="border-repo-card-hr w-full border border-solid"></div>
      <div className="flex h-54 flex-col items-start justify-between px-[10%] pt-8.25 pb-12.25">
        <div className="text-pagination-count bg-repo-li-bg flex h-14 w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Link
          <a
            target="_blank"
            className="hover:text-wtech-blue text-repo-li-content inline-block h-4 max-w-full overflow-hidden text-ellipsis whitespace-nowrap underline"
            href={repo.html_url}
            onClick={(e) => e.stopPropagation()}
          >
            {repo.html_url}
          </a>
        </div>
        <div className="text-pagination-count bg-repo-li-bg flex h-14 w-full flex-col items-start justify-center rounded-[11px] px-4.25 py-2.75 text-[12px]">
          Descrição
          <span className="text-repo-li-content inline-block max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
            {repo.description
              ? repo.description
              : `${repo.name} não tem descrição`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
