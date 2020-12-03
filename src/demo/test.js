/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  const res = [];
  const visit = [];
  s = s.split('').sort().join('');
  function dfs(path) {
    if (path.length === s.length) res.push(path);
    for (let i = 0; i < s.length; i++) {
      if (visit[i] || (i > 0 && s[i] === s[i - 1] && visit[i - 1])) continue;
      visit[i] = true;
      dfs(path + s[i])
      visit[i] = false;
    }
  }
  dfs('');
  return res
};
// permutation('abac')
console.log(permutation('abac'))