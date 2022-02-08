const RequestHeaders = ({ headers }) => {
  const headerNames = Object.keys(headers)
  console.log('Headers: ', headerNames)
  return (
    <ul>
      {headerNames.map(headerName => 
        <li key={headerName}><b>{headerName}: </b>{headers[headerName]}</li>
      )}
    </ul>
  )
};

export default RequestHeaders;