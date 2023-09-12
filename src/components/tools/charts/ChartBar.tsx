import { FC } from "react";

import {
  AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  Legend, Category, Tooltip, DataLabel, ColumnSeries, Selection
}
  from '@syncfusion/ej2-react-charts';
import { ChartBarProps } from './types';
import { ToolsHeader } from "../toolsHeader/ToolsHeader";

export const ChartBar: FC<ChartBarProps> = (props) => {
  const { id } = props
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const selectionData: any[] = [
    { country: "USA", gold: 50, silver: 70, bronze: 45 },

  ];

  return (
    <div className="w-full h-full pb-[30px]">
      <ToolsHeader title='Crude Steel Production Annual Growth' />
      <ChartComponent id={id}
        primaryXAxis={primaryxAxis}
        selectionMode='Point'>
        <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Selection, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={selectionData} xName='country' yName='gold' name='Gold' type='Column'>
          </SeriesDirective>
          <SeriesDirective dataSource={selectionData} xName='country' yName='silver' name='Silver' type='Column'></SeriesDirective>
          <SeriesDirective dataSource={selectionData} xName='country' yName='bronze' name='Bronze' type='Column'>
          </SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>

  )

};
