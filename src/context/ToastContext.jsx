import { createContext, useCallback, useContext, useRef, useState } from "react";
import Toast from "../components/common/Toast";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);

  // notify("Saved")  or  notify("Something failed", "error")
  const notify = useCallback((text, type = "success") => {
    setToast({ text, type });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      {toast && <Toast message={toast.text} type={toast.type} />}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside <ToastProvider>");
  return context;
}