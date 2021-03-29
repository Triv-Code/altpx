# altpx_website
The website is designed to show off a portrait series for altpx (fictional photo business). It is a very minimalist aesthetic, with the portraits being the main focus. Opening with one huge image, I added a carousel to allow the user to click (or arrow key) through the rest of the series. The About and Contact pages are for extra info or presumably inquiring about photo work. 

Javascript Functionality 
    1. Show / Hide Content (Menus, Page (divs), Carousel)
    2. Form Validation
    3. Carousel (Changing viewport by Img PX count)
nav.js
- The navigation menus shows three pages, but there is actually only one html document. The content for each page is under a different div and the script shows the content of the current div while hiding the content of the other two. 
The second part of this script is for the mobile menu, which has the navigation nested inside of the (hamburger) menu button. The menu() function opens and closes the menu when clicked by changing the display styles. The closeMenu() function closes the menu box when one of the pages are clicked. This function is called in the HTML itself. 
	
app.js
 - This script is for the image carousels functionality. The script reads the pixel width of the image and when you click the next/previous buttons it adjusts the viewport left/right based on the pixel width. This shows the next image, which are actually just placed side by side in a row. There is one function for next and one for previous and they are called by an EventListener for the button presses. I also added in arrow key functionality, by calling for the functions on keydown. 
 - The last part of the script is to hide the next/previous button when you reach the first/final image. This is just a subtle way to let you know you've reached the end or are back at the beginning. 
	
form.js
 - This script is for form validation. It checks to see if each section of the form has been filled out and if it hasn't it displays an error message beneath the input area when submitted. If you correct the problem, the error will disappear on the next submit. If all the areas have been filled out an alert is prompted, thanking you for your message. 

CSS Functionality 
    Attempted Requirements:
        1. Mobile (Hamburger Menu) Nav
        2. Flex-Box Column / Row to change layout.
650 px
 - Mobile Menu (hamburger) is shown, if clicked it shows navigation options under the header. Above 650px the menu is hidden and the regular desktop navigation takes its place. 
 - Photos are stacked in a column, for scrolling down. 
900 px
 - About Page is in a column, stacking the information. The picture is on top, information below that. When wider then 900px, the picture and information are side by side (row). 
 - Contact Page is also in a column, swapping to a side by side (row) when above 900px. 
1500 px
 - Everything stops scaling. The width is maintained and all the content remains centered. 
