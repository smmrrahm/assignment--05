# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

* getElementById selects one element by its unique id and Only works for id attributes.

* getElementsByClassName selects all elements that have a specific class.

* querySelector and querySelectorAll selects elements using CSS selectors.
  querySelector  returns the first matching element. and querySelectorAll returns all matching elements as a static NodeList.


  ## How do you create and insert a new element into the DOM?

  * create: document.createElement():
  * insert: document.getElementById() or document.getElementsByClassName() or document.getElementById()


  ### What is Event Bubbling and how does it work?
  * Event bubbling is a process in the DOM where an event, triggered on a specific element, propagates or "bubbles up" through its parent elements to the root of the DOM tree. 
  he event is first handled by the target element. Then the event moves up the DOM tree, triggering any event listeners on parent elements, all the way to <html> and document.
  
  #### What is Event Delegation in JavaScript? Why is it useful?

  * Using the JavaScript technique known as "Event Delegation," you can attach a single event listener to a parent element rather than several independent listeners to different child elements.
  * Instead of attaching distinct listeners to each child element, you can use JavaScript's Event Delegation technique to attach a single event listener to a parent element.

  ##### What is the difference between preventDefault() and stopPropagation() methods?

  * preventDefault() method stops the default action associated with an event.
  
  * stopPropagation() method stops the event from propagating (bubbling or capturing) through the DOM.