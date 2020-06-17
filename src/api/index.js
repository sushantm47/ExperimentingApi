import axios from 'axios';

const url = 'http://www.mocky.io/v2/5ecfd5dc3200006200e3d64b';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${country}`;
  }

  try {
    const {
      data: { name, character },
    } = await axios.get(changeableUrl);

    return { name, character };
  } catch (error) {
    return error;
  }
};
