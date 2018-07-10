// needed for axios to run in IE11
import 'promise-polyfill/src/polyfill';

// used for http requests
import axios from 'axios';



// api instance
const api = axios.create({
  baseURL: baseUri,
  withCredentials: true
})

function fetch(path) {
  return api.get(path);
}

function post(path, data) {
  return api.post(path, data);
}



// environment variable
let isTestSession = true;

console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
  isTestSession = false;
}


// process variables
let baseUri = getParameterByName('base_uri');
let fileId = getParameterByName('fileId');
export let companyId = getParameterByName('companyId');
export let envelope = getParameterByName('envelope');
let sessionId = getParameterByName('sessionid');
let testCompanyId = getParameterByName('testCompanyId');


// used for getting parameters values from the form url
function getParameterByName(name) {
  let searchArr = window.location.search.split('?');
  let search = '?' + searchArr[searchArr.length - 1];
  let match = new RegExp('[?&]' + name + '=([^&]*)').exec(search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};



// used for compiling the webq url for different api calls
function getWebQUrl(path) {
  let url = baseUri + path;
  url += "?fileId=" + fileId;
  if (sessionId && sessionId != null) {
    url += "&sessionid=" + sessionId;
  }
  return url;
}



function getDomain(url) {
  return url.split("/").slice(0, 3).join("/");
}


// post a json to xmlconverter service that converts it to an xml and submits the xml by calling the /xml in BDR
export function saveInstance(data) {
  let url = getWebQUrl("/saveXml");
  return post(url, data);
};



// used for getting the prefill data obtained by converting the saved XML in BDR back to JSON by the xmlconverter 
export function getInstance() {
  let url = null;
  if (isTestSession) {
    url = "http://localhost:8080/static/prefill.json"
  } else {
    url = null;
    url = getWebQUrl("/download/converted_user_file");
  }
  return fetch(url);
};


// returns reporting party name
export function getReportingPartyName() {
  if (isTestSession) {
    return fetch('http://localhost:8080/static/country.html')
  } else {
    return fetch(envelope + '/country_name')
  }
}


// used for uploading file from within the webform
export function uploadFile(file) {
  var uploadUri;
  var domain = getDomain(window.location.href);
  var webqUri = getWebQUrl('/restProxyFileUpload');
  uploadUri = domain + webqUri + "&uri=" + envelope + "/manage_addDocument";

  return axios({
    method: 'post',
    withCredentials: true,
    async: false,
    cache: false,
    contentType: false,
    processData: false,
    url: uploadUri,
    data: file
  })

};

// used for fetching the files uploaded in the envelope. Buster needed to bust IE caching
export function getSupportingFiles() {
  const url = envelope + '/get_envelope_supporting_files?buster=' + new Date().getTime();
  return axios({
    method: "get",
    withCredentials: true,
    cache: false,
    url: url
  })
}
