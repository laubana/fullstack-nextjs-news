import Header from "@components/Header/Header";

export default ({ children }) => {
  return (
    <>
      <div id="page">
        <Header />
        {children}
      </div>
    </>
  );
};
