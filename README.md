# Diversio FE take-home - Solution
Name: Atharva Shivankar <ads8046@g.rit.edu>

## Introduction
Thank you for considering me for the role of Full-Stack Engineer. This my solution for
Diversio's FE take-home that involved building a Color Picker widget! I really enjoyed
building this widget, so let me briefly walk you through my thought process behind my
implementation approach.

## How to run

In the project directory, run:

```
yarn install
```
```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## Implementation
1. The first step for me to approaching any problem including this exercise was to recognize the
key functional and non-functional requirements. I aimed to write easy-to-read, loosely-couple, 
highly-cohesive code that closely adheres to the SOLID principles.

2. I started off by building each component of the widget while keeping in mind that the mock API
can fail a fetch request. To make sure I built working components, I defined a fixed array of colors 
instead of initially relying on the array fetched from the mock fetchColors "API"/Promise.

3. I populated each component with a pre-defined set of colors.

4. After a lot of debugging with Chrome and React dev tools and confirming the functionality using pre-determined, 
I tested the web applicating by passing the values from the API call. 

5. Since this was a mock API, I checked if the "server" sent a response. In case of API failure which returned a 
`null` response, I rendered a fixed set of primary and secondary colors for the user to pick from, facilitating 
limited functionality of the widget and making it resilient to crashing in the event of an API failure.

6. Like in the case of a real API failure, I logged mock response codes. However, this
was not done using `response.status()` like you would in case of handling a real API calls and I just logged
them to the console for the simplicity of this exercise.

7. To handle real API calls, I would use Promise coupled with async/await functions and implement retries.
I usually like to implement retries to the server using exponential backoff to exponentially increase the time
a server has to fulfill a failed/timed-out request and return a response body until a set time threshold is met.
At production level, using middleware services like Amazon SQS queues can help reduce the strain on servers when 
too many calls are being made in a short time-span.

8. When the `Color Widget` seemed ready, I did some informal User Acceptance Testing by asking my friend to use 
my application. After checking off the functional and non-functional requirements, I expanded the scope a little and
I added a bit of my creative touch to make the widget look nice.

9. Lastly, I tried but could not implement Redux Actions and Reducers for fetching from the mock API as I have limited experience 
with Redux and no prior experience with Saga, so those are two libraries I would need to learn! I also have a big
college project due date approaching so I am short on time to be able to experiment those libraries (and I really love 
experimenting with new technologies)! :-)

Again, thank you so much for taking out your valuable time to review my application and my solution for this exercise! 
Please do not hesitate to reach out to me if you need any further details or clarification.

