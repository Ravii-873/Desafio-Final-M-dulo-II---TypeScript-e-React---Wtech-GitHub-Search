import type { IUserRepos } from "../../pages/User";
import RepoCard from "./RepoCard";

interface ReposDivProps {
  reposList: IUserRepos[];
  setOpenRepo: React.Dispatch<React.SetStateAction<IUserRepos | null>>;
}

function ReposDiv({ reposList, setOpenRepo }: ReposDivProps) {
  return (
    <div className="grid grid-cols-2 gap-x-[3%] gap-y-6 lg:grid-cols-3">
      {reposList.map((el) => (
        <RepoCard key={el.id} repo={el} setOpenRepo={setOpenRepo} />
      ))}
    </div>
  );
}

export default ReposDiv;
