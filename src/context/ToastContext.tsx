import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, ExternalLink, X, Copy, FileText } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error' | 'link';

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
  duration?: number;
}

interface ToastContextType {
  showToast: (toast: Omit<ToastItem, 'id'>) => void;
  success: (title: string, description?: string) => void;
  info: (title: string, description?: string) => void;
  warning: (title: string, description?: string) => void;
  error: (title: string, description?: string) => void;
  linkNotice: (portalName: string, url: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(({ title, description, type = 'info', duration = 4000 }: Omit<ToastItem, 'id'>) => {
    const id = 'toast-' + Math.random().toString(36).substring(2, 9);
    const newToast: ToastItem = { id, title, description, type, duration };

    setToasts((prev) => [...prev.slice(-3), newToast]); // keep max 4 toasts to prevent clutter

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, [removeToast]);

  const success = useCallback((title: string, description?: string) => {
    showToast({ title, description, type: 'success' });
  }, [showToast]);

  const info = useCallback((title: string, description?: string) => {
    showToast({ title, description, type: 'info' });
  }, [showToast]);

  const warning = useCallback((title: string, description?: string) => {
    showToast({ title, description, type: 'warning' });
  }, [showToast]);

  const error = useCallback((title: string, description?: string) => {
    showToast({ title, description, type: 'error' });
  }, [showToast]);

  const linkNotice = useCallback((portalName: string, url: string) => {
    showToast({
      title: `Redirecting to ${portalName}`,
      description: `Official Verified Portal: ${url.replace('https://', '')}. Please ensure URL ends in .gov.in or .nic.in`,
      type: 'link',
      duration: 5000
    });
  }, [showToast]);

  const getToastIcon = (type: ToastType = 'info') => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />;
      case 'link':
        return <ExternalLink className="w-5 h-5 text-blue-400 flex-shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />;
    }
  };

  const getBorderColor = (type: ToastType = 'info') => {
    switch (type) {
      case 'success':
        return 'border-emerald-500/50 bg-slate-900/95 shadow-emerald-950/30';
      case 'warning':
        return 'border-amber-500/50 bg-slate-900/95 shadow-amber-950/30';
      case 'error':
        return 'border-red-500/50 bg-slate-900/95 shadow-red-950/30';
      case 'link':
        return 'border-blue-500/50 bg-slate-900/95 shadow-blue-950/30';
      default:
        return 'border-slate-700 bg-slate-900/95 shadow-slate-950/30';
    }
  };

  return (
    <ToastContext.Provider value={{ showToast, success, info, warning, error, linkNotice }}>
      {children}

      {/* Floating Toast Notification Stack */}
      <div 
        aria-live="polite" 
        className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md text-white transition-all transform animate-in slide-in-from-top-4 fade-in duration-200 ${getBorderColor(
              t.type
            )}`}
          >
            {getToastIcon(t.type)}
            <div className="flex-1 min-w-0">
              <h5 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {t.title}
              </h5>
              {t.description && (
                <p className="mt-1 text-xs text-slate-300 leading-relaxed break-words">
                  {t.description}
                </p>
              )}
            </div>
            <button
              onClick={() => removeToast(t.id)}
              className="text-slate-400 hover:text-white p-1 rounded-md transition-colors focus:outline-none"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
