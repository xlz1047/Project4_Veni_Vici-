# Web Development Project 4 - *Dog Discovery App*

Submitted by: **Xin Zheng**

This web app: **allows users to explore different dog breeds by fetching data from The Dog API. Users can ban specific attributes like breed, life span, and temperament to customize the results they see.**

Time spent: **10 hours spent in total**

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [X] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [ ] Added functionality to ban specific attributes like breed, life span, and temperament from the displayed dog data.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='https://github.com/xlz1047/Project4_Veni_Vici-/blob/main/Veni_Vivi.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [ScreenToGif](https://www.screentogif.com/) for Windows.

## Notes

### Challenges Encountered
The most challenging aspect of building this app was:
1. **Getting the API and understanding how to use it:** Initially, it was confusing to understand how to obtain the API key, make API requests, and properly handle the response data. After some trial and error, I was able to figure out how to structure the requests to fetch dog data and integrate it into the app's logic.
2. **Implementing the ban list functionality:** Ensuring that the app would not display dog breeds with attributes that were added to the ban list required careful handling of state in React. It took some debugging to ensure that the data re-fetching logic worked seamlessly when attributes were added or removed from the ban list.

## License

    Copyright 2024 Xin Zheng

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
