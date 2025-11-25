import { useNavigate } from "react-router";

export function Modal({ children }: any) {
  const navigate = useNavigate();
  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => navigate(-1)}
    >
      <div className="modal-content bg-white" data-slot="modal">
        {children}
      </div>
    </div>
  );
}
