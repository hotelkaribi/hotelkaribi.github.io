

	var soundfile="../resources/sidebar.wav"
	//path to sound file, or pass in filename directly into playsound()

	function playsound(soundfile)
	{
	   var c = document.getElementsByTagName("body")[0].getElementsByTagName("*");
	   
		// if ((document.all) && (document.getElementById))
		if ((c) && (document.getElementById))
		//if (c)
		{
			document.getElementById("soundeffect").src="";
 			//reset first in case of problems
			document.getElementById("soundeffect").src=soundfile;
		}
			else
		    {
		       alert('Error message: Missing sound file. Function: Sound.js->playsound(), Filename: '+ soundfile);
		    }
		 
	}

	function bindsound(tag, soundfile, masterElement)
	{
		if (!window.event) 
			return;
		var source=event.srcElement;
		while (source!=masterElement && source.tagName!="HTML")
		{
			if (source.tagName==tag.toUpperCase())
			{
				playsound(soundfile);
				break;
			}
			else
		    {
		       alert('Error message: Missing sound file. Function: Sound.js->bindsound(), Filename: '+ soundfile);
		    }

			source=source.parentElement;
		}
	}
