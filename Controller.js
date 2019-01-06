
const home=[
    


    {

        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsbvYmZUqlwNnohRQn6BBXe02-NYVDhQ3-HFGUdGmgETiPYXkGg",
        "title":"SIMMBA Tere Bin | Ranveer Singh, Sara Ali Khan",
        "date":"Dec 13, 2018",
        "company":"Sony tv",
        "views":"43,065,372",
        "comment":"I somewhere thought that he is Akshay Kumar in this song" 
    },


{
    "image":"https://usafederalholidays.com/wp-content/uploads/2015/04/easter_egg_hunt_bunny-300x199.jpg",
    "title":"SQL Query Interview Questions",
    "date":"Nov 23, 2017",
    "views":"93,085,372",
    "company":"Gold tv",
    "comment":"Sqlis like BMW" ,
},





{
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_biWSq-L_VnIl8vd6CcadeuDTLC7kF-lkBL4gbG7pqwVAOV4R",
    "title":"The Rise and Fall of Java",
    "date":"Jan 31, 2016",
    "views":"83,065,372",
    "company":"Sony tv",
    "comment":"Node is like BMW" ,
},



{
    "image":"http://animated-gifs.org/wp-content/uploads/2011/12/chick-hatch-easter-egg-ea.gif",
    "title":"What is Dependency Injection? | Why | Spring",
    "date":"Oct 13, 2017",
    "views":"6783,065,872",
    "company":"Hd tv",
    "comment":"React  is like BMW" ,
},


{

    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG3zaNCxWz_L-w_9sjj07UroHkz1OHX0afs0szaechxXwGXY3"  ,
    "title":"Spring | Autowire | Dependency Injection |",
    "date":"Mar 13, 2017",
    "views":"6983,065,872",
    "company":"Zee tv",
    "comment":"Spring is like BMW" ,
},

{

    "image":"https://img.etimg.com/thumb/msid-66861953,width-300,imgsize-331872,resizemode-4/iit-placement-bccl.jpg",
    "title":"Mongodb vs Python Comparison | Which One You Should Learn",
    "date":"Feb 13, 2017",
    "views":"893,065,872",
    "company":"RD tv",
    "comment":"Mongo  is like BMW" ,
},


{

    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDG3zaNCxWz_L-w_9sjj07UroHkz1OHX0afs0szaechxXwGXY3"  ,
    "title":"Spring | Autowire | Dependency Injection |",
    "date":"Mar 13, 2017",
    "views":"6983,065,872",
    "company":"Zee tv",
    "comment":"Spring is like BMW" ,
},

{

    "image":"https://img.etimg.com/thumb/msid-66861953,width-300,imgsize-331872,resizemode-4/iit-placement-bccl.jpg",
    "title":"Mongodb vs Python Comparison | Which One You Should Learn",
    "date":"Feb 13, 2017",
    "views":"893,065,872",
    "company":"RD tv",
    "comment":"Mongo  is like BMW" ,
},


{


    "image":"https://usafederalholidays.com/wp-content/uploads/2015/04/easter_egg_hunt_bunny-300x199.jpg ",
    "title":"Mongodb vs Python Comparison | Which One You Should Learn",
    "date":"Feb 13, 2017",
    "views":"893,065,872",
    "company":"RD tv",
    "comment":"Mongo  is like BMW" ,
},


{
       
    "image":"https://usafederalholidays.com/wp-content/uploads/2015/04/easter_egg_hunt_bunny-300x199.jpg",
     "title":"SIMMBA Tere Bin | Ranveer Singh, Sara Ali Khan",
     "views":"43,065,372",
     "company":"zee tv",
     "comment":"I somewhere thought that he is Akshay Kumar in this song"
    },






];




class Controller{
    static getAllHome(req,res){
        res.json(home);

    }
}
module.exports=Controller;