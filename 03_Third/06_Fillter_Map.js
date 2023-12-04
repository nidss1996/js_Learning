const myBook = [
    {
        title:"title",
        genre:"Non-Fiction",
        publish: 1981,
        edition:2022
    },
    {
        title:"title",
        genre:"History",
        publish: 1988,
        edition:2012
    },
    {
        title:"title",
        genre:"Non-Fiction",
        publish: 1988,
        edition:2012
    },
    {
        title:"title",
        genre:"History",
        publish: 1981,
        edition:2022
    },
    {
        title:"title",
        genre:"History",
        publish: 1990,
        edition:2011
    },
    {
        title:"title",
        genre:"science",
        publish: 1981,
        edition:2015
    },
    {
        title:"title",
        genre:"Non-Fiction",
        publish: 1990,
        edition:2022
    },
    {
        title:"title",
        genre:"Science",
        publish: 1999,
        edition:2010
    },
    {
        title:"title",
        genre:"History",
        publish: 2001,
        edition:2002
    },
    

]

 let  values = myBook.filter((bk) =>bk.genre == "History" )
 //console.log(values)
 values = myBook.filter((bk) =>{  return (bk.genre === "Non-Fiction" && bk.edition == 2022)})
 //console.log(values)

 const mycode = [ 1,2,3,4, 5,6,7,8,9,10]

  //const result2 =mycode.map((num) =>  { return num*10 })
  //console.log(result2)

  // chaining 

  const result2 =mycode
                       .map((num) => (num*10))
                       .map((num)=>(num +1))
                       .filter((num) =>(num > 40) )

console.log(result2)
