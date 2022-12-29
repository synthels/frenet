import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  // Import the necessary things needed to run the application.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Do that only if onPerfEntry is a function.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Gets the CLS part of the application.
      getCLS(onPerfEntry);
      // Gets the FID part of the application.
      getFID(onPerfEntry);
      // Gets the FCP part of the application.
      getFCP(onPerfEntry);
      // Gets the LCP part of the application.
      getLCP(onPerfEntry);
      // Gets the TTFB part of the application.
      getTTFB(onPerfEntry);
    });
  }
};

// Export the default report web vitals.
export default reportWebVitals;
