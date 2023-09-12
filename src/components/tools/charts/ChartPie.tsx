import { FC } from 'react'
import {
  AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel,
  IAccTextRenderEventArgs, IAccPointRenderEventArgs, AccumulationDataLabelSettingsModel
}
  from '@syncfusion/ej2-react-charts';

import { ChartPieProps } from './types';
import { ToolsHeader } from '../toolsHeader/ToolsHeader';

export const ChartPie: FC<ChartPieProps> = (props) => {
  const { id } = props
  const dataSource: any[] = [
    { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
    { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
    { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
    { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
    { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' },
    { x: 'Nov', y: 9, text: 'Nov: 9' }, { x: 'Dec', y: 3.5, text: 'Dec: 3.5' }
  ];

  
  const datalabel: AccumulationDataLabelSettingsModel = { visible: true, name: 'text', position: 'Outside' };

  return (
    <div className='w-full h-full'>
      <ToolsHeader title='Browser Market Share' />
      <AccumulationChartComponent id={id}>
        <Inject services={[AccumulationDataLabel]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={dataSource} xName='x' yName='y' groupTo='4' groupMode='Point' dataLabel={datalabel}></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>

  )

};
