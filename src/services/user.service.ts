import { API } from "./api";

export interface getUserProps {
  username: string;
}

export async function getUser({ username }: getUserProps) {
  const response = await API.get(`/${username}`);
  return response;
}

export async function getUserRepos({ username }: getUserProps) {
  try {
    const response = await API.get(`/${username}/repos`);
    return response;
  } catch (err) {
    throw new Error(err as string, { cause: err });
  }
}
