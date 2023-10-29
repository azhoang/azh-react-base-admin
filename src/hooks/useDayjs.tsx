import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import React from "react";
import { globalState } from "@/states/global.state";
dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault(Intl.DateTimeFormat().resolvedOptions().timeZone);

export const useDayjs = () => {
  const customDayjs = dayjs.tz;
  const { timezone } = globalState();
  const dateToString = (
    date?: string | number | Date | dayjs.Dayjs | null | undefined,
  ) => {
    return customDayjs(date).format("YYYY, MMM D");
  };
  React.useEffect(() => {
    if (timezone) dayjs.tz.setDefault(timezone);
  }, [timezone]);
  return {
    dayjs: customDayjs,
    dateToString,
  };
};
