import moment from 'moment';

export const formatDate = (timestamp, format='LLLL') => {
  if (!timestamp) {
    return "";
  }

  const date = moment(timestamp);

  return date.isValid() ? date.format(format) : timestamp;
}