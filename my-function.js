console.log('loading function');
export const handler = async(event,context) => {
  console.log('Event logged from Lambda: ', event);
  return  event.name+ ' says '+  event.keyword+ '!'; // Echo back the name
};


// {
// "name": "Anjali",
// "keyword":"Hello "
// }