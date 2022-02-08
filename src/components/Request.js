const Request = ({req}) => {
  const headers = req.headers;
  const bodyString = req.body.toString();
  console.log(bodyString)

  return (

    <div>
      <h3>URL {req.url}</h3>
      <p><b>IP:</b>{JSON.stringify(req.ip)}</p>
      <p><b>Headers:</b>{JSON.stringify(headers)}</p>
      <p><b>Host:</b> {headers.host}</p>
      <p><b>Connection:</b> {headers.connection}</p>
      <p><b>Body:</b>{bodyString}</p>
    </div>
  )
};

export default Request;