import { FC } from "react";
import { ToolsHeaderProps } from "./types";

export const ToolsHeader: FC<ToolsHeaderProps> = (props) => {
  const {title} = props
  return (
    <div className="w-full pt-[12px] pb-[12px] bg-lightBlue rounded-t-2xl text-white text-[22px] font-semibold text-center">{title}</div>
  )
}