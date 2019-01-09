import React,{Component} from 'react';

class Home extends Component {
     render(){
     
         return(
            <div className="container">
 <div class="panel panel-danger">
      <div class="panel-heading"></div>
      <div class="panel-body">
        <div className="container">
        <h2>Triodesk</h2>
<p>HTML is the standard markup language for creating Web pages.

HTML stands for Hyper Text Markup Language
HTML describes the structure of Web pages using markup
HTML elements are the building blocks of HTML pages
HTML elements are represented by tags
HTML tags label pieces of content such as "heading", "paragraph", "table", and so on
Browsers do not display the HTML tags, but use them to render the content of the page</p>
  <ul class="nav nav-pills bg-dark">
    <li class="active"><a class="btn btn-danger navbar-btn" data-toggle="pill" href="#home">Web Design</a></li>
    <li><a data-toggle="pill" class="btn btn-danger navbar-btn" href="#menu1">Mobile App</a></li>
    <li><a data-toggle="pill" class="btn btn-danger navbar-btn" href="#menu2">Web Application</a></li>
    <li><a data-toggle="pill" class="btn btn-danger navbar-btn" href="#menu3">React  Angular</a></li>
  </ul>
  
  <div class="tab-content">
    <div id="home" class="tab-pane fade in active">
      <h3>Marketing and communication design</h3>
     <p>Marketing and communication design on a website may identify what works for its target market. This can be an age group or particular strand of culture; thus the designer may understand the trends of its audience. Designers may also understand the type of website they are designing, meaning, for example, that (B2B) business-to-business website design considerations might differ greatly from a consumer targeted website such as a retail or entertainment website. Careful consideration might be made to ensure that the aesthetics or overall design of a site do not clash with the clarity and accuracy of the content or the ease of web navigation,[9] especially on a B2B website. Designers may also consider the reputation of the owner or business the site is representing to make sure they are portrayed favourably.</p>
     <h3>User experience design and interactive design</h3>
     <p>User understanding of the content of a website often depends on user understanding of how the website works. This is part of the user experience design. User experience is related to layout, clear instructions and labeling on a website. How well a user understands how they can interact on a site may also depend on the interactive design of the site. If a user perceives the usefulness of the website, they are more likely to continue using it. Users who are skilled and well versed with website use may find a more distinctive, yet less intuitive or less user-friendly website interface useful nonetheless. However, users with less experience are less likely to see the advantages or usefulness of a less intuitive website interface. This drives the trend for a more universal user experience and ease of access to accommodate as many users as possible regardless of user skill.[10] Much of the user experience design and interactive design are considered in the user interface design.

Advanced interactive functions may require plug-ins if not advanced coding language skills. Choosing whether or not to use interactivity that requires plug-ins is a critical decision in user experience design. If the plug-in doesn't come pre-installed with most browsers, there's a risk that the user will have neither the know how or the patience to install a plug-in just to access the content. If the function requires advanced coding language skills, it may be too costly in either time or money to code compared to the amount of enhancement the function will add to the user experience. There's also a risk that advanced interactivity may be incompatible with older browsers or hardware configurations. Publishing a function that doesn't work reliably is potentially worse for the user experience than making no attempt. It depends on the target audience if it's likely to be needed or worth any risks.</p>
    </div>
    <div id="menu1" class="tab-pane fade">
      <h3>Google Play</h3>
    <p>Google Play (formerly known as the Android Market) is an international online software store developed by Google for Android devices. It opened in October 2008.[16] In July 2013, the number of apps downloaded via the Google Play Store surpassed 50 billion, of the over 1 million apps available.[17] As of September 2016, according to Statista the number of apps available exceeded 2.4 million. The store generated a revenue of 6 billion U.S. dollars in 2015.</p>
    <h3>App Store</h3>
    <p>Apple's App Store for iOS was not the first app distribution service, but it ignited the mobile revolution and was opened on July 10, 2008, and as of September 2016, reported over 140 billion downloads. The original AppStore was first demonstrated to Steve Jobs in 1993 by Jesse Tayler at NeXTWorld Expo[18] As of June 6, 2011, there were 425,000 apps available, which had been downloaded by 200 million iOS users.[19][20] During Apple's 2012 Worldwide Developers Conference, CEO Tim Cook announced that the App Store has 650,000 available apps to download as well as 30 billion apps downloaded from the app store until that date.[21] From an alternative perspective, figures seen in July 2013 by the BBC from tracking service Adeven indicate over two-thirds of apps in the store are "zombies", barely ever installed by consumers.[22]</p>
    </div>
    <div id="menu2" class="tab-pane fade">
      <h3>Development</h3>
<p>Writing web applications is often simplified by the use of web application frameworks such as Django, Ruby on Rails, and Symfony. These frameworks facilitate rapid application development by allowing a development team to focus on the parts of their application which are unique to their goals without having to resolve common development issues such as user management.[6] Many of the frameworks in use are open-source software.

The use of web application frameworks can often reduce the number of errors in a program, both by making the code simpler, and by allowing one team to concentrate on the framework while another focuses on a specified use case. In applications which are exposed to constant hacking attempts on the Internet, security-related problems can be caused by errors in the program. Frameworks can also promote the use of best practices[7] such as GET after POST.

In addition, there is potential for the development of applications on Internet operating systems, although currently there are not many viable platforms that fit this model.</p>
   <h3>Structure</h3>
   <p>Applications are usually broken into logical chunks called "tiers", where every tier is assigned a role.[4] Traditional applications consist only of 1 tier, which resides on the client machine, but web applications lend themselves to an n-tiered approach by nature.[4] Though many variations are possible, the most common structure is the three-tiered application.[4] In its most common form, the three tiers are called presentation, application and storage, in this order. A web browser is the first tier (presentation), an engine using some dynamic Web content technology (such as ASP, CGI, ColdFusion, Dart, JSP/Java, Node.js, PHP, Python or Ruby on Rails) is the middle tier (application logic), and a database is the third tier (storage).[4] The web browser sends requests to the middle tier, which services them by making queries and updates against the database and generates a user interface.

For more complex applications, a 3-tier solution may fall short, and it may be beneficial to use an n-tiered approach, where the greatest benefit is breaking the business logic, which resides on the application tier, into a more fine-grained model.[4] Another benefit may be adding an integration tier that separates the data tier from the rest of tiers by providing an easy-to-use interface to access the data.[4] For example, the client data would be accessed by calling a "list_clients()" function instead of making an SQL query directly against the client table on the database. This allows the underlying database to be replaced without making any change to the other tiers.[4]

There are some who view a web application as a two-tier architecture. This can be a "smart" client that performs all the work and queries a "dumb" server, or a "dumb" client that relies on a "smart" server.[4] The client would handle the presentation tier, the server would have the database (storage tier), and the business logic (application tier) would be on one of them or on both.[4] While this increases the scalability of the applications and separates the display and the database, it still doesn't allow for true specialization of layers, so most applications will outgrow this model.[4]</p>
   </div>
    <div id="menu3" class="tab-pane fade">
      <h3>REACT or React </h3>
<p>in computer science
React (JavaScript library), a JavaScript library for building user interfaces, from Facebook
ReactOS, an open source operating system compatible with Microsoft Windows
in arts and entertainment
React (band), a 1990s American boys band made of Tim Cruz and Daniel Matrium
React (The Fixx album), a 1987 live album by the band The Fixx
React (Erick Sermon album), a 2002 album by rapper Erick Sermon
React (Erick Sermon song), a song from the album
React (Robert Rich and Ian Boddy album), a 2008 album by electronic musicians Robert Rich and Ian Boddy
React (book), originally Reacciona, a 2011 Spanish-language book
React Music Limited, a 1990s London based dance record label
React (media franchise), a metaseries of web videos created by the Fine Brothers which includes Kids React, Teens React, Elders React, YouTubers React, and Adults React, as well as a YouTube channel with other shows featuring regulars from the first three React series
React to That, a TV series based on the first two React series that was broadcast on Nickelodeon
Rapid Execution and Combat Targeting System, the current command and control system of the United States for nuclear intercontinental ballistic missiles
Radio Emergency Associated Communication Teams, a volunteer radio emergency service across the United States and Canada
Remote Electronically Activated Control Technology belt or REACT belt, a restraint device
Rapid Enforcement Allied Computer Team, a partnership of agencies against computer crime in California, USA, established in 1997 by the California Department of Justice
Research and Education Automatically Controlled Telescope, a telescope at Fenton Hill Observatory, New Mexico, USA
React - The Anti-Counterfeiting Network, a not-for-profit cooperative association fighting the trade in counterfeit goods</p>
   <h3>AngularJS</h3>
   <p>AngularJS is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.[5] The framework adapts and extends traditional HTML to present dynamic content through two-way data-binding that allows for the automatic synchronization of models and views. As a result, AngularJS de-emphasizes explicit Document Object Model (DOM) manipulation with the goal of improving testability and performance.

AngularJS's design goals include:

to decouple DOM manipulation from application logic. The difficulty of this is dramatically affected by the way the code is structured.
to decouple the client side of an application from the server side. This allows development work to progress in parallel, and allows for reuse of both sides.
to provide structure for the journey of building an application: from designing the UI, through writing the business logic, to testing.
AngularJS implements the MVC pattern to separate presentation, data, and logic components.[6] Using dependency injection, Angular brings traditionally server-side services, such as view-dependent controllers, to client-side web applications. Consequently, much of the burden on the server can be reduced.</p>
    </div>
  </div>
          
        </div>
      
      </div>
    </div>            </div>
         )
     }
}
export default Home