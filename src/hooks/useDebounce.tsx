import React from "react";

interface IProps {
  func: (...args: any) => void;
  debounceTime: number;
}

export default function useDebounce(props: IProps) {
  const debounceRef = React.useRef<any>();

  const cancel = () => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
  };
  const debounceCall = (...args: any) => {
    cancel();
    debounceRef.current = setTimeout(() => {
      props.func(...args);
    }, props.debounceTime);
  };
  return [debounceCall, cancel];
}
