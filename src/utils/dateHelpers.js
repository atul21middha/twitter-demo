import moment from 'moment';

export const getCustomDateTime = (value = 0, unit = 'days', format = 'YYYY-MM-DD') => {
  if (value === 0) {
    return moment().format(format);
  } else {
    return moment()
      .add(value, unit)
      .format(format);
  }
};

export const getTimeDiffString = date => {
  const postDate = moment(date, 'ddd MMM DD YYYY kk:mm:ss Z');
  const currentDate = moment(new Date());
  const duration = moment.duration(currentDate.diff(postDate));
  const minutes = duration.asMinutes() | 0;
  const hours = duration.asHours() | 0;

  switch (true) {
    case minutes === 0:
      return 'Just now';
    case minutes < 60:
      return `${minutes} min`;
    case hours < 24:
      return `${hours} hours`;
    default:
      return postDate.format('DD MMM, YYYY');
  }
};