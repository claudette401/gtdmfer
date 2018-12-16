function getHeader(pageName){

  let todaysDate = new Date().toDateString();
  let routineHeader = "Your Current Routine";


  switch (pageName) {
    case "today": return returnHTMLHeader(todaysDate); break;
    case "routine": return returnHTMLHeader(routineHeader); break;
  }



  function returnHTMLHeader(content) {
    let indexHeaderPre = "<header class='jumbotron'> <div class='row row-header'> <div class='col-12'> <h1>";
    let indexHeaderPost = "</h1> </div> </div> <div id='dailyProgress'></div> </header> ";
    return (indexHeaderPre+content+indexHeaderPost);
  }


}



function getFooter() {



let footerLongString =` 
          <footer class='container'>
              <div class='row row-footer justify-content-center'>         
                  <div class='col-auto offset-0 col-sm-2 text-center'>     
                    <h5>Links</h5>           
                    <ul class='list-unstyled'>
                        <li><a href='readME.html'>READ.me</a></li>
                        <li><a href='today.html'>Today</a></li>
                        <li><a href='default.js'>Routine</a></li>
                    </ul>
                  </div>

                  <div class='col-8 col-sm-6'>
                    <h5>What you do is what you are.</h5>
                    <blockquote>   
                       Sow a thought, and you reap an act;<br>
                       Sow an act, and you reap a habit;<br>
                       Sow a habit, and you reap a character;<br>
                       Sow a character, and you reap a destiny.<br>
                       -- Samuel Smiles
                    </blockquote>
                  </div>

                  <div  class='col-12 col-sm-2 text-center align-items-center'>
                    <h5>Find Out More</h5>
                    <a href='http://www.linkedin.com/in/'>LinkedIn</a><br>
                    <a href='http://reddit.com/'>Reddit</a><br>
                    <a href='http://youtube.com/'>YouTube</a><br>
                    <a href='mailto:gtdmfer.website@gmail.com'>Mail</a>
                  </div>
             </div>

             <div class='row row-footer justify-content-center'>             
                <div class='col-auto'>
                    <p>© Copyright 2018 Claudette Morell</p>
                </div>
             </div>
            </footer>
  `;

  return footerLongString;
}




