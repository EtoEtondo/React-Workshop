import { onCLS, onFID, onLCP } from 'web-vitals';

// Definieren Sie den Typ selbst
type ReportHandler = (metric: { name: string; value: number; id: string }) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
  
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onLCP(onPerfEntry);
    }
  };

export default reportWebVitals;
