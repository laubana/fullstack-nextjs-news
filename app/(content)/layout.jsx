import Header from "@components/Header/Header";
import Loader from "@components/Loader/Loader";

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
