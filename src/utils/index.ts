import moment from "moment";

export const isPastDate = (date: Date) => {
  return moment().isAfter(moment(date));
};

export const formatDate = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};
