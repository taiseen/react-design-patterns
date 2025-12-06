import { use, useState, useEffect, createContext } from "react";

const BrandContext = createContext();

const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    // FAKE an API Call
    const data = { name: "tapaScript", color: "#FFA500" };
    setBrand(data);
  }, []);

  const shareInDomTree = { brand };

  return <BrandContext value={shareInDomTree}>{children}</BrandContext>;
};

export const useBrand = () => use(BrandContext);

export default BrandProvider;
