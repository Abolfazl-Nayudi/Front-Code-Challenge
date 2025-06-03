export default function User({ data, elementRef }) {
  const { avatar, firstName, lastName, gender, id } = data;
  return (
    <div
      className="w-full max-w-2xl rounded-md grid grid-cols-[50px_repeat(4,_1fr)] items-center p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer hover:bg-brand-100"
      ref={elementRef}
    >
      <span>{id}</span>
      <img
        src={`/avatars/${gender}/${avatar}.png`}
        alt="avatar"
        className="w-10"
      />
      <span>{firstName}</span>
      <span>{lastName}</span>
      <span>{gender}</span>
    </div>
  );
}
