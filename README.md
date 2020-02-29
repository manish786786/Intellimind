# Intellimind
MEAN app with microservice architecture for backend

--note -- Go through the documentation and you can watch demo video too.
		-- imp note -- Go to path Intellimind/backend/userMailer/app.js
		-- add your gmail user name and password in line number 36 and 37.
			then only you can send mail to users mail id.

1) Pre requirement to run this
	
		-- Should have NPM
		-- Should have Node
		-- Should have Angular cli
		-- Should have mongodb

2) How to run and what to run
		
		-- go to Intellimind/backend/rewards and run command app.js 
			-- this will start Coupon service

		-- go to Intellimind/backend/userMailer and run command app.js
			-- this will start user service
      
    -- go to Intellimind/backend/userReward and run command app.js
			-- this will start user score board service

		-- go to Intellimind/frontend/intellimind-frontend/src and run command ng serve
			-- this will start angular app

		-- Go to browser and insert url http://localhost:4200
		-- you good to go.

3) Appication Flow

		-- Login page
			-- Enter number and email
			-- hit sign up
     			-- on submitting , user data will be store at database and mail will be send in users mail id with one coupon code.
			-- it will route to thank you page
      			-- then we have one button in thank you page which will route you to dashboard.
      			-- when we land to dashboard then 
        		-- users ranked board service is called and data will be displayed in rows.
        		-- refferal coupon service will be called and data will be displayed in cards.
        		-- sign up coupon service will be called and data will be displayed in card.
			-- at the bottom of the page again we have sign up form so that user who didn't sign in can sign in after watching sign up coupon.



4) Backend
	Library and framework used : Nodejs, mongodb , express , mongoose, nodemon

		-- In backend folder we have	
			-- rewards app
			-- userMailer app 
      -- userReward app 
				so as to implement microservice architecture.

		-- rewards app has its own 
			--model
			--app.js to start the app
			--its own logic to perform task

		-- userMailer app has its own 
			--model
			--app.js to start the app
			--its own logic to perform task
      
    -- userReward app has its own 
			--model
			--app.js to start the app
			--its own logic to perform task


5) Frontend
	Library and framework used : Angular, HTML5 , css3

		-- In frontend we have used MVC architecture so as to have better transparency of code (We can use this in backend as well as express provide routing feature)

		-- Some of the features	includes
			-- Routing
			-- services
			-- dependency injection
			-- client side validation





6) What Database and collection are their in mongoDB ?

	1) created 3 database in mongodb	
  
		-- rewards 
			Inside we have referalRewardData collection which will have all the data about new coupons.
			Inside we have signUpRewardData collection which will have all the data about sign up coupons.
      
		-- userMail
			Inside we have userMailData collection which will store user data such as mailId and number.
      
   		 -- userReward
			Inside we have userRewardData collection which will store user data who has signup and adding up his 			     r her points so has to display on dashboard.

-- note -- here as we are implementing this with microservices we can use one mongodb and other sql,sqlite,cassandra,redis,etc



 
