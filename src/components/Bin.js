import axios from 'axios';

const baseURL = process.env.REACT_APP_NODE_ENV === 'development' 
                ? process.env.REACT_APP_DEV_BASE_URL 
                : process.env.REACT_APP_PROD_BASE_URL;

const Bin = ({ bin, setBinContents }) => {
  const showBin = async (event) => {
    event.preventDefault();
    const binURL = event.target.value;
    try {
      const response = await axios.get(baseURL + `bin/${binURL}?inspect`);
      setBinContents([...response.data])
    } catch (err) {
      console.log(err)
      setBinContents([])
    }
  }

  const copyToClipboard = async (event) => {
    const text = baseURL + 'bin/' + bin;
    navigator.clipboard.writeText(text)
      .then(response => {
        console.log('Copied to clipboard')
      })
      .catch(err => {
        console.log('Error copying to clipboard')
      });
  };

  return (
    <li className='bin'>
      <button className="button" onClick={showBin} value={bin}>bin/{bin}</button>
      <i className="fa fa-copy copy-icon" onClick={copyToClipboard}></i>
    </li> 
  )
};

export default Bin;