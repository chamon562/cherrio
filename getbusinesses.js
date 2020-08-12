const cheerio = require('cheerio')//import cheerio
const request = require('request')// thi is an alternative to axios
const URL = 'https://visitseattle.org/partners/?frm=partners&ptype=visitors-guide&s=&neighborhood=Capitol+Hill'
//can use request to call api and call back ahs three arguments
request(URL, (error, response, body)=>{
    let $ = cheerio.load(body)
    // console.log($.html())
    //css selectors . find takes selector and find maches inside of find 
    //this find the anchor and the attributes attr
    // let result = $('.search-result-preview').find('a').attr('title')
    //this shows how much shows 15 length of 15 because it found 15 of them
    let results = $('.search-result-preview')
    let resultsTitles = results.map(index, (element)=>{
        //map returns a new array and itterate through 
        // array its tacked onto incall back return wahtever you want
        let imgUrl = $(element).find('div').css('background-image')
        let imgUrl2 = $(element).find('div').attr('style')
        return {
            index: index,
            //element was a cheerio object and extracted just the title from the anchor tag
           title: $(element).find('a').attr('title'),
           //that would return to you all the inline styling with attr
           img: imgUrl2
        } 
         })
         console.log(resultsTitles.get())
    })
    //each i slike for each element is the individual div
    // results.each((index, element)=>{
    //     //if i want to see title on all of them use .each
    //     console.log($(element).find('a').attr('title'))
    // })
    // console.log(results.length)

    request(URL, (error, response, body) => { 
        let $ = cheerio.load(body); 
        let results = $('.search-result-preview') 
        let filteredResults = results.map((index, element)=>{ 
            let imgurl = $(element).find('.image-container').attr('style') 
            imgurl = imgurl.substring(22, imgurl.length-15) 
            return { title: $(element).find('a').attr('title'), img: imgurl } }) 
            console.log(filteredResults.get()) })