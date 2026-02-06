export function Modal({ children }: any) {
  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="modal-content mx-2 w-[600px] rounded-lg border border-white bg-white"
        data-slot="modal"
      >
        {children}
      </div>
    </div>
  );
}
