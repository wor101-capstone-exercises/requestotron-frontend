import Bin from './Bin';

const ListOfBins = ({ binList,setBinContents }) => {
  return (
    <div className="bins">
      <h3>Available Bins</h3>
      <ul className="unorderedList">
        {binList.map(bin =>
          <Bin key={bin} bin={bin} setBinContents={setBinContents} />      
        )}
      </ul>
    </div>
  )
};

export default ListOfBins;