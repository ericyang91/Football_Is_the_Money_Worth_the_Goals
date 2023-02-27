Football-Is The money worth the Goals

# Project-3-Team-8 
Eric Yang,
Duy Nguyen,
Mojtaba Zadaskar,
John Francavilla

                                                       Football, is the money worth the performance?

In this project our team has decided to take the market-value of different football teams around the world and compare the price paid with their overall performance. 

In the game of football, a win is worth three points while a tie is only worth 1, a loss is worth 0 points. Using this, we have determined that a dominant team will average 2+ points per game. It would be expected that the higher the market-value, the more points will be gained. 

The findings of this project showed that while most teams that have high market value perform well, it is not the only variable that affects the teams ability to win. 

On our dashboard, you will be able to see the map of the world with bubbles depicting the market value of certain leagues... the larger the bubble, the higher the market-value. 

![image](https://user-images.githubusercontent.com/82785105/221626217-4a93ebc1-09f1-4d5f-a8b8-f5ac29f846bb.png)

While the market-value of a team is usually an accurate way of determining the best teams in the league, it is not always the case, take Chelsea for example. They have a team market-value of $1.01 Billion, the second most out of any team in the world behind only Manchester City. You would not know this by looking at Chelsea in the standings (10th place), Brighton FC has a team market value of only ~300 million and is performing better than Chelsea. there is a ~$700 million difference in the market value of these two teams but the standings tell a different story. 

Overall, a deeper dive into these stats is needed to comfortably define whether or not market-value is a good litmus test for how dominant a team is in competition. There are many stats that prove the hypothesis but then many conflicting stats as well that show that the correlation is not as high as once believed. 

For example, the four leagues with the highest market-value (Premier League, La Liga, Serie A, and Bundesliga) also had the highest amounts of goals scored. It is difficult to say that the reason for this is all due to money, perhaps the play style of these leagues is just different. The correlation between market-value and goals scored was not linear, it may ave been the case for the aforementioned leagues but the rest of the leagues did not share that same outcome. While most money might = more goals, less money != less goals. For this reason, this hypothesis might need more finetuning to provide definitive results  

How this information was found and utilized...
  1. The api we found and used was from rapid API, TranferMarkt provided the data we needed.
  2. From there we were able to add this data into a postgres database and begin to clean the data. 
  3. Flask was used to create an offline api from the postgres database instead of making an api call directly from TransferMarkt over and over again
  4. from there, the data was taken and used in a leaflet map, as well as a pie chart and bubble map along with a dropdown menu to choose from specific leagues. 
  5. Everything was incorporated into a dashboard for the user to see easily. 
  
Overall, the hypothesis our group had decided on before doing the research was that the market-value of a team has an affect on their performance. After doing the research, even though there is definitely some truth to the hypothesis, there is no correlation found that can verify it. For this reason we believe it is fair to say that the null hypothesis of market-value has no effect on performance is true. Of course with more studies, this can change.  

