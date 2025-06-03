export default function User({ data, elementRef }) {
  const { avatar, firstName, lastName, gender, id } = data;
  return (
    <div
      className="w-full max-w-2xl shadow-md rounded-md grid grid-cols-5 items-center  p-4"
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
