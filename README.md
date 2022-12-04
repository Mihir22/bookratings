# CS 5610 Project: Book Rating Website

![visitor badge](https://visitor-badge.glitch.me/badge?page_id=suiboli314.bookratings)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

###### Author: Qishu Dong & Chenjie Wu

###### Page: [bookratings](https://bookratings5610.onrender.com/)


# Porject Objective
A book rating page that allows user to rate a book in 1-10 by their choice. Also, user could leave a book review post, delete his own post and see other’s posts. At the home page, show the most favorites books list with ranking that was collected from users’ rating. User is able to sign up an account with email address, username and password, then sign in and sign out. This project applies the concepts learned in class by building a MERN stack application with React, Nodejs, Express, JavaScript, MongoDB, HTML5 and Tailwind. 


Install and Run Instruction
Node+Express runs on http://localhost:4000
React dev server runs http://localhost:3000

## Run it

Clone it, then

```bash
yarn install && cd front && yarn install && yarn build && cd .. && yarn start
```

And check your http://localhost:4000

## Alternative

For development start the two servers

```bash
yarn install && yarn dev
```

And the backend will run on http://localhost:4000

```bash
cd front && yarn install && yarn start
```

And the frontend will run on http://localhost:3000

---

###### [Desgin Document](https://github.com/suiboli314/bookratings/blob/main/P3%20DesignDoc.pdf)
###### [Prensentation](https://github.com/suiboli314/bookratings/blob/main/P3Slides.pdf)

###### [60% milestone on Nov 15](https://github.com/suiboli314/bookratings/releases/tag/60%25)
###### [80% milestone on Nov 22](https://github.com/suiboli314/bookratings/releases/tag/80%25)
###### [100% Complete on Nov 28](https://github.com/suiboli314/bookratings/releases/tag/100%25)

---

## Tech Used
1. HTML5
2. react
3. JavaScript
4. Node.js
5. Express
6. MongoDB
7. Tailwind CSS

## Project Screenshot
<img width="991" alt="image" src="https://user-images.githubusercontent.com/105243848/204412979-de5eb54f-1d65-404a-9c00-91f71d6c23b4.png">
<img width="1846" alt="image" src="https://user-images.githubusercontent.com/105243848/204414714-e2367045-542b-4d35-a572-495650c28782.png">


# Thanks
Thanks to prof. [John Guerra](https://johnguerra.co/classes/webDevelopment_fall_2022/)



##Feedback(Mihir Mesia)

I tried to run the website, but the link is not working. The website is not loading.
After going through your code, here are my few suggestions
  1.In Login.js files in frontend folder, the proptypes declaration is missing
  2. In LeaveReviewForm.js there is big chunk of commented code. It would have been better, if you would have removed it.
  3. The api files in services, do not follow the naming convention. They are named as user.auth.js. I would suggest using '-' or underscore for that.
I was not able to open the website, it showed error 502. 


