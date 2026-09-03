interface UserCardProps {
  avatar: string;
  name: string;
  bio: string;
}

function UserCard({ avatar, name, bio }: UserCardProps) {
  return (
    <div className="border-user-card-border flex max-w-full min-w-112.5 gap-10.75 rounded-[18px] border bg-white py-6.5 pr-9.25 pl-7.5">
      <img
        src={avatar}
        alt="Avatar do usuário"
        className="h-31.25 w-auto shrink-0 rounded-[11px]"
      />
      <div className="montserrat text-pagination-count flex flex-col items-start justify-around text-[12px]">
        Nome
        <span className="text-user-info-text text-[13px] font-bold">
          {name}
        </span>
        <div className="h-1.25"></div>
        Bio
        <span className="text-user-info-text line-clamp-3 w-full text-[13px] wrap-break-word">
          {bio}
        </span>
      </div>
    </div>
  );
}

export default UserCard;
