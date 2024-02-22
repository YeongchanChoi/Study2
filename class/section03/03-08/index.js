import axios from "axios";
function fetchAsync() {
  // 비동기
  const result = axios.get("https://koreanjson.com/posts/1");
  console.log(result);
}
/*
async function fetchSync() {
  // 동기
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(result);
  console.log(result.data.title);
}*/

const fetchSync = async () => {
  const result = await axios.get("https://koreanjson.com/posts/1");
  console.log(result);
  console.log(result.data.title);
};

fetchAsync();
fetchSync();
