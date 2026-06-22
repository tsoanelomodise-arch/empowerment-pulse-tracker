// Central configuration for the performance report.
// Update REPORT_YEAR each cycle (or add past years to REPORT_YEARS) to support
// multi-year performance reporting moving forward.

export const REPORT_YEAR = 2026;

// Historical years available — newest first. Extend as new reports are published.
export const REPORT_YEARS = [2026] as const;

export type ReportYear = (typeof REPORT_YEARS)[number];

export const reportTitle = (year: number | string = REPORT_YEAR) =>
  `Performance Report ${year}`;
