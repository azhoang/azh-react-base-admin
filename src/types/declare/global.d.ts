declare interface ImportMetaEnv {
  readonly VITE_PORT: number;
  // more env variables...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare interface Document {
  webkitExitFullscreen: ExitFullscreen;
  mozCancelFullScreen: ExitFullscreen;
  msExitFullscreen: ExitFullscreen;
}

declare interface HTMLElement {
  webkitRequestFullscreen: RequestFullscreen;
  mozRequestFullScreen: RequestFullscreen;
  msRequestFullscreen: RequestFullscreen;
}
declare interface IStepItem {
  title: string;
  Component: JSX.Element;
  allowJump: boolean;
  showOnHeader: boolean;
  preChangeStep?: () => Promise<boolean>;
}

declare interface IStepValue {
  steps: IStepItem[];
  activeStep: number;
  disableHeaderJump: boolean;
  jumpStep: (index: number) => () => Promise<void>;
  nextStep: () => Promise<void>;
  prevStep: () => Promise<void>;
  setSteps: (steps: IStepItem[]) => void;
  StepHeader: () => JSX.Element;
  setDisableHeaderJump: (status: boolean) => void;
  ActiveComponent: JSX.Element;
}

declare interface IStepperProps {
  steps?: IStepItem[];
  colorSchemeHeader?: string;
  disableHeaderJump?: boolean;
}

declare type ElementSelector = string | React.RefObject<HTMLElement>;
