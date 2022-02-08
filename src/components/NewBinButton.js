import axios from 'axios';
const baseURL = process.env.REACT_APP_NODE_ENV === 'development' 
                ? process.env.REACT_APP_DEV_BASE_URL 
                : process.env.REACT_APP_PROD_BASE_URL;

const TooManyBins = (binList) => {
  const MAX_NUMBER_OF_BINS = 20;
  return binList.length >= MAX_NUMBER_OF_BINS
}

const NewBinButton = ({ binList, updateBinList }) => {
  const requestNewBin = async (event) => {
    event.preventDefault();

    if (TooManyBins(binList)) {
      window.alert('Requestotron is full! Perhaps you should vertically upgrade me with more memory!');
    } else {
      try {
        const response = await axios.post(baseURL + 'bin');
        console.log('New Bin Response: ', response);
        updateBinList();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <button class="button" onClick={requestNewBin}>Request New Bin</button>
  )
};

export default NewBinButton;