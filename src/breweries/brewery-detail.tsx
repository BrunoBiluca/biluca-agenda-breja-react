import { Modal } from "@ui/modal";
import { useParams } from "react-router";

export const BreweryDetail = () => {
  let params = useParams();
  return (
    <Modal>
      <h2>Detalhe da cervejaria</h2>
      <p>{params.breweryId}</p>
    </Modal>
  );
};
