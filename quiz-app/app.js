//single state object

var state = {
    questions: [{

            question: '1)…focuses on talking an initial code and developing a minimum viable product',
            answers: ['Lean', 'Read', 'SDLC', 'Agile','SQL'],
            answerCorrect: 0
        },
        {

            question: '1)…focuses on talking an initial code and developing a minimum viable product',
            answers: ['Lean', 'Read', 'SDLC', 'Agile','SQL'],
            answerCorrect: 0
        },
        {
            question: '2)___is the process of using software to simulate a computer of some other device',
                answers: ['Visualization', 'Virtualization', 'Simulation', 'Normalization','Modeling'],
            answerCorrect: 1
        },
        {
            question: 'refers to the permissions attached to an object that specify which users are granted access to that object and the operations it is allowed to perform ?',
                answers: ['	Role-Based Access Control', 'swimming', 'crawling', 'rolling'],
            answerCorrect: 1
        },
        {
            question: '	Is a telecommunications network or compute network that extends over a large geographical distance  ?',
                answers: ['swimming', 'geographical distance' , '	WAN', 'Simulation'],
            answerCorrect: 2
        },
        {
            question: 'provides the flexibility of an iterative approach while ensuring a quality product?',
                answers: ['bark', 'Agile', 'insects', 'rodents'],
            answerCorrect: 1
        },
        {
            question: '	According Friedman software allows different software packages and databases to integrate with each other more easily is called..',
                answers: ['reptiles', 'cnidarians', 'Workflow software', 'mammals'],
            answerCorrect: 2
        },
        {
            question: 'Availability refers to…',
                answers: ['Ensuring that authorized parties can to access the information when needed', 'Under trees', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: '	Bargaining power of suppliers',
                answers: ['In caves', 'When a company has several suppliers to choose from, it can demand and lower price', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: 'Task of the Creative Commons organization',
                answers: ['In caves', 'Provide legal tools for a artist and authors', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: 'The .. refers to the idea of physical object being connected to the internet',
                answers: ['In caves', 'Under trees', 'In the ocean', '•	Internet of things '],
            answerCorrect: 3
        },
        {
            question: 'Platonusis a example of ',
                answers: ['In caves', 'Under trees', 'In the ocean', '•	Extranet'],
            answerCorrect: 3
        },
        {
            question: 'Programmer develops a new application. What component is described in an example?',
                answers: ['In caves', 'Under trees', 'Process', 'In trees'],
            answerCorrect: 2
        },
        {
            question: 'The core of a Customer Relationship Management program is:',
                answers: ['Customer database ', 'Under trees', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: 'The core of a Customer Relationship Management is used to',
                answers: ['In caves', 'Under trees', 'Deal effectively with all', 'In trees'],
            answerCorrect: 2
        },
        {
            question: '	The Digital Millennium Copyright Act',
                answers: ['In caves', 'Under trees', 'All answers are correct', 'In trees'],
            answerCorrect: 2
        },

        {
            question: '	The divide where Nielsen wrote that people don’t know the potential that digital device can give them ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: 'The idea of Moore’s Law is 	 ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', 'The number of transistors on a chip will double every two years'],
            answerCorrect: 3
        },
        {
            question: '		The type of connect that connects all Pull&Bear into one network is ',
                answers: ['In caves', 'Enpowerment', '	WAN', 'In trees'],
            answerCorrect: 2
        },
        {
            question: '	The Use of hardware firewall will not prevent which of the following: ',
                answers: ['The left of information and communication technology hardware', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: '		Thisperson aligns the plans and operations of the information systems with the strategic goals of the organizations ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', '	CIO'],
            answerCorrect: 3
        },
        {
            question: '		The person works with clients keep the team organized and communicates the status of the project to management ',
                answers: ['In caves', 'Project manager', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: '		This provision limits the liability of online service providers when someone using their services commits copyright infringement and save owners right ',
                answers: ['Save harbor', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: '	Threat of substitute product of services: ',
                answers: ['In caves', 'Enpowerment', '	When companies within one industry are forced to complete with industries producing alternate product or services', 'In trees'],
            answerCorrect: 2
        },
        {
            question: '	Trademark law protect…	 ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', 'Words, symbols or devices that differentiate goods or services from one another'],
            answerCorrect: 3
        },
        {
            question: '		Usability divide is ',
                answers: ['	Technology remains so complicated that many people couldn’t use an computer ever if they got one for free', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: 'Using the ….. approach, new system is tested in one prat of the organization before 	 ',
                answers: ['In caves', '	Pilot implementation  ', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: '	Choose a metadata ',
                answers: ['In caves', 'Enpowerment', 'File Size', 'In trees'],
            answerCorrect: 2
        },
        {
            question: '	Choose the object-type data ',
                answers: ['Flyyoufools.mp3', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: '	Choose utility software from the list: ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', '	Daemon Tools, WinRaR'],
            answerCorrect: 1
        },
        {
            question: '		Community-based tool that keeps track of the route you are travelling and how fast you are making your way to your destination',
                answers: ['In caves', 'Enpowerment', '	Waze', 'In trees'],
            answerCorrect: 2
        },
        {
            question: 'Digital technologies allows to…	 ',
                answers: ['In caves', 'Aggregate a information from multiple sources to create profiles of people ', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: 'Document Management system are used for…',
                answers: ['In caves', 'Enpowerment', 'In the ocean', 'Managing business process documentation '],
            answerCorrect: 3
        },
        {
            question: '	Fair use it',
                answers: ['In caves', 'Is a limitation on copyright law that allows for the use of protected works without prior authorization in specific cases', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: '	Fair use was created to allow all of the following except	 ',
                answers: ['In caves', 'Enpowerment', 'Derivative work', 'In trees'],
            answerCorrect: 2
        },
        {
            question: 'From options below choose one that compensates for the limited storage of electronic devices? ',
                answers: ['In caves', 'Using cloud technologies', 'In the ocean', 'In trees'],
            answerCorrect: 1
        },
        {
            question: 'From options below choose output devices ',
                answers: ['In caves', 'Enpowerment', 'Projector, monitor, headphones', 'In trees'],
            answerCorrect: 2
        },
        {
            question: 'From options below choose the correct statement ',
                answers: ['In caves', 'Enpowerment', 'In the ocean', 'Utility software includes software that allows you to fix or modify computer in some way'],
            answerCorrect: 3
        },
        {
            question: 'From options below choose the structured decision making ',
                answers: ['Producing a report on the change of stock', 'Enpowerment', 'In the ocean', 'In trees'],
            answerCorrect: 0
        },
        {
            question: '	From options below choose the unstructured decision making ',
                answers: ['Producing a report on the change of stock', 'Enpowerment', 'In the ocean', '•	Selecting media devices for advertising  '],
            answerCorrect: 3
        },
        {
            question: 'How are nanobots used in medicine ',
                answers: ['Producing a report on the change of stock', 'Enpowerment', 'They are introduced intro the human body to combat cancer or a specific disease', 'Selecting media devices for advertising '],
            answerCorrect: 2
        },
        {
            question: '	 	How can you avoid copyright infringement, but at the same time use information from the author',
                answers: ['Cite and mention the author in the document', 'Enpowerment', 'In the o', 'Selecting media devices for advertising '],
            answerCorrect: 0
        },
        {
            question: '83)what is the differences between structured and unstructured decisions?',
            answers: ['Visualization', 'A structured decision is usually one that is made quite often, while unstructured decisions are made for the first time', 'Simulation', 'Normalization','Modeling'],
            answerCorrect: 1
        },
        {
            question: 'How does EDI work?',
            answers: ['The computer-to-computer exchange of business document between companies', 'Read', 'SDLC', 'Agile','SQL'],
            answerCorrect: 0
        },
        {
            question: 'How will advances in wireless technologies and sensors make object “findable”?',
            answers: ['Visualization', 'Virtualization', 'They will allow physical object to send and receive data about themselves ', 'Normalization','Modeling'],
            answerCorrect: 2
        },
        {
            question: 'In what situations the quantitative data can considered as qualitative?',
            answers: ['climbing', 'swimming', 'crawling', 'Employee ID'],
            answerCorrect: 3
        },
        {
            question: 'In which phase of SDLC would you build a blueprint of the purposed system?',
            answers: ['Programming','•	Maintenance','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 0
        },
        {
            question: 'In which phase of SDLC would you fix errors in the new built and operation systems?',
            answers: ['bark', 'leaves', '•	Maintenance', 'rodents'],
            answerCorrect: 2
        },
        {
            question: 'It examines each packet entering or leaving the network and accepts or rejects it based on user-defined rules. What kind of information system security is it?',
            answers: ['reptiles', 'cnidarians', '•	Hardware firewall', 'mammals'],
            answerCorrect: 2
        },
        {
            question: 'It’s a simple but powerful tool for understanding the competitiveness of business environment, and for identifying company strategy’s potential profitability',
            answers: ['2-6 kg', 'cnidarians', 'mammal', '•	Porters’s Five Forces'],
            answerCorrect: 3
        },

        {
            question: 'Main Difference between hub and switch',
            answers: ['happy feet', 'slow feet', 'sharp toes', '•	Switch filters the packets and delivers the to a specific device, while the hub sends data to all devices un the network'],
            answerCorrect: 3
        },
        {
            question: 'Open-source software means that?',
            answers: ['In caves', 'Under trees', 'The source code is available for anyone to copy and use', 'In trees'],
            answerCorrect: 2
        }
        {
            question: 'In what situations the quantitative data can considered as qualitative?',
            answers: ['climbing', 'swimming', 'crawling', 'Employee ID'],
            answerCorrect: 3
        },
        {
            question: 'What does intellectual property mean?',
            answers: ['Property that derives from the work of the mind','•	Maintenance','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 0
        },
        {
            question: 'What does it means for a business to have a competitive advantage?',
            answers: ['bark', 'leaves', 'Company’s profitability is higher than the industry average', 'rodents'],
            answerCorrect: 2
        },
        {
            question: 'What does the term laggards mean?',
            answers: ['reptiles', 'User who are last to adopt an innovation', '•	Hardware firewall', 'mammals'],
            answerCorrect: 1
        },
        {
            question: 'What does the term VoIP mean',
            answers: ['It’s group of technologies for a delivery of voice communications and multimedia sessions over IP', 'cnidarians', 'mammal', 'Porters’s Five Forces'],
            answerCorrect: 0
        },
        {
            question: 'What force of the Porter’s forces analyzes the influence of buyers on the product?',
            answers: ['Bargaining power of client',
                'Australia',
                'Central and South America',
                'South East Asia'
            ],
            answerCorrect: 0
        },
        {
            question: 'What impact has information technology had on the way companies are organized?',
            answers: ['happy feet', 'Organizational structure has been flattened , with fewer layers of management', 'sharp toes', '•	Switch filters the packets and delivers the to a specific device, while the hub sends data to all devices un the network'],
            answerCorrect: 1
        },
        {
            question: 'What is a device that provides battery backup to critical components of the system?',
            answers: ['In caves', 'Under trees', 'UPS', 'In trees'],
            answerCorrect: 2
        }
        {
            question: 'What is a difference between RAM and hard disk?',
            answers: ['RAM can transfer data much faster than the hard disk', 'Virtualization', 'They will allow physical object to send and receive data about themselves ', 'Normalization','Modeling'],
            answerCorrect: 0
        },
        {
            question: 'What is a disadvantage of customizing an ERP system?',
            answers: ['climbing', 'swimming', 'crawling', 'Organizations have to maintain the changes themselves'],
            answerCorrect: 3
        },
        {
            question: 'What is a patent for?',
            answers: ['Programming','It provides the inventor with protection from others infringing on his or her invention','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 1
        },
        {
            question: 'What is a private data network that makes use of the public telecommunications infrastructure , maintaining privacy through the use of a tunneling protocol and security procedures?',
            answers: ['bark', 'leaves', 'VPN', 'rodents'],
            answerCorrect: 2
        },
        {
            question: 'What is Artificial intelligence?',
            answers: ['reptiles', 'cnidarians', '•	Hardware firewall', 'The theory and development of computer systems able to perform tasks normally requiring human intelligence, such as visual perception , speech recognition , decision-making , and translation between languages'],
            answerCorrect: 3
        }
        {
            question: 'What is Business process reengineering for?',
            answers: ['2-6 kg', 'To recreate the way work in order to achieve dramatic improvements is productivity', 'mammal', '•	Porters’s Five Forces'],
            answerCorrect: 1
        },
        {
            question: 'What is change management?',
            answers: ['Visualization', 'Virtualization', 'The oversight of the changes brought about in an organization ','Modeling'],
            answerCorrect: 2
        },
        {
            question: 'What is common security threat ?',
            answers: ['climbing', 'File permission ', 'crawling', 'Employee ID'],
            answerCorrect: 1
        },
        {
            question: 'What is database ?',
            answers: ['Programming','It’s organized collection of data which analyzed to identify new trends','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 1
        },
        {
            question: 'What IS development methodology allows to focus on quickly building a working model of the software , getting feedback from users?',
            answers: ['RAD', 'leaves', '•	Maintenance', 'rodents'],
            answerCorrect: 0
        },
        {
            question: 'What is difference between second-generation and third-generation languages?',
            answers: ['reptiles', 'cnidarians', '•	Hardware firewall', 'Third generation languages are not specific to hardware , second-generation languages are '],
            answerCorrect: 3
        },
        {
            question: 'What is difference between  World Wide Web and Web 2.0 eras ?',
            answers: ['2-6 kg', 'Users don’t need to have a special programming skills to put information online , because websites became more interactive', 'mammal', 'Porters’s Five Forces'],
            answerCorrect: 1
        },

        {
            question: 'What is enhanced situational awareness?',
            answers: ['happy feet', 'slow feet', 'sharp toes', 'Data from large numbers of sensors can give decision makers a heightened awareness of real-time events'],
            answerCorrect: 3
        },
        {
            question: 'What is enhanced situation awareness ?',
            answers: ['In caves', 'Under trees', 'The source code is available for anyone to copy and use', 'Data from large numbers of sensors can give decision makers a heightened awareness of real-time events'],
            answerCorrect: 3
        }
        {
            question: 'What is ISO Certification ',
            answers: ['climbing', 'swimming', 'crawling', 'Documents designed to ensure that the product, services and process a company uses conform to acceptable '],
            answerCorrect: 3
        },
        {
            question: 'What is Metcalfe’s Law?',
            answers: ['The value of a telecommunication network is proportional to the square of the number of connected users of the system','Maintenance','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 0
        },
        {
            question: 'What is multi-factor authentication ',
            answers: ['bark', 'leaves', 'It’s a method of confirming a users claimed identify in which a user is granted access only after successfully ', 'rodents'],
            answerCorrect: 2
        },
        {
            question: 'What is NORA',
            answers: ['reptiles', 'Process of collecting large quantities of a variety of information and then combining it to create profiles of individuals ', '•	Hardware firewall', 'mammals'],
            answerCorrect: 1
        },
        {
            question: 'What is one of the criticisms of ERP systems?',
            answers: ['happy feet', 'slow feet', 'sharp toes', 'ERP system will perform business the same way as in other companies'],
            answerCorrect: 3
        },
        {
            question: 'What is RAD software development?',
            answers: ['In caves', 'Under trees', 'The source code is available for anyone to copy and use', 'Quickly building a working model of the software, getting feedback form users, then using them to update the model'],
            answerCorrect: 3
        }
        {
            question: 'What is responsive design?',
            answers: ['climbing', 'swimming', 'crawling', 'An approach to web design which makes web pages render well on a variety of devices and window or screen sizes '],
            answerCorrect: 3
        },
        {
            question: 'What is switch ',
            answers: ['It’s a device that connects multiple devices together and filters packets based on within the connected devices','Maintenance','•	Hardware firewall','•	Employee ID'],
            answerCorrect: 0
        },
        {
            question: 'What Is the advantage of using a data warehouse?',
            answers: ['bark', 'leaves', 'Extract data from one or more of the organization’s databases and load it into the data warehouse for storage and analysis   ', 'rodents'],
            answerCorrect: 2
        },
        {
            question: 'What is the core of any information systems?',
            answers: ['data', 'Process of collecting large quantities of a variety of information and then combining it to create profiles of individuals ', '•	Hardware firewall', 'mammals'],
            answerCorrect: 0
        },
        {
            question: '84)What is the first line defence when setting up a network?',
            answers: ['climbing', 'swimming', 'Physical source', 'rolling'],
            answerCorrect: 2
        },
        {
            question: '85)\tWhat is the focus of the procedural programming language',
            answers: ['•\tSequence of a activities to be performed', 'leaves', 'insects', 'rodents'],
            answerCorrect: 0
        },
        {
            question: '86)\tWhat is the heart and brain of hardware, which computes and process data?',
            answers: ['bark', 'leaves', 'insects', '•\tCPU'],
            answerCorrect: 3
        },
        {
            question: '87)\tWhat is process of converting information or data into a code, especially to prevent unauthorized access?',
            answers: ['bark', 'leaves', 'insects', '•\tEncryption'],
            answerCorrect: 3
        },
        {
            question: '88)\tWhat is the relationship between HTML and CSS in website design',
            answers: ['•\tWhile HTML is used to the components of a web page, CSS are used to define the styles of component on a page', 'leaves', 'insects', 'rodents'],
            answerCorrect: 0
        },
        {
            question: '89)\tWhat is the term for strategy that tears down and recreates business processes, with a goal to reduce manufacturing errors and expenses',
            answers: ['bark', 'leaves', '•\tBRP', 'rodents'],
            answerCorrect: 2
        },
        {
            question: '90)\tWhat is the value in documenting a business process?',
            answers: ['bark', 'leaves', 'insects', '•\tIt allows better control and standardize of the process'],
            answerCorrect: 3
        },
        {
            question: '91)\tWhat is used to discover , model , analyze , measure , improve , optimize , and automate business process ?',
            answers: ['bark', 'tBusiness Process Management', 'insects', 'rodents'],
            answerCorrect: 1
        },
        {
            question: '92)\tWhat makes the lean methodology unique?',
            answers: ['bark', '•\tFull set or requirement for the system is not known when the project is launched', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '93)\tWhat organizations require agreement to an acceptable use policy (AUP) before those services can be accessed?',
            answers: ['bark', '•\tOrganizations that provide technology services to an group of constituents or the public', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '94)\tWhat protections are provided by FEBRA?',
            answers: ['•\tProtects student educational records ', 'leaves', 'insects', 'rodents'],
            answerCorrect: 0
        },
        {
            question: '95)\tWhat protections are provided by HIPPA?',
            answers: ['bark', 'leaves', '•\tProtect records related to health care as a special class of personally identifiable information ', 'rodents'],
            answerCorrect: 2
        },
        {
            question: '96)\tWhat role does BPM play in allowing a company to differentiate itself?',
            answers: ['bark', 'leaves', '•\tEmpower employees , enforce best practices and consistency', 'rodents'],
            answerCorrect: 2
        },{
            question: '97)\tWhat technology provides a wireless Internet connection ?',
            answers: ['•\tWi-Fi', 'leaves', 'insects', 'rodents'],
            answerCorrect: 0
        },{
            question: '98)\tWhat was one of the key points of The Rise of the Network Society',
            answers: ['bark', 'leaves', '•\tNew , global economic activity was different from the past , because it’s an economy with the capacity to work as a unit in real time on a planetary scale', 'rodents'],
            answerCorrect: 2
        },
        {
            question: '99)\tWhat was revolutionary about Web 2.0 ?',
            answers: ['bark', 'leaves', 'insects', '•\tAnyone could post content to the web , without the need for understanding HTML or webserver technology'],
            answerCorrect: 3
        },
        {
            question: '100)\tWhat was the mission of OLPC?',
            answers: ['bark', '•\tEmpower the children of development countries to learn by providing one connected laptop to every school-age child', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '101)\tWhat is the most impactful trend in digital technologies in the last decades?',
            answers: ['bark', '•\tAdvent of mobile technologies', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '102)\tWhat was the original purpose of creating a TCP/IP?',
            answers: ['bark', '•\tAllow network is running on different protocols to have an intermediary protocol that would allow them to communicate ', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '103)\tWhen a device intends to send a message to another device, it breaks the message down into smaller pieces, called ____. Each____ has the sender’s address, the destination address, a sequence number ,and a price of the overall message to be sent',
            answers: ['•\tPacket', 'leaves', 'insects', 'rodents'],
            answerCorrect: 0
        },{
            question: '104)\tWhich concept determines what resource users can access after they log on?',
            answers: ['bark', '•\tAccess control ', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '105)\tWhich implementation methodology is very fast and the least expensive, but the riskiest as well?',
            answers: ['bark', 'leaves', 'insects', '•\tDirect cutover'],
            answerCorrect: 3
        },{
            question: '106)\tWhich of following would bot gain copyright protection',
            answers: ['bark', '•\tCompany location', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '107)\tWhich of the following describes an ERP system?',
            answers: ['bark', '•\t.ERP systems have been widely adopted in large organizations to store critical knowledge used to make the decisions that drive the organizations performance ', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '108)\tWhich of the following is a characteristic of Agile development',
            answers: ['bark', '•\tAll answers are correct', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '109)\tWhich of the following is an example of the advantages of CRM?',
            answers: ['bark', '•\tAll of above', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '110)\tWhich of the following Is not a principle that should guide business process reengineering?',
            answers: ['bark', '•\tFully redocument legacy processes', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '111)\tWhich of the following is not and example if a business process?',
            answers: ['bark', '•\tTesting software', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '112)\tWhich of the following is not Big Data problem?',
            answers: ['bark', '•\tProcessing student attendance data every six month', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '113)\tWhich of the following is not usually the objective of a Code o Ethics ?',
            answers: ['bark', '•\tEnhance the profits of the business continuously  ', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '114)\tWhich of the following statement about ERP system is true?',
            answers: ['bark', '•\tERP integrates finance, HR, manufacturing, supply chain, services, procurement processes into a single system ', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '115)\tWhich of the following terms indicated that information is  to be read only by those people of whom it is intended?',
            answers: ['bark', '•\tConfidentiality', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '116)\tWhich part of the information Security Triad assumes that information can be accessed and modified by anyone authorized to be so in an appropriate timeframe?',
            answers: ['bark', '•\tavailability', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '117)\tWhich system allows users to brainstorm ideas together without necessity of physical, face-to-face meeting?',
            answers: ['bark', '•\tCollaborative systems', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '118)\tWhich tool allow a designer to develop software with little or no programming',
            answers: ['bark', '•\tCase', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '119)\tWhich tool provide comprehensive facilities to computer programmers for software development and assist in writing program?',
            answers: ['bark', '•\tIDE', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '120)\tWho develops information systems by designing, developing, and installing new software',
            answers: ['bark', '•\tSoftware engineer', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '121)\tWhy do organizations use Private cloud',
            answers: ['bark', '•\tProvide the organization with greater control and information privacy', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '122)\tWhy the reorganizations of business processes has received a bad reputation in many organizations?',
            answers: ['bark', '•\tIt was used an excuse for cost cutting that really had nothing to do with BRP', 'insects', 'rodents'],
            answerCorrect: 1
        },{
            question: '•\tIt was used an excuse for cost cutting that really had nothing to do with BRP',
            answers: ['bark', '•\tBecause it needs a specific skill for an limited amount of time, and it can cut costs', 'insects', 'rodents'],
            answerCorrect: 1
        }
    ],

    currentQuestion: 0,
    userScore: 0
}

//register when start button is clicked and removes div with heading
//and start button
function clickStart() {
    $('.js-startPage').on('click', 'button', function(event) {

        $('.js-startPage').remove();
        $('#question-container').removeClass('hidden');
    })
};

//register when an answer/button has been clicked/chosen by the user
function clickAnswer(chosenElement, state) {

    var chosenAnswer = $(chosenElement).val();

    //if the chosen answer is correct, then tell the user "correct", otherwise "wrong :("
    if (chosenAnswer == state.questions[state.currentQuestion].answerCorrect) {

        state.userScore += 1;
        $('.response1').text('Correct!');
    } else {
        $('.response1').text('Wrong :(');

        //add class "wrong answer" so that the button that was clicked can be
        //marked with a red colour
        $(chosenElement).addClass('wrong-answer');
    }

    //add class to the correct answer so that this can be highlighted in green
    $('.button' + state.questions[state.currentQuestion].answerCorrect).addClass('button-correct');

    //remove hover class from button so the highlighted answers will still stay red and green
    //when you hover over them
    $('button').removeClass('hover');

    //show result
    $('.result').removeClass('hidden');
    //show continue button
    $('.js-continue').removeClass('hidden');
    //disable the answer buttons so user cannot continue clicking them
    $('.js-answer').attr('disabled', true);

    return state;
}


function clickContinue(state) {
    //increment which question user is on by one when continue is clicked
    state.currentQuestion += 1;
    //hide continue button and result again, remove questions and answer
    $('.js-continue').addClass('hidden');
    $('.result').addClass('hidden');
    $('section').remove();

    //if quiz is done insert "you're done" and user's score
    //remove count and score from bottom of page
    if (state.currentQuestion > 125) {
        $('body').append('<h1 class="end">You\'re done!</h1><p class ="endScore">You scored ' + state.userScore + " out of " + state.currentQuestion);
        $('.js-count').remove();
        $('.js-score').remove();

    } else {
        //if quiz is not done insert new question and answers and update user score and question count
        $('#question-container').append("<section class = 'question-container col-8'>" +
            "<p class='question'>" + state.questions[state.currentQuestion].question + "</p><br>" +
            "<button class='button0 js-answer hover' value = '0'>" + state.questions[state.currentQuestion].answers[0] + "</button><br>" +
            "<button class='button1 js-answer hover' value = '1'>" + state.questions[state.currentQuestion].answers[1] + "</button><br>" +
            "<button class='button2 js-answer hover' value = '2'>" + state.questions[state.currentQuestion].answers[2] + "</button><br>" +
            "<button class='button3 js-answer hover' value = '3'>" + state.questions[state.currentQuestion].answers[3] + "</button>" +
            "<button class='button4 js-answer hover' value = '4'>" + state.questions[state.currentQuestion].answers[4] + "</button>" +
            "</section>");

        $('.js-count').text("Question: " + (state.currentQuestion + 1) + "/" + state.questions.length);
        $('.js-score').text("Correct: " + state.userScore + "/" + state.currentQuestion);
    }

}

$(function() {
    clickStart();
    $('#question-container').on('click', 'button', function(event) {

        clickAnswer($(this), state);
    });

    $('.js-continue').click(function(event) {

        clickContinue(state);
    });

});