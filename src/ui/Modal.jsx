import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import useOutsideClick from '../hooks/useOutsideClick';

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);

  if (!open) return null;

  return createPortal(
    <div className="backdrop-blur-sm text-title w-full h-screen fixed flex justify-center items-center top-0 left-0 bg-background/40 z-50">
      <div
        ref={ref}
        className="flex flex-col justify-center gap-y-4 p-4 border-2 border-subtitle rounded-xl bg-color w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <div className="flex justify-between pb-2 border-b border-subtitle/45 items-center">
          <div className="truncate max-w-11/12">{title}</div>
          <button
            onClick={onClose}
            className="max-w-1/12 flex justify-center rounded-md text-color items-center size-6 bg-red-500"
          >
            <IoClose className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
