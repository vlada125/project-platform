import { FC, useEffect, useState } from 'react'
import { WidgetEditingTable } from '../WidgetEditingTable/WidgetEditingTable'

import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, CrosshairSettingsModel, TooltipSettingsModel,
  Legend, DateTime, Tooltip, DataLabel, LineSeries, Crosshair
}
  from '@syncfusion/ej2-react-charts';

import { ChartLineProps } from './types';
import { ToolsHeader } from '../toolsHeader/ToolsHeader';


export const ChartLine: FC<ChartLineProps> = (props) => {
  const { id } = props

  const [isEditing, setIsEditing] = useState<boolean>(false)


  const primaryxAxis: AxisModel = {
    title: '', minimum: new Date(2000, 1, 1),
    maximum: new Date(2006, 2, 11), intervalType: 'Years', valueType: 'DateTime'
  };
  const primaryyAxis: AxisModel = { crosshairTooltip: { enable: true, fill: 'green' } };
  const crosshair: CrosshairSettingsModel = { enable: true, lineType: 'Vertical' };
  const marker = { visible: true };
  const tooltip: TooltipSettingsModel = { enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}' };
  const trackData: any[] = [
    { x: new Date(2000, 2, 11), y: 15, y1: 39, y2: 60, y3: 75, y4: 85 },
    { x: new Date(2000, 9, 14), y: 20, y1: 30, y2: 55, y3: 75, y4: 83 },
    { x: new Date(2001, 2, 11), y: 25, y1: 28, y2: 48, y3: 68, y4: 85 },
    { x: new Date(2001, 9, 16), y: 21, y1: 35, y2: 57, y3: 75, y4: 87 },
    { x: new Date(2002, 2, 7), y: 13, y1: 39, y2: 62, y3: 71, y4: 82 },
    { x: new Date(2002, 9, 7), y: 18, y1: 41, y2: 64, y3: 69, y4: 74 },
    { x: new Date(2003, 2, 11), y: 24, y1: 45, y2: 57, y3: 81, y4: 73 },
    { x: new Date(2003, 9, 14), y: 23, y1: 48, y2: 53, y3: 84, y4: 75 },
    { x: new Date(2004, 2, 6), y: 19, y1: 54, y2: 63, y3: 85, y4: 73 },
    { x: new Date(2004, 9, 6), y: 31, y1: 55, y2: 50, y3: 87, y4: 60 },
    { x: new Date(2005, 2, 11), y: 39, y1: 57, y2: 66, y3: 75, y4: 48 },
    { x: new Date(2005, 9, 11), y: 50, y1: 60, y2: 65, y3: 70, y4: 55 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2007, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2008, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2009, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2010, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
    { x: new Date(2006, 2, 11), y: 24, y1: 60, y2: 79, y3: 85, y4: 40 },
  ];
console.log(id)
  return (
    <div className='w-full h-full'>

      {!isEditing ? (
      <div >
                <button className='absolute right-12 top-1 w-[36px] h-[36px] rounded-2xl cursor-pointer' onClick={() => setIsEditing(true)}>
          <img src="/images/icons/handle-menu-icon.svg" alt="" />
        </button>
      <ToolsHeader title='Crude Steel Production Annual Growth' />
        <ChartComponent id={id}
          primaryXAxis={primaryxAxis}
          crosshair={crosshair}
          tooltip={tooltip}>
          <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Crosshair, DateTime]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={trackData} xName='x' yName='y' name='John' type='Line' width={2}
              marker={marker} >
            </SeriesDirective>
            <SeriesDirective dataSource={trackData} xName='x' yName='y1' name='Andrew' type='Line' width={2}
              marker={marker} ></SeriesDirective>
            <SeriesDirective dataSource={trackData} xName='x' yName='y2' name='Thomas' type='Line' width={2}
              marker={marker} ></SeriesDirective>
            <SeriesDirective dataSource={trackData} xName='x' yName='y3' name='Mark' type='Line' width={2}
              marker={marker} ></SeriesDirective>
            <SeriesDirective dataSource={trackData} xName='x' yName='y4' name='William' type='Line' width={2}
              marker={marker} ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
 
      </div>

    ) : (
      <WidgetEditingTable />
    )}

    </div>
  )
};
