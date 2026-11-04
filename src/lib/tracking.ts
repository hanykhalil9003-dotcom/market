export type TrackingParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(event: string, params: TrackingParams = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}
