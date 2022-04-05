function searchWord(test, string) {
  let arr = string.split(' ')
  arr.forEach((word, idx) => {
    if (/[^a-z]/gi.test(word[word.length - 1])) {
      if (word.toLowerCase().substring(0, word.length - 1) === test.toLowerCase()) {
        arr[idx] = '**' + word.toUpperCase() + '**';
      }
    } else if (word.toLowerCase() === test.toLowerCase()) {
      arr[idx] = '**' + word.toUpperCase() + '**';
    }
  });

  return arr.join(' ');
}


const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3