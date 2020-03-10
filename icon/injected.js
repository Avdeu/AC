document.querySelector('input').addEventListener('change', function(){
	chrome.storage.local.set({'key':
		{
			var x = document.querySelector('input').value;
			if (x >= 1)
				"timers": document.querySelector('input').value
			else "timers": 1
	}},null);
});

chrome.storage.local.get(['key'], function(result)
{
	document.querySelector('input').value = result.key.timers;
});