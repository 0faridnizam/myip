fetch('https://json.geoiplookup.io')
  .then((response) => response.json())
  .then((data) => {
    document.getElementById('ip').innerHTML = data.ip;
    document.getElementById('country').innerHTML = data.country_name;
    document.getElementById('isp').innerHTML = data.isp;
    document.getElementById('asn').innerHTML = data.asn;
    document.getElementById('asn-org').innerHTML = data.asn_org;
  });
