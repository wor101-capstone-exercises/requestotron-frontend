import Request from './Request';

const Requests = ({binContents}) => {
  console.log(Array.isArray(binContents))
  binContents.forEach(request => console.log(request))

  return (
    <ul>
      {binContents.map(req => 
        <li className="request" key={req._id}>
          <Request req={req}/>
        </li>
        )}
    </ul>

  )
};

export default Requests;