import ThemeContainer from "./components/ThemeContainer";
import BrandProvider from "./provider/BrandProvider";
import ThemeProvider from "./provider/ThemeProvider";

const ContextProviderLearn = () => {
  return (
    <ThemeProvider>
      <BrandProvider>
        <ThemeContainer />
      </BrandProvider>
    </ThemeProvider>
  );
};

export default ContextProviderLearn;
