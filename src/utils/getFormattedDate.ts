export const getFormattedDate = (date: Date) => {
  if (!date) return "";

  const day = date?.toDateString();
  const time = date?.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });

  return day + " " + time;
};
