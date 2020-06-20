import axios from 'axios';

export const migrate = async () => {
  await axios.all([
    axios.post('/restapi/activity/migrate'),
    axios.post('/restapi/parties/migrate'),
    axios.post('/restapi/users/migrate'),
  ]);
};
