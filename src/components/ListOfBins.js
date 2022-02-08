import Bin from './Bin';

const ListOfBins = ({ binList,setBinContents }) => {
  return (
    <div>
      <h3>Display Bin</h3>
      <ul>
        {binList.map(bin =>
          <Bin key={bin} bin={bin} setBinContents={setBinContents} />      
        )}
      </ul>
    </div>
  )
};

export default ListOfBins;