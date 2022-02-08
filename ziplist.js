const list1 = ['a','b','c'];
const list2 = [1, 2, 3];


function zipList(list1s, list2s){
  let i = 0;
  let sumList = [];
  while(list1s[i]){
    sumList.push(list1s[i],list2s[i]);
    i++;
  }
  return sumList;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1s,list2s){
  return _.flatten(_.zip(list1s, list2s));
}
console.log(zipListTheSimpleWay(list1,list2));