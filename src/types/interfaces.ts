import { FunctionComponent } from "react";
import NextiWrapperDefault from "../classes/NextiWrapperDefault";
import NextiWrapperExtended from "../classes/NextiWrapperExtended";

type NextiWrapperClasses = NextiWrapperExtended | NextiWrapperDefault;
type NextiComponentConfig = {
  name: string,
  description?: string,
  wrapper: NextiWrapperClasses
}

export interface NextiComponent{
  config: NextiComponentConfig
  component: FunctionComponent
}