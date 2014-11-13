Blocktarget
===========

Make block level containers a click target for a child link.

Installation
============

Add the javascript file to you HTML document. 
Requires jQuery.

Usage
=====

Run `$.blocktarget();` when the DOM is ready; You can reinitialize at any point by calling this function again.

Simply add the class `block-target-link` to a link.
Add the class `block-target` to a parent element you wish to be a click target for that link.

You can change these default settings by passing in an options object:

```javascript
$.blocktarget({
	'linkClass' : 'block-target-link',  // class name for the block
	'blockClass' : 'block-target',  // class name for the link
	'pointer' : true  // does the block have a pointer cursor?
});
```javascript
