document.querySelector('input').addEventListener('change', function(){
	var x = document.querySelector('input').value;
	var y;
	if (x < 1)
	{
		y = 1;
	}
	else 
	{
		y = document.querySelector('input').value;
	}
	
	chrome.storage.local.set({'key':
		{
			"timers": y
	}},null);
});

chrome.storage.local.get(['key'], function(result)
{
	document.querySelector('input').value = result.key.timers;
});