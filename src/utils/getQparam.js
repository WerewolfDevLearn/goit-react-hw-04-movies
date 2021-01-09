import queryString from 'query-string';

export default function getQparam(search) {
  return queryString.parse(search);
}
