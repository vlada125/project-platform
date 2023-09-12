// Types
import {TOOL_TYPE, ToolOption} from './types';

export const toolOptions: ToolOption[] = [
  {
    icon: '/images/icons/tool-template-icon.svg',
    label: 'Templates',
    type: TOOL_TYPE.TEMPLATES
  },
  // {
  //   icon: '/images/icons/tool-section-icon.svg',
  //   label: 'Add Section',
  //   subTools: [
  //     {
  //       icon: '/images/icons/tool-section-one-icon.svg',
  //       type: TOOL_TYPE.SECTION_ONE
  //     },
  //     {
  //       icon: '/images/icons/tool-section-two-one-icon.svg',
  //       type: TOOL_TYPE.SECTION_TWO_ONE
  //     },
  //     {
  //       icon: '/images/icons/tool-section-three-icon.svg',
  //       type: TOOL_TYPE.SECTION_THREE
  //     },
  //     {
  //       icon: '/images/icons/tool-section-two-two-icon.svg',
  //       type: TOOL_TYPE.SECTION_TWO_TWO
  //     },
  //     {
  //       icon: '/images/icons/tool-section-two-three-icon.svg',
  //       type: TOOL_TYPE.SECTION_TWO_THREE
  //     }
  //   ]
  // },
  {
    icon: '/images/icons/tool-text-icon.svg',
    label: 'Text',
    subTools: [
      {
        icon: '/images/icons/tool-text-box-icon.svg',
        type: TOOL_TYPE.TEXT_BOX,
        label: 'Text Box'
      },
      {
        icon: '/images/icons/tool-text-short-answer-icon.svg',
        type: TOOL_TYPE.TEXT_SHORT_ANSWER,
        label: 'Short Answer'
      },
      {
        icon: '/images/icons/tool-text-paragraph-icon.svg',
        type: TOOL_TYPE.TEXT_PARAGRAPH,
        label: 'Paragraph'
      },
      {
        icon: '/images/icons/tool-text-multiple-choice-icon.svg',
        type: TOOL_TYPE.TEXT_MULTIPLE_CHOICE,
        label: 'Multiple Choice'
      },
      {
        icon: '/images/icons/tool-text-checkboxes-icon.svg',
        type: TOOL_TYPE.TEXT_CHECKBOXES,
        label: 'Checkboxes'
      },
      {
        icon: '/images/icons/tool-text-dropdown-icon.svg',
        type: TOOL_TYPE.TEXT_DROPDOWN,
        label: 'Dropdown'
      },
      {
        icon: '/images/icons/tool-text-date-icon.svg',
        type: TOOL_TYPE.TEXT_DATE,
        label: 'Date'
      }
    ]
  },
  {
    icon: '/images/icons/tool-table-icon.svg',
    label: 'Table',
    subTools: [
      {
        icon: '/images/icons/tool-table-icon.svg',
        type: TOOL_TYPE.TABLE_STANDARD,
        label: 'Standard'
      },
      {
        icon: '/images/icons/tool-table-status-icon.svg',
        type: TOOL_TYPE.TABLE_STATUS,
        label: 'Status'
      },
      {
        icon: '/images/icons/tool-table-requirement-icon.svg',
        type: TOOL_TYPE.TABLE_REQUIREMENT,
        label: 'Requirement'
      }
    ]
  },
  {
    icon: '/images/icons/tool-chart-icon.svg',
    label: 'Chart',
    subTools: [
      {
        icon: '/images/icons/tool-chart-bar-icon.svg',
        type: TOOL_TYPE.CHART_BAR,
        label: 'Bar Chart'
      },
      {
        icon: '/images/icons/tool-chart-line-icon.svg',
        type: TOOL_TYPE.CHART_LINE,
        label: 'Line Chart'
      },
      {
        icon: '/images/icons/tool-chart-scatter-icon.svg',
        type: TOOL_TYPE.CHART_SCATTER,
        label: 'Scatter Chart'
      },
      {
        icon: '/images/icons/tool-chart-pie-icon.svg',
        type: TOOL_TYPE.CHART_PIE,
        label: 'Pie Chart'
      },
      {
        icon: '/images/icons/tool-chart-donut-icon.svg',
        type: TOOL_TYPE.CHART_DONUT,
        label: 'Donut Chart'
      },
      {
        icon: '/images/icons/tool-chart-bubble-icon.svg',
        type: TOOL_TYPE.CHART_BUBBLE,
        label: 'Bubble Chart'
      },
      {
        icon: '/images/icons/tool-chart-critical-plot-icon.svg',
        type: TOOL_TYPE.CHART_CRITICAL_PLOT,
        label: 'Critical Plot'
      },
      {
        icon: '/images/icons/tool-chart-box-plot-icon.svg',
        type: TOOL_TYPE.CHART_BOX_PLOT,
        label: 'Box Plot'
      },
      {
        icon: '/images/icons/tool-chart-radar-icon.svg',
        type: TOOL_TYPE.CHART_RADAR,
        label: 'Radar'
      }
    ]
  },
  {
    icon: '/images/icons/tool-image-icon.svg',
    label: 'Image',
    subTools: [
      {
        icon: '/images/icons/tool-image-icon.svg',
        type: TOOL_TYPE.IMAGE_SINGLE,
        label: 'Single'
      },
      {
        icon: '/images/icons/tool-image-carousel-icon.svg',
        type: TOOL_TYPE.IMAGE_CAROUSEL,
        label: 'Carousel'
      }
    ]
  },
  {
    icon: '/images/icons/tool-video-icon.svg',
    label: 'Video',
    subTools: [
      {
        icon: '/images/icons/tool-video-icon.svg',
        type: TOOL_TYPE.VIDEO_STANDARD,
        label: 'Standard'
      },
      {
        icon: '/images/icons/tool-video-youtube-icon.svg',
        type: TOOL_TYPE.VIDEO_YOUTUBE,
        label: 'YouTube'
      }
    ]
  },
  {
    icon: '/images/icons/tool-smart-icon.svg',
    label: 'Smart Elements',
    subTools: [
      {
        icon: '/images/icons/tool-smart-timeline-icon.svg',
        type: TOOL_TYPE.SMART_TIMELINE,
        label: 'Timeline'
      },
      {
        icon: '/images/icons/tool-smart-file-upload-icon.svg',
        type: TOOL_TYPE.SMART_FILE_UPLOAD,
        label: 'File Upload'
      },
      {
        icon: '/images/icons/tool-smart-action-icon.svg',
        type: TOOL_TYPE.SMART_ACTION,
        label: 'Action Button'
      }
    ]
  },
]
