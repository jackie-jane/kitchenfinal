import React from 'react';

  function MyPopUpWin() {
            let iMyWidth = (window.screen.width / 2) - (75 + 10);
            let iMyHeight = (window.screen.height / 2) - (100 + 50);
            let win2 = window.open("0.gif", "win2", "status=no,height=388,width=600,resizable=yes,left=" + iMyWidth + ",top=" + iMyHeight + ",screenX=" + iMyWidth + ",screenY=" + iMyHeight );
            win2.focus();
        }


</head>
<body onLoad="javascript:MyPopUpWin()" style="background-color:black;" >

<img src="background.gif" alt="background"  width="1200">
    
    </body>

    <meta http-equiv="refresh" content="2">


</html>

function (props) {
  return (
    <div>
      
    </div>
  );
}

export default ;