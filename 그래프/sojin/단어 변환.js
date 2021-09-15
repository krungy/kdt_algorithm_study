function findNextWord(s1, s2) {
  let cnt = 0
  
  for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) cnt++
  }
  
  return cnt === 2 ? true : false
}

function solution(begin, target, words) {
  let answer = 0
  // 현재 탐색 위치에 따라 queue 를 관리
  let queue = [begin]
  // { hit: 0 , ... }
  // let visited = { [begin] : 0 } 으로 만들었는데, value 값을 ++ 하는 방식으로 풀 수 있을거같은데 잘 모르겠음
  // new set() 으로 만들까? ㅇㅋ { [begin] }
  const visited = new Set()
  let foundWordList = []
  
  // target 이 words 에 없으면 0 return
  if (!words.includes(target)) return 0
  
  while (queue.length) {
      // queue 에서 현재 탐색 할 단어를 하나 꺼냄
      // shift 를 안쓰는 방법은 너무 어려울듯..
      const curWord = queue.shift()
      
      if (curWord === target) return answer
      
      for (let i = 0; i < words.length; i++) {
          if (findNextWord(words[i], curWord)) {
              foundWordList.unshift(words[i])
          }
      }
      // queue 하나 뺀 후, queue 에 아무것도 없으면 foundWordList 를 넣어줌
      if (queue.length < 1) {
          answer++
          while (foundWordList.length) {
              queue.push(foundWordList.shift())
          }
          foundWordList = []
      }
      
  }
      
  return answer;
}