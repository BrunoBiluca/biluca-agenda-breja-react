import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@ui/card";
import { Modal } from "@ui/modal";
import { useNavigate } from "react-router";

export const BreweryNotFound = () => {
  const navigate = useNavigate();
  return (
    <Modal className="rounded-2xl border border-gray-200">
      <Card role="listitem">
        <CardHeader className="p-6">
          <CardTitle>Ops, cervejaria não encontrada</CardTitle>
          <CardDescription className="text-gray-500">
            A cervejaria que você procura não foi encontrada.
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-between p-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg border border-gray-500 bg-gray-200 px-3 py-2 transition hover:cursor-pointer hover:bg-gray-100"
          >
            Fechar
          </button>
        </CardFooter>
      </Card>
    </Modal>
  );
};
