export default function Subheading({ children }) {
  return (
    <>
      <h2 className="text-xl font-bold">{children}</h2>
      <hr className="border-black mb-2" />
    </>
  );
}
