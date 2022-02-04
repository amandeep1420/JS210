/*
>Awarding Prizes<
You are given a scoresheet of names and the amount of points they have. 
Return a scoresheet with the same names, but instead of points, return what prize they get.

"Gold", "Silver", or "Bronze" to the 1st, 2nd and 3rd place respectively. 
For all the other names, return "Participation" for the prize.
No number of points will be the same amongst participants.

Examples
awardPrizes({
  "Joshua" : 45,
  "Alex" : 39,
  "Eric" : 43
})
// returns:
{
  "Joshua" : "Gold",
  "Alex" : "Bronze",
  "Eric" : "Silver"
}

awardPrizes({
  "Joshua" : -45,
  "Alex" : 39,
  "Eric" : -43
})
// returns:
{
  "Joshua" : "Gold",
  "Alex" : "Bronze",
  "Eric" : "Silver"
}

awardPrizes({
  "Person A" : 1,
  "Person B" : 2,
  "Person C" : 3,
  "Person D" : 4,
  "Person E" : 102
})
// returns:
{
  "Person A" : "Participation",
  "Person B" : "Participation",
  "Person C" : "Bronze",
  "Person D" : "Silver",
  "Person E" : "Gold"
}

awardPrizes({
  "Mario" : 99,
  "Luigi" : 100,
  "Yoshi" : 299,
  "Toad" : 2
})
// returns:
{
  "Mario" : "Bronze",
  "Luigi" : "Silver",
  "Yoshi" : "Gold",
  "Toad" : "Participation"
}
*/