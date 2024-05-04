import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="rgb(118, 107, 107)"
      ariaLabel="bars-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
