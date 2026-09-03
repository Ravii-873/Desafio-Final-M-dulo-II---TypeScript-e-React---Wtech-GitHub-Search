import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Spinner from "../components/Global/Spinner";
import { PaginationButton } from "../components/Repositories/PaginationButton";
import RepoModal from "../components/Repositories/RepoModal";
import ReposDiv from "../components/Repositories/ReposDiv";
import Header2 from "../components/User/Header2";
import UserCard from "../components/User/UserCard";
import { useLoading } from "../contexts/LoadingContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { getUser, getUserRepos } from "../services/user.service";

export interface IUserData {
  avatar: string;
  name: string;
  bio: string;
}

export interface IUserRepos {
  id: number;
  name: string;
  html_url: string;
  visibility: string;
  language: string | null;
  description: string;
}

function User() {
  const { username } = useParams();
  const [userData, setUserData] = useState<IUserData>();
  const [userReposData, setUserReposData] = useState<IUserRepos[]>([]);
  const [startShownRepo, setStartShownRepo] = useState(0);
  const [openRepo, setOpenRepo] = useState<IUserRepos | null>(null);
  const [isLoadingRepos, setIsLoadingRepos] = useState(true);
  const { isLoading, setIsLoading } = useLoading();

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const itemsPerPage = isLargeScreen ? 3 : 2;

  // Gets and refines user's data
  useEffect(() => {
    let active = true;

    const getUserData = async () => {
      if (username) {
        const response = await getUser({ username });
        if (active) {
          const name: string = response.data.name
            ? response.data.name
            : response.data.login;
          setUserData({
            avatar: response.data.avatar_url,
            name: name,
            bio: response.data.bio ? response.data.bio : `${name} não tem bio!`,
          });
        }
      }
    };

    getUserData();

    return () => {
      active = false;
    };
  }, [username]);

  // Gets user repository's data
  useEffect(() => {
    let active = true;

    const getUserReposData = async () => {
      if (username) {
        const response = await getUserRepos({ username });
        if (active) {
          setUserReposData(
            response.data.map((el: IUserRepos) => ({
              id: el.id,
              name: el.name,
              html_url: el.html_url,
              visibility: el.visibility,
              language: el.language,
              description: el.description,
            })),
          );
        }
      }
      setIsLoadingRepos(false);
    };

    getUserReposData();

    return () => {
      active = false;
    };
  }, [username]);

  // Shown repositories array
  const shownReposData = userReposData.slice(
    startShownRepo,
    startShownRepo + itemsPerPage,
  );

  // Loads while page doesn't mount completely
  useEffect(() => {
    if (!userData || isLoadingRepos) setIsLoading(true);
    else setIsLoading(false);
  }, [userData, isLoadingRepos, setIsLoading]);

  return (
    <div className="bg-main-bg flex h-dvh w-dvw items-center justify-center pt-22">
      <Header2 />
      <main className="shadow-shdw flex h-[90%] w-[92%] flex-col rounded-[10px] bg-white p-14 shadow-[0_0_16px]">
        {isLoading ? (
          <div className="m-auto self-center">
            <Spinner />
          </div>
        ) : (
          <>
            {openRepo ? (
              <div className="flex flex-col items-center gap-16.5">
                <h1 className="montserrat text-user-h1 h-10.25 w-max self-start justify-self-start text-[30px] font-bold">
                  Especificações
                </h1>
                <RepoModal openRepo={openRepo} setOpenRepo={setOpenRepo} />
              </div>
            ) : (
              <>
                <div className="flex h-[48%] flex-col items-start justify-start gap-[15%]">
                  <h1 className="montserrat text-user-h1 mt-3 h-10.25 w-max text-[30px] font-bold">
                    Informações do Perfil
                  </h1>
                  {userData ? (
                    <UserCard
                      avatar={userData.avatar}
                      name={userData.name}
                      bio={userData.bio}
                    />
                  ) : (
                    <p className="font-error-message text-red-400">
                      Dados do usuário não encontrados!
                    </p>
                  )}
                </div>
                <div className="flex h-[52%] flex-col justify-between">
                  <h1 className="montserrat text-user-h1 h-10.25 w-max text-[30px] font-bold">
                    Repositórios
                  </h1>

                  <div className="flex items-center gap-2 self-end">
                    <p className="montserrat text-pagination-count text-[12px] font-medium">
                      {Math.min(
                        startShownRepo + itemsPerPage,
                        userReposData.length,
                      )}{" "}
                      de {userReposData.length}
                    </p>

                    {startShownRepo <= 0 ? (
                      <PaginationButton direction="left" disabled={true} />
                    ) : (
                      <PaginationButton
                        direction="left"
                        disabled={false}
                        onClick={() =>
                          setStartShownRepo(
                            Math.max(0, startShownRepo - itemsPerPage),
                          )
                        }
                      />
                    )}
                    {startShownRepo + itemsPerPage >= userReposData.length ? (
                      <PaginationButton direction="right" disabled={true} />
                    ) : (
                      <PaginationButton
                        direction="right"
                        disabled={false}
                        onClick={() =>
                          setStartShownRepo(startShownRepo + itemsPerPage)
                        }
                      />
                    )}
                  </div>
                  <ReposDiv
                    reposList={shownReposData}
                    setOpenRepo={setOpenRepo}
                  />
                </div>
              </>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default User;
