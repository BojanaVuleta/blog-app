import { format, isValid } from 'date-fns';

const useFormattedDate = (dateString, outputFormat = 'yyyy-MM-dd HH:mm:ss') => {
  const date = new Date(dateString);

  if (!isValid(date)) {
    return ''; 
  }

  const formattedDate = format(date, outputFormat);
  return formattedDate;
};

export default useFormattedDate;