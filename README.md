# Color Picker Widget
Name: Atharva Shivankar    <ads8046@g.rit.edu>

## Project Link

GitHub Pages Link: https://ads8046.github.io/diversio-frontend-exercise/

## Introduction
Thank you for considering me for the role of Junior Engineer at AirVet. This my solution for
an exercise that involved building a Color Picker widget! I really enjoyed
building this project. Let me briefly walk you through my thought process behind my
implementation approach.\
You can find the exercise here: https://gitfront.io/r/sometimescasey/9ee3c8450b88bf353cfa45487e002f19399b4477/udkMfz5jPHme8bEs/

## How to run

In the project directory, run:

```
yarn install
```
```
yarn start
```

I have developed and tested the application on:
- `node --version`: 15.14.0
- `npm --version`: 7.7.6

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.


## Implementation
1. The first step for me to approaching any problem including this exercise was to recognize the
key functional and non-functional requirements. I aimed to write easy-to-read, loosely-coupled, 
highly-cohesive code that closely adheres to the SOLID principles.

2. I started off by building each component of the widget while keeping in mind that the mock API
can fail a fetch request. To make sure I built working components, I defined a fixed array of colors 
instead of initially relying on the array fetched from the mock fetchColors "API"/Promise.

3. I populated each component with a pre-defined set of colors, and added the expected functionality such as the 
necessary events that need to occur when the user interacts with the widget and managing the component state.

4. After debugging with Chrome and React dev tools and confirming the functionality using a pre-defined set of colors, 
I tested the web applicating by passing in the actual values from the API call. 

5. Since this was a mock API, I checked if the "server" sent a response. In case of API failure which returned a 
`null` response, I rendered a fixed set of primary and secondary colors for the user to pick from, facilitating 
limited functionality of the widget and making it resilient to crashing in the event of an API failure.

6. Like in the case of a real API failure, I logged mock response codes. However, this
was not done using `response.status()` like you would in case of handling a real API calls and I just logged
them to the console for the simplicity of this exercise.

7. To handle real API calls, I would use Promises coupled with async/await functions and implement retries.
I usually like to implement retries to the server using exponential backoff to exponentially increase the time
a server has to fulfill a failed/timed-out request and return a response body until a set time threshold is met.
At production level, using middleware services like Amazon SQS queues can help reduce the strain on servers when 
too many calls are being made in a short time-span.

8. When the `Color Widget` seemed ready, I did some informal User Acceptance Testing by asking my friend to use 
my application. After checking off the functional and non-functional requirements, I expanded the scope a little and
I added a bit of my creative touch to make the widget look nice.

Please do not hesitate to reach out to me if you need any further details, have any feedback or require any clarifications.

