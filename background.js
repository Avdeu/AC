  function tick()
  {
		alert('Пора размяться');
		
		chrome.storage.local.get(['key'], function(result)
	  {
		var timerse = 1;
		if(Object.keys(result).length !== 0)
		  {
				  timerse = result.key.timers;
			}
			  timerse = timerse * 15000;
			  timerId = setTimeout(tick, timerse);
	  });
  }
  
	  chrome.storage.local.get(['key'], function(result)
	  {
		  var timerse = 1;
		  if(Object.keys(result).length !== 0)
		  {
				  timerse = result.key.timers;
			  }
			  timerse = timerse * 15000;
			  let timerId = setTimeout(tick, timerse);
			  })

  