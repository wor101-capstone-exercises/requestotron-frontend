import axios from 'axios';
const baseURL = process.env.REACT_APP_NODE_ENV === 'development' 
                ? process.env.REACT_APP_DEV_BASE_URL 
                : process.env.REACT_APP_PROD_BASE_URL

const NewBinButton = ({ updateBinList }) => {
  const requestNewBin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(baseURL + 'bin');
      console.log('New Bin Response: ', response);
      updateBinList();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <button class="button" onClick={requestNewBin}>Request New Bin</button>
  )
}

export default NewBinButton;