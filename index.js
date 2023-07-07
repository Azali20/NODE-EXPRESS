let express = require('express');
let app = express();

app.set('view engine','ejs');

app.get('/', (req,res)=>{
    const student = {
        name:'Clinton Faraday',
        email:'clintonfaraday@gmail.com',
        age:'31',
        description:"Clinton Faraday is a talented and passionate web developer who is making waves in the digital world. With a deep-rooted love for all things tech, Clinton has embarked on an exciting journey to revolutionize the online landscape. As a natural problem solver, Clinton thrives on challenges and approaches each project with meticulous attention to detail. He believes in the power of collaboration and takes the time to understand his clients unique needs, translating their visions into functional and captivating digital experiences. With a keen eye for aesthetics and a deep understanding of user experience, Clinton crafts seamless interfaces that engage and delight users, leaving a lasting impact Beyond his technical prowess, Clinton is known for his strong work ethic and professionalism. He prides himself on delivering projects on time and exceeding expectations. His excellent communication skills and ability to work seamlessly within a team make him a valuable asset to any project.Clinton Faraday journey as a web developer is marked by his unwavering dedication, relentless curiosity, and passion for creating remarkable online experiences"
    }




    res.render('pages/home',{students:student});
});


app.get('/about', (req,res)=>{
    res.render('pages/about');
});

app.get('/contact', (req,res)=>{
    res.render('pages/contact');
});
// console.log('Hello');

app.listen(4000);