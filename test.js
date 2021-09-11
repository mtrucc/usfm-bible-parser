const fs = require('fs-extra');
const path = require('path');
let Parser = require('./src/parser.js');

async function readFile() {
  // let fileData = await fs.readFile('./02-GENcmn-cu89s.usfm', 'utf8');

  var inputDir = 'gen';
  var lang = 'zh-Hans';
  var parser = Parser(inputDir, lang);
  // parser.getBooks().then(e => console.log(e[0].getTexts()))
  let books = await parser.getBooks()
  let texts = await books[0].getTexts()
  // let parse = await books[0].parse(
  //   {onStartLine: function(text, chapter, verse){

  //   console.log('text :>> ', text);
  //   console.log('chapter :>> ', chapter);
  //   console.log('verse :>> ', verse);
  // }}
  // )
  // let getChapterCount = await books[0].getChapterCount()
  console.log('books :>> ', books);
  // console.log('parse :>> ', parse);
  // console.log('getChapterCount :>> ', getChapterCount);
  // const myUsfmParser = new grammar.USFMParser(fileData);
  // var jsonOutput = myUsfmParser.toJSON();
  // formatBooks(jsonOutput);
  // fs.writeJson('./bible_usfm.json', jsonOutput);
  // let bookList = fileData.split('\n');
  // console.log(`bookList`, bookList)
}

readFile();
