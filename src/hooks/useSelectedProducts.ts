import { useContext } from "react";
import { SelectedProductsContext } from "../context/SelectedProductsContext";

export const useSelectedProducts = () => {
  const context = useContext(SelectedProductsContext);
  if (!context) {
    throw new Error("useSelectedProducts must be used within a SelectedProductsProvider");
  }
  return context;
};
