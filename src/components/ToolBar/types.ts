export type ToolBarProps = {
}

export type ToolOptionProps = {
  icon: string;
  label?: string;
  type?: TOOL_TYPE;
}

export type ToolOption = {
  icon: string;
  type?: TOOL_TYPE;
  label?: string;
  subTools?: ToolOption[];
}

export enum TOOL_TYPE {
  TEMPLATES = 'templates',
  SECTION_ONE = 'section-one',
  SECTION_TWO_ONE = 'section-two-one',
  SECTION_TWO_TWO = 'section-two-two',
  SECTION_TWO_THREE = 'section-two-three',
  SECTION_THREE = 'section-three',
  TEXT_BOX = 'text-box',
  TEXT_SHORT_ANSWER = 'short-answer',
  TEXT_PARAGRAPH = 'paragraph',
  TEXT_MULTIPLE_CHOICE = 'multiple-choice',
  TEXT_CHECKBOXES = 'checkboxes',
  TEXT_DROPDOWN = 'dropdown',
  TEXT_DATE = 'date',
  TABLE_STANDARD = 'table-standard',
  TABLE_STATUS = 'table-status',
  TABLE_REQUIREMENT = 'table-requirement',
  IMAGE_SINGLE = 'image-single',
  IMAGE_CAROUSEL = 'image-carousel',
  VIDEO_STANDARD = 'video-standard',
  VIDEO_YOUTUBE = 'video-youtube',
  SMART_TIMELINE = 'smart-timeline',
  SMART_FILE_UPLOAD = 'smart-file-upload',
  SMART_ACTION = 'smart-action',
  CHART_BAR = 'bar-chart',
  CHART_LINE = 'line-chart',
  CHART_SCATTER = 'scatter-chart',
  CHART_PIE = 'pie-chart',
  CHART_DONUT = 'donut-chart',
  CHART_BUBBLE = 'bubble-chart',
  CHART_CRITICAL_PLOT = 'critical-plot-chart',
  CHART_BOX_PLOT = 'box-plot-chart',
  CHART_RADAR = 'radar-chart',
}
