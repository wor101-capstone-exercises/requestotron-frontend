import RequestHeaders from "./RequestHeaders";

const Request = ({req}) => {
  const headers = req.headers;
  const bodyString = req.body.toString();
  console.log(bodyString)

  return (

    <div>
      <h3>URL {req.url}</h3>
      <p><b>Time of Request: </b>{JSON.stringify(req.time)}</p>
      <p><b>IP: </b>{JSON.stringify(req.ip)}</p>
      <p><b>Method: </b>{JSON.stringify(req.method)}</p>
      <p><b>Headers: </b></p>
      <RequestHeaders headers={headers} />
      <p><b>Body: </b>{bodyString}</p>

    </div>
  )
};

export default Request;