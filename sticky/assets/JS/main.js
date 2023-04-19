// 'use strict'

// const stickyContainer = document.getElementById('sticky');

// const note = document.querySelector('.sticky-note');

// note.addEventListener('mousedown', startDrag);
// note.addEventListener('mousemove', drag);
// note.addEventListener('mouseup', endDrag);

// stickyContainer.appendChild(note);

// let isDragging = false;
// let startX, startY, offsetX = 0, offsetY = 0;

// function startDrag(event) {
//     isDragging = true;
//     startX = event.clientX;
//     startY = event.clientY;
//     offsetX = note.offsetLeft;
//     offsetY = note.offsetTop;
// }

// function drag(event) {
//     if (isDragging) {
//         const deltaX = event.clientX - startX;
//         const deltaY = event.clientY - startY
//         note.style.left = offsetX + deltaX + 'px';
//         note.style.left = offsetY + deltaY + 'px';
//     }
// }

// function endDrag(event) {
//     isDragging = false;
// }

const stickyNote = document.querySelector('.sticky-note');
const stickyNote1 = document.querySelector('.sticky-note1');
const deleteButton = document.querySelector('.delete');
const deleteButton1 = document.querySelector('.delete1');

stickyNote.addEventListener('mousedown', startDragging);

let isDragging = false;
let dragOffsetX = 0;
let dragOffsetY = 0;

function startDragging(event) {
  isDragging = true;
  dragOffsetX = event.clientX - stickyNote.offsetLeft;
  dragOffsetY = event.clientY - stickyNote.offsetTop;
  document.addEventListener('mousemove', handleDragging);
  document.addEventListener('mouseup', stopDragging);
  
}

function handleDragging(event) {
  if (isDragging) {
    stickyNote.style.left = (event.clientX - dragOffsetX) + 'px';
    stickyNote.style.top = (event.clientY - dragOffsetY) + 'px';
  }
}

function stopDragging() {
  isDragging = false;
  document.removeEventListener('mousemove', handleDragging);
  document.removeEventListener('mouseup', stopDragging);
  
}

deleteButton.addEventListener('click', function(){
    stickyNote.classList.add('hidden');
}) 

stickyNote1.addEventListener('mousedown', startD);

let isDragging1 = false;
let dragOffsetX1 = 0;
let dragOffsetY1 = 0;

function startD(events) {
  isDragging1 = true;
  dragOffsetX1 = events.clientX - stickyNote1.offsetLeft;
  dragOffsetY1 = events.clientY - stickyNote1.offsetTop;
  document.addEventListener('mousemove', handleD);
  document.addEventListener('mouseup', stopD);
  
}

function handleD(events) {
  if (isDragging1) {
    stickyNote1.style.left = (events.clientX - dragOffsetX1) + 'px';
    stickyNote1.style.top = (events.clientY - dragOffsetY1) + 'px';
  }
}

function stopD() {
  isDragging1 = false;
  document.removeEventListener('mousemove', handleDragging);
  document.removeEventListener('mouseup', stopDragging);
  
}

deleteButton1.addEventListener('click', function(){
    stickyNote1.classList.add('hidden');
}) 



