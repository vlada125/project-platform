// Dependencies
import React, { FC, useCallback, useMemo, useState, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Responsive, WidthProvider } from "react-grid-layout";
// Types
import { SectionProps } from "./types";
import { TOOL_TYPE } from "../ToolBar/types";
// Components
import { useProjectContext } from "../../contexts/ProjectContext";
import { StandardTable } from "../tools/tables/StandardTable";
import YoutubeVideo from "../tools/video/YoutubeVideo";
import {ChartPie} from "../tools/charts/ChartPie"
// Styles
import "./index.css";
import {ChartBar} from "../tools/charts/ChartBar";
import {ChartLine} from "../tools/charts/ChartLine";
import StatusTable from "../tools/tables/StatusTable";
import {SingleImage} from "../tools/images/SingleImage";
import { Files } from "../tools/files/Files";
import { TimeLine } from "../tools/charts/Timeline";
import { ChartBoxPlot } from "../tools/charts/ChartBoxPlot";

// Export component
export const Section: FC<SectionProps> = (props) => {
  // init ResponsiveReactGridLayout
  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    []
  );

  const { id } = props;

  const { sections, updateSection, removeWidget, removeSection } =
    useProjectContext();

  const [isEditing, setIsEditing] = useState(false);

  const [mounted, setMounted] = useState(false);

  const sectionData = useMemo(
    () => sections.find((section) => section.id === id),
    [sections, id]
  );

  const [layout, setLayout] = useState({ lg: sectionData?.widgets || [] });

  useEffect(() => {
    setMounted(true);
    setLayout({ lg: sectionData?.widgets || [] });
  }, [sectionData?.widgets]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: [
      TOOL_TYPE.TEMPLATES,
      // TOOL_TYPE.SECTION_ONE,
      // TOOL_TYPE.SECTION_TWO_ONE,
      // TOOL_TYPE.SECTION_TWO_TWO,
      // TOOL_TYPE.SECTION_TWO_THREE,
      // TOOL_TYPE.SECTION_THREE,
      TOOL_TYPE.TEXT_BOX,
      TOOL_TYPE.TEXT_SHORT_ANSWER,
      TOOL_TYPE.TEXT_PARAGRAPH,
      TOOL_TYPE.TEXT_MULTIPLE_CHOICE,
      TOOL_TYPE.TEXT_CHECKBOXES,
      TOOL_TYPE.TEXT_DROPDOWN,
      TOOL_TYPE.TEXT_DATE,
      TOOL_TYPE.TABLE_STANDARD,
      TOOL_TYPE.TABLE_STATUS,
      TOOL_TYPE.TABLE_REQUIREMENT,
      TOOL_TYPE.IMAGE_SINGLE,
      TOOL_TYPE.IMAGE_CAROUSEL,
      TOOL_TYPE.VIDEO_STANDARD,
      TOOL_TYPE.VIDEO_YOUTUBE,
      TOOL_TYPE.SMART_TIMELINE,
      TOOL_TYPE.SMART_FILE_UPLOAD,
      TOOL_TYPE.SMART_ACTION,
      TOOL_TYPE.CHART_BAR,
      TOOL_TYPE.CHART_LINE,
      TOOL_TYPE.CHART_SCATTER,
      TOOL_TYPE.CHART_PIE,
      TOOL_TYPE.CHART_DONUT,
      TOOL_TYPE.CHART_BUBBLE,
      TOOL_TYPE.CHART_CRITICAL_PLOT,
      TOOL_TYPE.CHART_BOX_PLOT,
      TOOL_TYPE.CHART_RADAR,
    ],
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#d3f5e1";
  if (isActive) {
    backgroundColor = "#d3f5e1";
  } else if (canDrop) {
    backgroundColor = "#d3f5e180";
  }

  const handleChange = useCallback(
    (event: any) => {
      if (sectionData) {
        updateSection({
          ...sectionData,
          title: event.target.value,
        });
      }
    },
    [sectionData, updateSection]
  );

  const renderComponent = (componentType: string, id: string) => {
    console.log(id)
    switch (componentType) {
      case TOOL_TYPE.TABLE_STANDARD:
        return <StandardTable />;
      case TOOL_TYPE.TABLE_STATUS:
        return <StatusTable />;
      case TOOL_TYPE.CHART_BAR:
        return <ChartBar id={id} />;
      case TOOL_TYPE.CHART_LINE:
        return <ChartLine id={id} />;
      case TOOL_TYPE.SMART_TIMELINE:
        return <TimeLine />
      case TOOL_TYPE.CHART_PIE:
        return <ChartPie id={id}/>
      case TOOL_TYPE.CHART_BOX_PLOT:
        return <ChartBoxPlot id={id} />
      case TOOL_TYPE.IMAGE_SINGLE:
        return <SingleImage />;
      case TOOL_TYPE.VIDEO_YOUTUBE:
        return <YoutubeVideo />;
      case TOOL_TYPE.SMART_FILE_UPLOAD:
        return <Files />;

      default:
        return (
          <div className="flex items-center justify-center">
            {componentType}
          </div>
        );
    }
  };


  const generateLayoutItem = () => {
    return layout?.lg.map((item) => (
      <div key={item.i} className="bg-white rounded-2xl pb-8 pl-8 pr-8 pt-10">
        <button className="absolute left-50 top-2 rotate-90 left-1/2 cursor-grab button-handle-drop">
          <img className='w-[13px] h-[23px]' src='/images/icons/handle.svg' alt='' />
        </button>
        {renderComponent(item.type, item.id)}
        <button
          className="absolute right-1 top-1 rounded-full text-xl text-white bg-[#FF2D52] w-[30px] h-[30px]"
          onClick={() => removeWidget(id, item.id)}
        >
          ×
        </button>
      </div>
    ));
  };



  const handleLayoutChange = (layout: any, layouts: any) => {
    if (sectionData) {
      const widgets = layouts.lg.map((item: any) => {
        const existingItem = sectionData?.widgets.find((d) => d.i === item.i);
        return { ...existingItem, x: item.x, y: item.y, w: item.w, h: item.h };
      });
      updateSection({
        ...sectionData,
        widgets: widgets,
      });
    }
  };

  return (
    <div className="container py-[11px] px-[100px] relative">
      <button
        className="absolute right-28  top-6 rounded-full text-2xl text-white bg-green-900 w-8 h-8"
        onClick={() => removeSection(id)}
      >
        ×
      </button>
      <div className="w-full py-2 bg-gradient-to-r from-cyan-600 to-slate-500 justify-center items-center gap-2.5 inline-flex rounded-t-xl">
        <div className="text-center  text-4xl font-bold">
          {isEditing ? (
            <input
              type="text"
              className="text-center outline-none"
              value={sectionData?.title}
              onChange={(e) => handleChange(e)}
              onBlur={() => handleBlur()}
              onKeyDown={(e) => handleKeyDown(e)}
              autoFocus
            />
          ) : (
            <h2
              onDoubleClick={() => handleDoubleClick()}
              className="text-white"
            >
              {sectionData?.title}
            </h2>
          )}
        </div>
      </div>
      <div className="w-full h-full min-h-[300px] flex bg-white p-4 rounded-b-xl">
        <div className="bg-green-500 min-w-full bg-opacity-10 border-[3px] border-dashed border-green-500 rounded-lg relative">
          <div
            className="w-full h-full flex flex-row p-8 gap-4"
            ref={drop}
            style={{ background: backgroundColor }}
          >
            {!sectionData?.widgets?.length ? (
              <p className="text-center text-white text-5xl font-medium m-auto">
                Add Items Here
              </p>
            ) : (
              <ResponsiveReactGridLayout
                className="widget-container"
                style={{ width: "100%", position: "relative" }}
                rowHeight={30}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layouts={layout}
                onLayoutChange={handleLayoutChange}
                useCSSTransforms={mounted}
                measureBeforeMount={false}
                compactType={"vertical"}
                draggableHandle=".button-handle-drop"
                isBounded={false}
              >
                {generateLayoutItem()}
              </ResponsiveReactGridLayout>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
