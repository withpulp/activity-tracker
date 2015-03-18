```
When user clicks 'Start Tracking' button
Save date/time in 'initialCommit' 
Add 24 hours to 'initialCommit' to get 'dailyGoal'

When user clicks 'Commit Today' button
Subtract 'Commit Today' from 'dailyGoal'

	If difference is between 24 - 47 hours
	User gets 1 day added to streak
	User sees success messaging on UI
	And moment.(); that user clicked 'Commit Today' should be logged
	And 24 hours should be added to it
	And it should become 'dailyGoal'	
	
	
	If difference is between 1 - 23 hours
	User does not get day added to streak.
	User sees error messaging on UI


```
