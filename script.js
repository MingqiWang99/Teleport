let quotes=[
           'Me: [Call]  2020-2-10 12:04',
           'Karen: [Call]  2020-2-10 13:03',
           'Me: It seems like your internet is unstable. 2020.4.3 17:33',
           'Me: Mail service closes at 8pm. 2020-3-13 00:28',
           'Karen: It says it will arrive by 8p, you can go and check before they close! Tomorrow morning also works. 2020-3-13 00:32 ',
           "Karen: What's wrong with you? 2020-3-13 08:57",
           "Lei: You should come back!!! Because there will be more risks in May! If you stay in the US under this circumstance, there's almost no opportunity for intern. What will you do in the next few months? 2020-3-13 09:13", 
           "Karen: What's up? 2020-3-13 07:49",
           "Me: I don't wnat to come back. 2020-3-13 08:53",
           "Me: It's also fine if I can't come back in the summer. 2020-3-13 08:53",
           'Karen: When can you leave? 2020-3-13 08:53',
           'Me: Just received the masks. 2020-3-14 07:08',
           'Karen: Hey honey, are you free to call? 2020-3-12 21:36',
           'Karen: Remember to pick up the package @Sev. It will arrive before 8 in the evening. 2020-3-13 00:23',
           "Me:I'll get an email if the package has arrived. 2020-3-13 00:23",
           'Me: I decide not to come back. 2020-3-13 08:35', 
           'Karen: You should come back. Do not be so stubborn. Otherwise it will be difficult if you want to go back in May. 2020-3-13 08:50 ',
           "Karen: If you decide to stay, you need to apply for housing extension ASAP. I'm afraid that there won't be enough housing. The earlier you can decide the earlier we can be relieved. 2020-3-13 13:29",      
           "Karen: Take care. 2020-3-16 01:31",
           "Me:I know. Don't worry. 2020-3-16 01:31",
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="images/favicon2.png">
    <p>${quotes[index]}</p>
    <img src="images/favicon1.png">
   </div>
    `;
    div.innerHTML=quote;
}

//show and hide image on click

var a;
 function show_hide1()
 { if(a==1)
    {
      document.getElementById("image1").style.display="none";
      return a=0;
    }
      else
        {
          document.getElementById("image1").style.display="inline";
          return a=1;
        }
 }

 var b;
 function show_hide2()
 { if(b==1)
    {
      document.getElementById("image2").style.display="none";
      return b=0;
    }
      else
        {
          document.getElementById("image2").style.display="inline";
          return b=1;
        }
 }

 var c;
 function show_hide3()
 { if(c==1)
    {
      document.getElementById("image3").style.display="none";
      return c=0;
    }
      else
        {
          document.getElementById("image3").style.display="inline";
          return c=1;
        }
 }
 var d;
 function show_hide4()
 { if(d==1)
    {
      document.getElementById("image4").style.display="none";
      return d=0;
    }
      else
        {
          document.getElementById("image4").style.display="inline";
          return d=1;
        }
 }

//function displayImage() {
  //var x = document.getElementById("chatImage");
 // if (x.style.display === "none") {
  //  x.style.display = "block";
 // } else {
 //   x.style.display = "none";
 // } }

