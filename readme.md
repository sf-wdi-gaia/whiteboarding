<!-- ---
title: Whiteboarding for Interviews
duration: "1:25"
creator:
    name: Drew Mahrt
    city: NYC
--- -->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Whiteboarding for Interviews

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

Whiteboarding is often a very important part of the technical interview process and gives the interviewers an insight into your thought process as well as your knowledge on the subject.

### What are the objectives?
*After this lesson, you will be able to:*
- Describe the purpose of whiteboarding
- Implement whiteboarding techniques

### Where should we be now?
*Before this workshop, developers should already be able to:*
- Write a function in Java using programming fundamentals

## Introduction

 As the name implies, whiteboarding is the technique of solving a problem on a whiteboard. While this sounds relatively straightforward, it can actually be quite challenging. Today we're going to learn!

> Check: What types of questions do you think you might be asked during a whiteboarding session.

***

<a name="introduction"></a>
## Whiteboarding Techniques

While one of the main goals in whiteboarding is to solve the problem you are given, the interviewers are also finding out much more about who you are and how you work.

Here are some extremely important skills to practice while at the whiteboard:

- **Keep talking:** One of the worst things you can do is walk up to the board and start writing your code to solve the problem without communicating your plan of attack or explaining what you are writing to your interviewer. As soon as you have gathered your thoughts, start brainstorming out loud about how you are thinking of solving the problem. As you are writing code, explain what the goal of the code is. **Part of the goal of whiteboarding is to get a feel for how you will communicate with other team members.**

- **Ask questions:** If you are unclear about part of the problem, ask questions. Interviews are your time to shine, and you don't want to waste it by going down the wrong path because of a misunderstanding.

- **Start with an example:** Before you start writing code, write out a few examples of what your code is trying to accomplish. This is extremely useful, because as you are coding, you can refer back to it to make sure you are still on track, and then at the end, you can trace the example through to show the interviewer it is working. If a diagram is appropriate, draw that too!

- **Pseudocode:** Before you dive into the code, write out pseudocode, or at the very least, list out the steps you are going to take. Not only will this give you a guide to refer back to while you code, but it can help you spot mistakes in your logic before you start coding. Again, this ties back to the ability for your interviewer to understand your overall thought process.

If you can't finish a question, that's ok! It's more important that you show the interviewer how you approached the problem and to give them a good idea of how you code.

> Scenario: You feel completely stuck! What should you do?

***

<a name="guided-practice"></a>
## Guided Practice: Whiteboarding Examples

Now that we've discussed some techniques, let's walk through a real example.

Suppose we had the following question:

```
Given two arrays of integers of equal length, that are identical except for a single element, write a method to return the index of the number which is different in the second array.
```

> What is our first step? Whats our second step?

First, we should start off with a few quick examples:

```
  findDifference([1,2,3],[1,2,4]) => 2
  findDifference([1,2,3,4],[1,3,3,4]) => 1
  findDifference([0],[1]) => 0
```

Next, we should list the steps we are going to follow in our method (i.e. pseudocode)

1. Create a loop that goes through the arrays.
2. At each index, compare the values in both arrays
3. If they are different, return that index, else move on to the next index
4. Return -1 if no difference is found

Finally, we can start writing our code:

```javaScript
function findDifference(array1, array2){
  for(var i=0; i < array1.length; i++){
    if(array1[i] != array2[i]){
      return i;
    }
  }
  return -1;
}
```

You can see that each step we wrote out corresponds to a certain section of the code. We started off with concrete examples, then moved on to planning, and then finally wrote out our code.

***

<a name="ind-practice"></a>
## Independent Practice: Whiteboarding Problems

Now it's your turn! Get into groups of 3-4 people, and each person will take, at most, 10 minutes to pick a problem from the list below to solve. The remaining people will act as the interviewers. Remember to follow the techniques we discussed.

> Instructor Note: Circulate around the room listening to how students are doing and offer advice when needed.

1. Find the character that appears the most time in a given string (i.e. "tomorrow" should return 'o'). Return the character later in the alphabet if there is a tie.
2. An array is supposed to contain the numbers 1-10, but one number is missing. Find and return that number.
3. Write a method that finds the second highest number in an array of integers.
4. Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.
5. Given an array of ints, return the string "even" if there are more even elements in the array, or "odd" if there are more odd elements in the array.

> Check: Take one minute to review the solution to each of the whiteboarding problems. Choose one student to lead the review for each.

***

<a name="conclusion"></a>
## Conclusion

Whiteboarding can be deceptively difficult and only becomes easier with practice - we're doing this in week 1, so you can immediately start practicing and get better each week.  Knowing these basic techniques will help you to relax and concentrate on the problem you are presented with during your interviews.

- Describe the steps we reviewed when approaching a whiteboarding problem?
- Why is it ok to ask questions?
